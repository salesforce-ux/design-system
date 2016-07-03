<p>Responsive visibility classes will show and hide content on specific breakpoints. By default, <code>-show</code> renders as <code>display: block;</code>, but you may pass through a display property of your choice by adding a modifier to the end of the classname. For example, you may need to render an element as <code>display: inline-block</code> at a medium breakpoint, adding <code>--inline-block</code> to the end of <code>.{{cssPrefix}}medium-show</code> to produce the class of <code>.{{cssPrefix}}medium-show--inline-block</code> will give you that outcome.</p>

<div class="demo-visibility-chart {{cssPrefix}}m-bottom--large">
  <div class="{{cssPrefix}}scrollable--x">
    <table class="{{cssPrefix}}table {{cssPrefix}}table--bordered {{cssPrefix}}no-row-hover">
      <tr class="site-text-heading--label">
        <th scope="col"><span class="{{cssPrefix}}assistive-text">Class Name</span></th>
        <th scope="col">Less than 320px</th>
        <th scope="col">X-Small (320px)</th>
        <th scope="col">Small (480px)</th>
        <th scope="col">Medium (768px)</th>
        <th scope="col">Large (1024px)</th>
        <th scope="col">Greater than 1024px</th>
      </tr>
      <tr>
        <th><code>.{{cssPrefix}}x-small-show</code></th>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
      </tr>
      <tr>
        <th><code>.{{cssPrefix}}small-show</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
      </tr>
      <tr>
        <th><code>.{{cssPrefix}}medium-show</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
      </tr>
      <tr>
        <th><code>.{{cssPrefix}}large-show</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="visible">Show</td>
      </tr>
      <tr>
        <th><code>.{{cssPrefix}}x-small-show-only</code></th>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
      </tr>
      <tr>
        <th><code>.{{cssPrefix}}small-show-only</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
      </tr>
      <tr>
        <th><code>.{{cssPrefix}}medium-show-only</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Show</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
      </tr>
      <tr>
        <th><code>.{{cssPrefix}}max-x-small-hide</code></th>
        <td class="hidden">Hide</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
      </tr>
      <tr>
        <th><code>.{{cssPrefix}}max-small-hide</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
      </tr>
      <tr>
        <th><code>.{{cssPrefix}}max-medium-hide</code></th>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
      </tr>
      <tr>
        <th><code>.{{cssPrefix}}min-x-small-hide</code></th>
        <td class="visible">Initial</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
      </tr>
      <tr>
        <th><code>.{{cssPrefix}}min-small-hide</code></th>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
      </tr>
      <tr>
        <th><code>.{{cssPrefix}}min-medium-hide</code></th>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="visible">Initial</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
        <td class="hidden">Hide</td>
      </tr>
    </table>
  </div>
</div>
