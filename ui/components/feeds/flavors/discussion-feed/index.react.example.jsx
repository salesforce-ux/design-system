/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { Comment } from 'ui/components/feeds/flavors/comment/index.react.example';
import { CommentLongform } from 'ui/components/feeds/flavors/comment/index.react.example';
import { CommentFooter } from 'ui/components/feeds/flavors/comment/index.react.example';
import { Button } from 'ui/components/buttons/flavors/base/index.react.example';
import { Default as Publisher } from 'ui/components/publishers/flavors/comment/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';

export default (
<div className="demo-only">
  <div className={pf('feed')}>
    <ul className={pf('feed__list')}>
      <li className={pf('feed__item')}>
        <Comment>
          <CommentLongform><p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p></CommentLongform>
          <CommentFooter showLikeButton likes="21" />
        </Comment>
      </li>
      <li className={pf('feed__item')}>
        <Comment>
          <CommentLongform><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></CommentLongform>
          <CommentFooter showLikeButton likes="456" />
        </Comment>
      </li>
      <li className={pf('feed__item')}>
        <Comment>
          <CommentLongform><p>Nullam quis risus eget urna mollis ornare vel eu leo.</p></CommentLongform>
          <CommentFooter showLikeButton likes="62" />
        </Comment>
      </li>
    </ul>
  </div>
</div>
);
