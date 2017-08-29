// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export const intro = (
  <p className="site-text-introduction">
    Page level toasts are universally visible and are fixed to the top of the
    page even as the user scrolls. This ensures that the message is always
    delivered to the user.
  </p>
);

export default (
  <div>
    <p>
      Toasts accept two parameters: duration and dismissible. Duration controls
      how long the toast is visible, with a minimum time of 5 seconds.
      Dismissible controls whether the X is visible on the toast to let the user
      close the toast.
    </p>
    <p>
      Toasts should provide a link to the relevant record in the case of
      creates. Or a primary action- like undo. In the case of toast for items
      added to a feed or related list, the link should scroll the user down the
      page until the item is visible.
    </p>
    <p>
      All toasts other than success toasts should also provide an icon to
      distinguish the kind of message that it is. For example error toasts
      include the error icon.
    </p>
    <h4 className="site-text-heading--label">Accessibility</h4>
    <p>
      Notifications should contain <code>role="alert"</code> on the container to
      signal to assistive technology that they require the user&rsquo;s
      immediate attention. Use a span with <code>.slds-assistive-text</code> to
      let the user know what type of notification it is.
    </p>
  </div>
);
