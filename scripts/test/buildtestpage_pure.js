/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// Generates testpage consisting of all components, utilities and core markup in a long list
// usage: node scripts/test/buildtestpage.js

var fs = require('fs');
var now = new Date();
var testpageFileName = '.generated/testpage_pure.html';

var outputHtml = '<html>\n<head>\n<title>Lightning Design System test page: Hello everybody\n</title>\n<meta http-equiv="X-UA-Compatible" content="IE=Edge">\n<script src="../../assets/scripts/site.js"></script>\n<link rel="stylesheet" href="../../assets/styles/salesforce-design-system.css"/>\n</head>\n<body>\n<div class="container" style="width: 1024px; margin: auto;">\n<div class="main-content">';

// load definitions
var componentsData = require('../../.generated/ui/ui.components.json');
var coreData = require('../../.generated/ui/ui.core.json');
var utilitiesData = require('../../.generated/ui/ui.utilities.json');

var comp_count = 1;
outputHtml = outputHtml + '\n<h4 class="text-heading--label m-bottom--small">Lightning Design System all examples - built: ' + now + '</h4>';


// render components
outputHtml = outputHtml + '\n<section class="components-section m-bottom--x-large">\n<h2 class="text-heading--large p-bottom--medium">COMPONENTS</h2>\n';

componentsData.forEach( function(comp) {

  // skip notifications for now because they mess up test page
  if ((comp.config.title !== 'Notifications') && (comp.config.title !== 'Lookup') && (comp.config.title !== 'Modal')) {

    var prefix = 'COMP' + comp_count;
    console.log(prefix + ' ' + comp.config.title);
    if (comp.example && comp.example.html && (comp.config.title != 'Modal')) {
      outputHtml = outputHtml + '<div class="component-section m-bottom--large" style="overflow:hidden; padding: 1rem;">\n<h3 class="text-heading--label p-bottom--medium float-right">' + prefix + ' ' + comp.config.title + '</h3>\n<hr />\n';

      outputHtml = outputHtml + comp.example.html + '\n</div>\n';
    }

    var flavor_count = 1;
    comp.flavors.forEach( function(flavor) {
      var prefix = "COMP"  + comp_count + '.' + flavor_count;
      console.log( prefix + ' ' + comp.config.title + " > " + flavor.config.title);
      if (flavor.example && flavor.example.html && (comp.config.title != 'Modal')) {
        outputHtml = outputHtml + '<div class="component-section  m-bottom--large" style="overflow:hidden; padding: 1rem;">\n<h3 class="text-heading--label p-bottom--medium float-right">' + prefix + ' ' + comp.config.title + " > " + flavor.config.title + '</h3>\n<hr />\n';

        outputHtml = outputHtml + flavor.example.html + '\n</div>\n';
      }

      flavor_count = flavor_count + 1;
    });
    comp_count = comp_count + 1;

  } else {
    // end: notifications skip
    console.log("Skipping " + comp.config.title);
  }

});
outputHtml = outputHtml + '</section>';




// render core
outputHtml = outputHtml + '\n<section class="core-section m-bottom--x-large">\n<h2 class="text-heading--large p-bottom--medium">CORE</h2>\n';

var comp_count = 1;
coreData.forEach( function(core) {
  var prefix = 'CORE' + comp_count;
  console.log(prefix + ' ' + core.config.title);
  if (core.example && core.example.html) {
    outputHtml = outputHtml + '<div class="component-section m-bottom--large" style="overflow:hidden; padding: 1rem;">\n<h3 class="text-heading--label p-bottom--medium float-right">' + prefix + ' ' + core.config.title + '</h3>\n<hr />\n';

    outputHtml = outputHtml + core.example.html + '\n</div>\n';
  }

  var flavor_count = 1;
  core.flavors.forEach( function(flavor) {
    var prefix = "CORE"  + comp_count + '.' + flavor_count;
    console.log( prefix+ ' ' + core.config.title + " > " + flavor.config.title);
    if (flavor.example && flavor.example.html) {
      outputHtml = outputHtml + '<div class="component-section m-bottom--large" style="overflow:hidden; padding: 1rem;">\n<h3 class="text-heading--label p-bottom--medium float-right">' + prefix + ' ' + core.config.title + " > " + flavor.config.title + '</h3>\n<hr />\n';
      outputHtml = outputHtml + flavor.example.html + '\n</div>\n';
    }
    flavor_count = flavor_count + 1;
  });
  comp_count = comp_count + 1;
});
outputHtml = outputHtml + '</section>';

// render utilities
outputHtml = outputHtml + '\n<section class="utilities-section m-bottom--x-large">\n<h2 class="text-heading--large p-bottom--medium">UTILITIES</h2>\n';

var comp_count = 1;
utilitiesData.forEach( function(util) {
  var prefix = 'UTIL' + comp_count;
  console.log(prefix + ' ' + util.config.title);
  if (util.example && util.example.html && (util.config.title != 'Modal')) {
    outputHtml = outputHtml + '<div class="component-section m-bottom--large" style="overflow:hidden; padding: 1rem;">\n<h3 class="text-heading--label p-bottom--medium float-right">' + prefix + ' ' + util.config.title + '</h3>\n<hr />\n';
    outputHtml = outputHtml + util.example.html + '\n</div>\n';
  }

  var flavor_count = 1;
  util.flavors.forEach( function(flavor) {
    var prefix = "UTIL"  + comp_count + '.' + flavor_count;
    console.log( prefix + ' ' + util.config.title + " > " + flavor.config.title);
    if (flavor.example && flavor.example.html && (util.config.title != 'Modal')) {
      outputHtml = outputHtml + '<div class="component-section m-bottom--large" style="overflow:hidden; padding: 1rem;">\n<h3 class="text-heading--label p-bottom--medium float-right">' + prefix + ' ' + util.config.title + " > " + flavor.config.title + '</h3>\n<hr />\n';
      outputHtml = outputHtml + flavor.example.html + '\n</div>\n';
    }
    flavor_count = flavor_count + 1;
  });
  comp_count = comp_count + 1;
});

outputHtml = outputHtml + '</section>\n</div>\n</div>\n';

// add footer and save file
outputHtml = outputHtml + '<footer role="contentinfo" class="site-contentinfo">\n<div class="container grid grid--align-spread">\n<p>Copyright &copy; 2015 <span class="site-brand">Sales<i>f</i>orce</span>. <a href="http://www.salesforce.com/company/legal/intellectual.jsp">All rights reserved</a>.</p>\n<p>TEST PAGE</p>\n</div>\n</footer>';

outputHtml = outputHtml + '</body>\n</html>';
fs.writeFile(testpageFileName, outputHtml, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(testpageFileName + " was saved");
});
