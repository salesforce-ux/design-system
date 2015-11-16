/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/* eslint-disable */

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

var utils = require('./utils');

// http://yiminghe.iteye.com/blog/1124720

/**
 * 得到会导致元素显示不全的祖先元素
 */

function getOffsetParent(element) {
  // ie 这个也不是完全可行
  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法
  var doc = element.ownerDocument,
    body = doc.body,
    parent,
    positionStyle = utils.css(element, 'position'),
    skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
  }

  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    positionStyle = utils.css(parent, 'position');
    if (positionStyle !== 'static') {
      return parent;
    }
  }
  return null;
}

/**
 * 获得元素的显示部分的区域
 */

function getVisibleRectForElement(element) {
  var visibleRect = {
      left: 0,
      right: Infinity,
      top: 0,
      bottom: Infinity
    },
    el,
    scrollX,
    scrollY,
    winSize,
    doc = element.ownerDocument,
    win = doc.defaultView || doc.parentWindow,
    body = doc.body,
    documentElement = doc.documentElement;

  // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.
  for (el = element;
       (el = getOffsetParent(el));) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
        // body may have overflow set on it, yet we still get the entire
        // viewport. In some browsers, el.offsetParent may be
        // document.documentElement, so check for that too.
      (el !== body &&
      el !== documentElement &&
      utils.css(el, 'overflow') !== 'visible')) {
      var pos = utils.offset(el);
      // add border
      pos.left += el.clientLeft;
      pos.top += el.clientTop;

      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right,
        // consider area without scrollBar
        pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom,
        pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    }
  }

  // Clip by window's viewport.
  scrollX = utils.getWindowScrollLeft(win);
  scrollY = utils.getWindowScrollTop(win);
  visibleRect.left = Math.max(visibleRect.left, scrollX);
  visibleRect.top = Math.max(visibleRect.top, scrollY);
  winSize = {
    width: utils.viewportWidth(win),
    height: utils.viewportHeight(win)
  };
  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
  return visibleRect.top >= 0 && visibleRect.left >= 0 &&
  visibleRect.bottom > visibleRect.top &&
  visibleRect.right > visibleRect.left ?
    visibleRect : null;
}

function getElFuturePos(elRegion, refNodeRegion, points, offset) {
  var xy,
    diff,
    p1,
    p2;

  xy = {
    left: elRegion.left,
    top: elRegion.top
  };

  p1 = getAlignOffset(refNodeRegion, points[1]);
  p2 = getAlignOffset(elRegion, points[0]);

  diff = [p2.left - p1.left, p2.top - p1.top];

  return {
    left: xy.left - diff[0] + (+offset[0]),
    top: xy.top - diff[1] + (+offset[1])
  };
}

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left ||
    elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top ||
    elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos),
    size = {
      width: elRegion.width,
      height: elRegion.height
    };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }

  // Left edge inside and right edge outside viewport, try to resize it.
  if (overflow.resizeWidth &&
    pos.left >= visibleRect.left &&
    pos.left + size.width > visibleRect.right) {
    size.width -= (pos.left + size.width) - visibleRect.right;
  }

  // Right edge outside viewport, try to move it.
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }

  // Top edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }

  // Top edge inside and bottom edge outside viewport, try to resize it.
  if (overflow.resizeHeight &&
    pos.top >= visibleRect.top &&
    pos.top + size.height > visibleRect.bottom) {
    size.height -= (pos.top + size.height) - visibleRect.bottom;
  }

  // Bottom edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

domAlign.__getOffsetParent = getOffsetParent;

domAlign.__getVisibleRectForElement = getVisibleRectForElement;

function getRegion(node) {
  var offset, w, h;
  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */

function getAlignOffset(region, align) {
  var V = align.charAt(0),
    H = align.charAt(1),
    w = region.width,
    h = region.height,
    x, y;

  x = region.left;
  y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

/*
 * align node
 * @param {Element} node current dom node
 * @param {Object} align align config
 *
 *    @example
 *    {
 *      node: null,         // 参考元素, falsy 或 window 为可视区域, 'trigger' 为触发元素, 其他为指定元素
 *      points: ['cc','cc'], // ['tr', 'tl'] 表示 overlay 的 tr 与参考节点的 tl 对齐
 *      offset: [0, 0]      // 有效值为 [n, m]
 *    }
 */
function domAlign(el, refNode, align) {
  var points = align.points;
  var offset = align.offset;
  var overflow = align.overflow;
  offset = offset && [].concat(offset) || [0, 0];
  overflow = overflow || {};
  var newOverflowCfg = {};

  var fail = 0;
  // 当前节点可以被放置的显示区域
  var visibleRect = getVisibleRectForElement(el);
  // 当前节点所占的区域, left/top/width/height
  var elRegion = getRegion(el);
  // 参照节点所占的区域, left/top/width/height
  var refNodeRegion = getRegion(refNode);
  // 当前节点将要被放置的位置
  var elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
  // 当前节点将要所处的区域
  var newElRegion = utils.merge(elRegion, elFuturePos);

  // 如果可视区域不能完全放置当前节点时允许调整
  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        fail = 1;
        // 对齐位置反下
        points = flip(points, /[lr]/ig, {
          l: 'r',
          r: 'l'
        });
        // 偏移量也反下
        offset = flipOffset(offset, 0);
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        fail = 1;
        // 对齐位置反下
        points = flip(points, /[tb]/ig, {
          t: 'b',
          b: 't'
        });
        // 偏移量也反下
        offset = flipOffset(offset, 1);
      }
    }

    // 如果失败，重新计算当前节点将要被放置的位置
    if (fail) {
      elFuturePos = getElFuturePos(elRegion, refNodeRegion, points, offset);
      utils.mix(newElRegion, elFuturePos);
    }

    // 检查反下后的位置是否可以放下了
    // 如果仍然放不下只有指定了可以调整当前方向才调整
    newOverflowCfg.adjustX = overflow.adjustX &&
    isFailX(elFuturePos, elRegion, visibleRect);

    newOverflowCfg.adjustY = overflow.adjustY &&
    isFailY(elFuturePos, elRegion, visibleRect);

    // 确实要调整，甚至可能会调整高度宽度
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion,
        visibleRect, newOverflowCfg);
    }
  }

  // https://github.com/kissyteam/kissy/issues/190
  // http://localhost:8888/kissy/src/overlay/demo/other/relative_align/align.html
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>
  utils.offset(el, {left: newElRegion.left, top: newElRegion.top});

  // need judge to in case set fixed with in css on height auto element
  if (newElRegion.width !== elRegion.width) {
    utils.css(el, 'width', el.width() + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(el, 'height', el.height() + newElRegion.height - elRegion.height);
  }

  return {
    points: points,
    offset: offset,
    overflow: newOverflowCfg
  };
}

export default domAlign;
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/
