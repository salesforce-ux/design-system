/*eslint-disable */

/**
 * IMPORTANT: This module is being shimmed so that a custom document can be passed in
 */
export default function (document, opts) {

/*! svg4everybody v2.0.3 | github.com/jonathantneal/svg4everybody */

function embed(svg, target) {
    // if the target exists
    if (target) {
        // create a document fragment to hold the contents of the target
        var fragment = document.createDocumentFragment();

        // cache the closest matching viewBox
        var viewBox = !svg.getAttribute('viewBox') && target.getAttribute('viewBox');

        // conditionally set the viewBox on the svg
        if (viewBox) {
            svg.setAttribute('viewBox', viewBox);
        }

        // clone the target
        var clone = target.cloneNode(true);

        // copy the contents of the clone into the fragment
        while (clone.childNodes.length) {
            fragment.appendChild(clone.firstChild);
        }

        // append the fragment into the svg
        svg.appendChild(fragment);
    }
}

function loadreadystatechange(xhr) {
    // listen to changes in the request
    xhr.onreadystatechange = function () {
        // if the request is ready
        if (xhr.readyState === 4) {
            // get the cached html document
            var cachedDocument = xhr._cachedDocument;

            // ensure the cached html document based on the xhr response
            if (!cachedDocument) {
                cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument('');

                cachedDocument.body.innerHTML = xhr.responseText;

                xhr._cachedTarget = {};
            }

            // clear the xhr embeds list and embed each item
            xhr._embeds.splice(0).map(function (item) {
                // get the cached target
                var target = xhr._cachedTarget[item.id];

                // ensure the cached target
                if (!target) {
                    target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id);
                }

                // embed the target into the svg
                embed(item.svg, target);
            });
        }
    };

    // test the ready state change immediately
    xhr.onreadystatechange();
}

function svg4everybody(rawopts) {
    var opts = Object(rawopts);

    // create legacy support variables
    var nosvg;
    var fallback;

    // if running with legacy support
    if (LEGACY_SUPPORT) {
        // configure the fallback method
        fallback = opts.fallback || function (src) {
            return src.replace(/\?[^#]+/, '').replace('#', '.').replace(/^\./, '') + '.png' + (/\?[^#]+/.exec(src) || [''])[0];
        };

        // set whether to shiv <svg> and <use> elements and use image fallbacks
        nosvg = 'nosvg' in opts ? opts.nosvg : /\bMSIE [1-8]\b/.test(navigator.userAgent);

        // conditionally shiv <svg> and <use>
        if (nosvg) {
            document.createElement('svg');
            document.createElement('use');
        }
    }

    // set whether the polyfill will be activated or not
    var polyfill;
    var olderIEUA = /\bMSIE [1-8]\.0\b/;
    var newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/;
    var webkitUA = /\bAppleWebKit\/(\d+)\b/;
    var olderEdgeUA = /\bEdge\/12\.(\d+)\b/;

    if ('polyfill' in opts) {
        polyfill = opts.polyfill;
    } else if (LEGACY_SUPPORT) {
        polyfill = olderIEUA.test(navigator.userAgent) || newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
    } else {
        polyfill = newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
    }

    // create xhr requests object
    var requests = {};

    // use request animation frame or a timeout to search the dom for svgs
    var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

    // get a live collection of use elements on the page
    var uses = document.getElementsByTagName('use');

    function oninterval() {
        // get the cached <use> index
        var index = 0;

        // while the index exists in the live <use> collection
        while (index < uses.length) {
            // get the current <use>
            var use = uses[index];

            // get the current <svg>
            var svg = use.parentNode;

            if (svg && /svg/i.test(svg.nodeName)) {
                var src = use.getAttribute('xlink:href');

                // if running with legacy support
                if (LEGACY_SUPPORT && nosvg) {
                    // create a new fallback image
                    var img = document.createElement('img');

                    // force display in older IE
                    img.style.cssText = 'display:inline-block;height:100%;width:100%';

                    // set the fallback size using the svg size
                    img.setAttribute('width', svg.getAttribute('width') || svg.clientWidth);
                    img.setAttribute('height', svg.getAttribute('height') || svg.clientHeight);

                    // set the fallback src
                    img.src = fallback(src, svg, use);

                    // replace the <use> with the fallback image
                    svg.replaceChild(img, use);
                } else if (polyfill) {
                    if (!opts.validate || opts.validate(src, svg, use)) {
                        // remove the <use> element
                        svg.removeChild(use);

                        // parse the src and get the url and id
                        var srcSplit = src.split('#');
                        var url = srcSplit.shift();
                        var id = srcSplit.join('#');

                        // if the link is external
                        if (url.length) {
                            // get the cached xhr request
                            var xhr = requests[url];

                            // ensure the xhr request exists
                            if (!xhr) {
                                xhr = requests[url] = new XMLHttpRequest();

                                xhr.open('GET', url);

                                xhr.send();

                                xhr._embeds = [];
                            }

                            // add the svg and id as an item to the xhr embeds list
                            xhr._embeds.push({
                                svg: svg,
                                id: id
                            });

                            // prepare the xhr ready state change event
                            loadreadystatechange(xhr);
                        } else {
                            // embed the local id into the svg
                            embed(svg, document.getElementById(id));
                        }
                    }
                }
            } else {
                // increase the index when the previous value was not "valid"
                ++index;
            }
        }

        // continue the interval
        requestAnimationFrame(oninterval, 67);
    }

    // conditionally start the interval if the polyfill is active
    if (polyfill) {
        oninterval();
    }
}

}
