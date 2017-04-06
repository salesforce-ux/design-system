<p>Responsive visibility classes will HIDE content on specific breakpoints.
<code>slds-show--[breakpoint]</code> renders <code>display: none;</code> when the the view port width is smaller than the breakpoint, and do nothing if it is bigger or equal.
<code>slds-hide--[breakpoint]</code> does the oposite by rendering <code>display: none;</code> when the the view port width is bigger or equal than the breakpoint, and do nothing if it is smaller.
</p>

<div class="demo-visibility-chart slds-m-bottom--large">
  <div class="slds-scrollable--x">
    <table class="slds-table slds-table--bordered slds-no-row-hover">
      <tr class="site-text-heading--label">
        <th scope="col"><span class="slds-assistive-text">Class Name</span></th>
        <th scope="col">Less than 320px</th>
        <th scope="col">X-Small (>= 320px)</th>
        <th scope="col">Small (>= 480px)</th>
        <th scope="col">Medium (>= 768px)</th>
        <th scope="col">Large (>= 1024px)</th>
        <th scope="col">X-Large (>= 1280px)</th>
      </tr>
      <tr>
        <th><code>.slds-hide--x-small</code></th>
        <td class="visible">Show</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
      </tr>
      <tr>
        <th><code>.slds-show--x-small</code></th>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
      </tr>
      <tr>
        <th><code>.slds-hide--small</code></th>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
      </tr>
      <tr>
        <th><code>.slds-show--small</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
      </tr>
      <tr>
        <th><code>.slds-hide--medium</code></th>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
      </tr>
      <tr>
        <th><code>.slds-show--medium</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
      </tr>
      <tr>
        <th><code>.slds-hide--large</code></th>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
      </tr>
      <tr>
        <th><code>.slds-show--large</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
      </tr>
      <tr>
        <th><code>.slds-hide--x-large</code></th>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="hidden">Hide</td>
      </tr>
      <tr>
        <th><code>.slds-show--x-large</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
      </tr>
    </table>
  </div>
</div>
