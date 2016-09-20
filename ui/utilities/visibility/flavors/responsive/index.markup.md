<p>Responsive visibility classes will show and hide content on specific breakpoints. By default, <code>-show</code> renders as <code>display: block;</code>, but you may pass through a display property of your choice by adding a modifier to the end of the classname. For example, you may need to render an element as <code>display: inline-block</code> at a medium breakpoint, adding <code>--inline-block</code> to the end of <code>.slds-medium-show</code> to produce the class of <code>.slds-medium-show--inline-block</code> will give you that outcome.</p>

<div class="demo-visibility-chart slds-m-bottom--large">
  <div class="slds-scrollable--x">
    <table class="slds-table slds-table--bordered slds-no-row-hover">
      <tr class="site-text-heading--label">
        <th scope="col"><span class="slds-assistive-text">Class Name</span></th>
        <th scope="col">Less than 320px</th>
        <th scope="col">X-Small (320px)</th>
        <th scope="col">Small (480px)</th>
        <th scope="col">Medium (768px)</th>
        <th scope="col">Large (1024px)</th>
        <th scope="col">Greater than 1024px</th>
      </tr>
      <tr>
        <th><code>.slds-x-small-show</code></th>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
      </tr>
      <tr>
        <th><code>.slds-small-show</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
      </tr>
      <tr>
        <th><code>.slds-medium-show</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
      </tr>
      <tr>
        <th><code>.slds-large-show</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
      </tr>
      <tr>
        <th><code>.slds-x-small-show-only</code></th>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
      </tr>
      <tr>
        <th><code>.slds-small-show-only</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
      </tr>
      <tr>
        <th><code>.slds-medium-show-only</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
      </tr>
      <tr>
        <th><code>.slds-max-x-small-hide</code></th>
        <td class="hidden">Hide</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
      </tr>
      <tr>
        <th><code>.slds-max-small-hide</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
      </tr>
      <tr>
        <th><code>.slds-max-medium-hide</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
      </tr>
    </table>
  </div>
</div>
