#!/usr/bin/env node node_modules/.bin/babel-node
import ReactDOMServer from 'react-dom/server';
import * as custom from '../ui/components/illustration/custom';
import * as error from '../ui/components/illustration/error';
import * as informational from '../ui/components/illustration/informational';
import * as misc from '../ui/components/illustration/misc';
import * as nodata from '../ui/components/illustration/nodata';
import snakeCase from 'lodash/snakeCase';
const fs = require('fs');

const basedir = __dirname + '/..';
const outputDir = basedir + '/assets/images/illustrations';

const stylecode = `
<!-- Default styles. Override them in slds-illustrations.css if you like -->
<style>.slds-illustration{
    text-align:center
}
.slds-illustration.slds-illustration_small .slds-illustration__svg{
    width:100%;
    max-width:300px;
    max-height:200px;
    margin-bottom:1rem
}
.slds-illustration.slds-illustration_large .slds-illustration__svg{
    width:100%;
    max-width:600px;
    max-height:400px;
    margin-bottom:3rem
}
.slds-illustration.slds-illustration_large .slds-illustration__header{
    margin-bottom:1.5rem
}
.slds-illustration.slds-illustration_large p{
    margin-bottom:3rem
}
.slds-illustration .slds-illustration__stroke-primary{
    stroke:#8cd3f8
}
.slds-illustration .slds-illustration__stroke-secondary{
    stroke:#c2e8ff
}
.slds-illustration .slds-illustration__fill-primary{
    fill:#8cd3f8
}
.slds-illustration .slds-illustration__fill-secondary{
    fill:#c2e8ff
}
</style>
<link xmlns="http://www.w3.org/1999/xhtml" rel="stylesheet" href="slds-illustrations.css" type="text/css"/>`;

let modules = [custom, error, informational, misc, nodata];

const nameMappings = {};

modules.forEach(module_ => {
  for (var name in module_) {
    let realName = nameMappings[name] || snakeCase(name);
    let filename = outputDir + '/' + realName + '.svg';
    let output = ReactDOMServer.renderToStaticMarkup(module_[name]());
    output = output.replace('slds-illustration__svg', 'slds-illustration');
    let match = '1999/xlink">';
    output = output.replace(match, match + stylecode);
    fs.writeFile(filename, output, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log(filename);
    });
  }
});
