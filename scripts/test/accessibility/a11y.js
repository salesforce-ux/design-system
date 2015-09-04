/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

window.$A11y = {
    /**
     * Runs a subset of, or all, accessibility tests and stores failing DOM elements in an array
     * @param {HTMLElement} domElem Element to start from. If null, will test whole document
     * @param {String[]} checksToRun Array of function names to run. Defaults to run all
     * @param {Boolean} dontShowErrors Whether or not to show error state for error elements
     */
    checkA11y       : function(domElem, checksToRun, dontShowErrors) {
        var errorArray = [];
        var index;
        var funcObject;
        // if user doesn't want to start at a specific element, test whole document
        if($A11y.util._isUndefinedOrNull(domElem)) {
            domElem = document;
        }

        // if user doesn't specify a subset of tests, set it to all of them
        if($A11y.util._isEmpty(checksToRun)) {
            checksToRun = ["A11Y_DOM_01", "A11Y_DOM_02", "A11Y_DOM_03", "A11Y_DOM_04", "A11Y_DOM_06", "A11Y_DOM_07", "A11Y_DOM_08", "A11Y_DOM_09", "A11Y_DOM_10", "A11Y_DOM_15"];
        }
        var tmpFuncArray = $A11y.testFunctions;
        var testFuncs = [];
      
        for(var funcLabel in tmpFuncArray) {
            funcObject = tmpFuncArray[funcLabel];
            var index = checksToRun.indexOf(funcObject["tag"]);
            if(index > -1) {
               testFuncs[index] = funcObject;
            }
        }

        // run core tests
        for(var i = 0;  i < testFuncs.length; i++) {
            funcObject = testFuncs[i];
            errorArray = errorArray.concat(funcObject["func"](domElem));

        }

        if(!dontShowErrors) {
            $A11y.showErrors(errorArray);
        }

        return errorArray;
    },
    errorMessages    : {
        "A11Y_DOM_01": "All image tags require the presence of the alt attribute.",
        "A11Y_DOM_02": "Labels are required for all input controls.",
        "A11Y_DOM_03": "Buttons must have non-empty text labels.",
        "A11Y_DOM_04": "Links must have non-empty text content.",
        "A11Y_DOM_06": "All frames and iframes need non-empty titles.",
        "A11Y_DOM_07": "The head section must have a non-empty title element.",
        "A11Y_DOM_08": "Data table cells must be associated with data table headers.",
        "A11Y_DOM_09": "Fieldset must have a legend element.",
        "A11Y_DOM_10": "Radio buttons should be grouped within fieldsets.",
        "A11Y_DOM_15": "Non-interactive DOM elements should not have onclick events."
    },
    /**
     * Places data-a11y-error attribute on each DOM element with an error
     * and puts a solid red border around the elements to highlight them
     * @param {Object[]} errorArray An array of objects, each with a String error and an HTMLElement element
     */
    showErrors      : function(errorArray) {
        var error    = null;
        var errorEls = null;
        var errorMsg = null;
        for(var i = 0; i < errorArray.length; i++) {
            error = errorArray[i];
            errorEls = error.errorEls;
            errorTag = error.errorTag;
            errorEls.forEach(function(element){
                element.setAttribute("data-a11y-error", errorTag);
                element.style.border = "3px solid #da0000";
            })
            
        }
    },
    /**
     * this is where all of the functions adding in x-browser compat, and common functionality go
     */
    util : {
        /**
         * TODO <CMT>: Make this work the way we want it to.
         * For now, I'm just returning an array of objects,
         * which each contain the error tag and the HTML element.

         * @param {HTMLElement[]} errorArray Array of error elements
         * @param {String} errorTag the error tag
         * @returns {Object[]} array of objects containing error message and error elements
         */
        formatOutput : function(errorArray, errorTag) {
            
            if(this._isEmpty(errorArray)) return [];

            return {
                "errorMsg" : $A11y.errorMessages[errorTag],
                "errorEls" : errorArray,
                "errorTag" : errorTag
            };
        },

        /**
         * Checks if the option is undefined or null
         * @param {Object} obj The object to check
         * @returns {Boolean} True if object is undefined or null, false otherwise
         */
        _isUndefinedOrNull : function(obj) {
            return obj === undefined || obj === null;
        },

        /**
         * 
         */
        _isEmpty : function(obj) {
            return this._isUndefinedOrNull(obj) || obj === '' || Array.isArray(obj) && obj.length === 0 ||  ((typeof obj != "string") && Object.getOwnPropertyNames(obj).length <= 0);
        },

        /**
         * Get the text content of a DOM node. Tries <code>innerText</code> followed by
         * <code>textContext</code>, followed by <code>nodeValue</code> to take browser differences into account.
         * @param {Node} node The node to get the text content from
         * @returns {String} The text content of the DOM node
         */
        _getText : function(node) {
            var t;
            //text nodes
            if(node.nodeType === 3){
                t = node.nodeValue;
            } else {
                // chrome, safari, IE have this
                t = node.innerText;
                t = this._trim(t);

                // FF & chrome with visibility set to false
                if (node.textContent !== undefined) {
                    if(this._isEmpty(t)){
                        t = node.textContent;
                    }
                }

                // if its <style> innerText doesnt work so try cssText (for IE)
                if (node.tagName === "STYLE" && this._isEmpty(t) && !this._isUndefinedOrNull(node.styleSheet)) {
                    t = node.styleSheet.cssText;
                }
            }
            return t;
        },

        /** 
         * Trims whitespace from a string
         * @param {String} value The string to trim
         * @returns {String} The string trimmed of white space
         */
        _trim : function(value) {
            return (value || "").replace(/^\s+|\s+$/g, '');
        },

        /**
         * Get the text content of a DOM node, trims it of whitespace, and check if its empty
         * @param {Node} node The node to get the text content from
         * @returns {Boolean} whether or not DOM node has any text (whitespace doesn't count)
         */
        _hasEmptyText : function(element) {
            return this._trim(this._getText(element)) == "";
        },

        /**
         * Return value of an attribute of an element
         * @param {HTMLElement} element The element from which to retrieve data
         * @param {String} attributeName The name of the attribute to look up on element
         * @returns {String} value of the given attribute
         */
        _getAttribute : function(element, attributeName) {
            var attrValue = element.getAttribute(attributeName);
            // for browser compatibility - getAttribute doesn't always work in IE
            if(this._isUndefinedOrNull(attrValue)){
                // gets list of attributes as they are written on the element.
                // the return value of this is going to be undefined
                attrValue = element.attributes[attributeName];

                // If the element does exist, then get its nodeValue.
                // If it doesn't exist, we will return null per Mozilla Standards,
                // and how the getAttribute method works normally
                if(!this._isUndefinedOrNull(attrValue)){
                    attrValue = attrValue.nodeValue;
                } else if(!this._isUndefinedOrNull(element[attributeName])) {
                    attrValue = element[attributeName];
                } else {
                    attrValue = null;
                }
            }
            return attrValue;

        },

        /**
         * Goes up the tree (until it reaches the body tag) and attempts to find element with specific tag
         * @param {HTMLElement} element The starting element that we are going to use to go up the tree
         * @param {String} ancestorTag Name of the tag that we should find as we traverse up the tree
         * @returns {HTMLElement} Closest ancestor matching that tag
         */   
        _getAncestorMatchingTag : function(element, ancestorTag) {
            if(!element || !ancestorTag) {
                return null;
            }

            ancestorTag = ancestorTag.toUpperCase();
            while(element && element.tagName && element.tagName !== "BODY")  {
                if(element.tagName.toUpperCase() === ancestorTag) {
                    return element;
                }
                element = element.parentNode;
            }
            return null;
        },

        /**
         * Function that goes through all labels and turns the for attribute into a key
         * @param {HTMLElement[]} labels All the labels that we want to go through
         * @returns {String[][]} Mapping of for attribute value to booleans
         */
        _getFormFieldsWithExplicitLabels : function(labels) {
            var fieldId = null;
            var dict = {};
            if(this._isUndefinedOrNull(labels)) {
               return dict; 
            }
        
            for(var i = 0; i < labels.length; i++) {
                var label = labels[i];
                fieldId = this._getAttribute(label, "for");
                // check that label explicitly references a field and that label isn't empty
                if(!this._isEmpty(fieldId) && !(this._hasEmptyText(label))) {
                   dict[fieldId] = true;
                }
            }
            return dict;
        },

        /**
         * Get all elements of a certain type within a DOM element.
         * If the DOM element is of that type, just return that element.
         * @param {String} tagName
         * @param {HTMLElement} domElem
         * @return
         */
        _getElementsByTagName : function(tagName, domElem) {
            tagName = tagName.toLowerCase();
            return (domElem.tagName && domElem.tagName.toLowerCase() == tagName) ? [domElem] : domElem.getElementsByTagName(tagName);
        },

        /**
         * Checks if given DOM element contains an image with non-empty alt
         * @param {HTMLElement} element The element to check
         * @return true if element contains an image with non-empty alt, false otherwise
         */
        _elementContainsImageWithNonEmptyAlt : function(element) {
            var alt    = null;
            var images = element.getElementsByTagName("img");

            if(images.length > 0) {
                for (var i = 0; i < images.length; i++) {
                    alt = this._getAttribute(images[i], "alt");
                    if(!this._isEmpty(this._trim(alt))) return true;
                }
            }
            return false;
        }
    },
    /**
     * This is where all of our tests go
     **/
    testFunctions   : {
         /**
          * Check making sure that table cells have scope in them, and that they are equal to row, col, rowgroup, colgroup
          * @returns String - Returns a string representation of the errors
          */
         checkTableCellsHaveScope : {
            "tag"  : "A11Y_DOM_08", 
            "func" : function(domElem){
                 var hlprFunc = $A11y.util;
                 var headerDict = {};
                 var ths = [];
                 var scopeVal = "";
                 var idVals = "";
                 var errorArray = [];
                 var tmpErrorArray = [];
                 var i = 0, j = 0;
                 var skipTDCheck = false;
                 var allThsHaveScope = [];
                 var validScopes = {'row': false, 'col': false, 'rowgroup': false, 'colgroup' : false};
                 var tables = hlprFunc._getElementsByTagName("table", domElem);

                 for(var index = 0; index<tables.length; index++){
                    ths = tables[index].getElementsByTagName("th");

                    //Store all the previously found errors
                    errorArray = errorArray.concat(tmpErrorArray);
                    
                    //Reset Variables
                    tmpErrorArray = []
                    headerDict = {};
                    allThsHaveScope = [];
                    skipTDCheck = false;
                         
                    //If we have no headers, tds wont be a problem
                    if(ths.length === 0){
                        continue;
                    }
                         
                    //Phase 1:  If all <th> within a <table> contain scope attribute and scope attribute value is one of col, row, colgroup, rowgroup, then pass test. 
                    for(i = 0; i<ths.length; i++){                      
                       //Grab scope
                       scopeVal = hlprFunc._getAttribute(ths[i], "scope");
                       idVals   = hlprFunc._getAttribute(ths[i], "id");
                       
                       //If Scope exists
                       if(!hlprFunc._isEmpty(scopeVal)){
                          if(!(scopeVal in validScopes) || hlprFunc._trim(scopeVal) === ""){
                              tmpErrorArray.push(ths[i]);
                          }
                                 
                          skipTDCheck = true;   
                        }
                        else if(!hlprFunc._isEmpty(idVals)){
                            headerDict[idVals] = true;
                        }
                        else{
                            tmpErrorArray.push(ths[i]);
                        }
                    }
                         
                    //If we have already found an error with the THS (either they don't have an ID or they don't have a scope) skip the rest
                    if(!hlprFunc._isEmpty(tmpErrorArray) || skipTDCheck){
                        continue;
                    }
                               
                    //Phase 2: If all <th> within a <table> contain "id" and all <td> contain "headers" attribute, and each id listed in header attribute matches id attribute of a <th>, then pass test.
                    tds = tables[index].getElementsByTagName("td");
                         
                    if(tds.length === 0){
                        continue;
                    }
                    
                    for(i = 0; i<tds.length; i++){
                        idVals = hlprFunc._getAttribute(tds[i], "headers");
                        if(hlprFunc._isEmpty(idVals)){
                            tmpErrorArray.push(tds[i]);
                            continue;
                        }
                             
                        idVals = hlprFunc._trim(idVals).split(/\s+/);
                        for(j = 0; j<idVals.length; j++){
                            if(!(idVals[j] in headerDict)){
                                tmpErrorArray.push(tds[i]);
                                break;
                            }
                        }
                    }
                }

                //If there are any lingering errors, grab them
                if(tmpErrorArray.length > 0 ){
                   errorArray =  errorArray.concat(tmpErrorArray);
                }
                return $A11y.util.formatOutput(errorArray, this.tag);             
             }
        },
        /**
         * Check that images have alt attributes
         * @returns {Object[]} array of errors
         */
        checkImagesHaveAlts : {
            "tag"  : "A11Y_DOM_01",
            "func" : function(domElem) {
                var errorArray = [];
                var images     = $A11y.util._getElementsByTagName("img", domElem);

                for(var i = 0; i < images.length; i++) {
                    var image = images[i];
                    var alt   = image.getAttribute("alt");
                    // alt attribute isn't null
                    if(!$A11y.util._isUndefinedOrNull(alt)) {
                        alt = alt.toLowerCase().replace(/[\s\t\r\n]/g,'');
                        // alt attribute isn't silly
                        if(alt !== "undefined" && alt !== "null" && alt !== "empty" && alt !== "image") {
                            continue;
                        }
                    }
                    errorArray.push(image);
                }
                return $A11y.util.formatOutput(errorArray, this.tag);
            }
        },


        /**
         * Check that each input field has an associated label
         * @returns {Object[]} array of errors
         */
        checkInputsHaveLabel : {
            "tag"  : "A11Y_DOM_02",
            "func" : function(domElem) {
                var errorArray = [];
                var formFields = domElem.querySelectorAll("input, select, textarea");
                var labels     = domElem.querySelectorAll("label");
                var formField = null;
                var type = null;
                var ancestor = null;
                var specialTypes = "hidden button submit reset";
                var explicitLabelDict = $A11y.util._getFormFieldsWithExplicitLabels(labels);

                for (var i = 0; i < formFields.length; i++) {
                    formField = formFields[i];
                    type = $A11y.util._getAttribute(formField, "type");

                    // special input times can be ignored in this test
                    if(!$A11y.util._isEmpty(type) && specialTypes.indexOf(type) > -1) {
                        continue;
                    // image inputs require alt attributes
                    } else if (type == "image") {
                        // image inputs require alt attributes
                        var alt = $A11y.util._getAttribute(formField, "alt");
                        if($A11y.util._isEmpty(alt) || alt.replace(/[\s\t\r\n]/g,'') === "")
                            errorArray.push(formField);
                    // check for non-empty explicit label
                    } else if(!(formField.id in explicitLabelDict)) {
                        // check for non-empty inmplicit label
                        ancestor = $A11y.util._getAncestorMatchingTag(formField, "label");
                        if($A11y.util._isUndefinedOrNull(ancestor) || $A11y.util._hasEmptyText(ancestor)) {
                            errorArray.push(formField);
                        }
                    }
                }

                return $A11y.util.formatOutput(errorArray, this.tag);
            }
        },

        /**
         * Check that buttons have non-empty text content
         * @returns {Object[]} array of errors
         */
        checkButtonsHaveText : {
            "tag"  : "A11Y_DOM_03", 
            "func" : function(domElem) {
                var errorArray   = [];
                var buttons      = $A11y.util._getElementsByTagName("button", domElem);

                var button      = null;
                var images      = null;
                var imageAlt    = null;
                var ariaLabel   = null;
                var foundText   = false;
                var text = null;
                for(var i = 0; i < buttons.length; i++) {
                    button = buttons[i];
                    if(!$A11y.util._isUndefinedOrNull(button)) { 
                        // if button text is empty
                        if($A11y.util._hasEmptyText(button)) {
                            // check if button has non-empty aria-label
                            ariaLabel = $A11y.util._getAttribute(button, "aria-label");
                            if(!$A11y.util._isEmpty($A11y.util._trim(ariaLabel))) continue;

                            // check if button has an image with non-empty alt text
                            if($A11y.util._elementContainsImageWithNonEmptyAlt(button)) continue;
                            
                            errorArray.push(button);
                        }
                    }
                }
                return $A11y.util.formatOutput(errorArray, this.tag);
            }
        },

        /**
         * Check that all anchors have text associated with them
         * @returns {Object[]} array of errors
         */
        checkAnchorsHaveText : {
            "tag"  : "A11Y_DOM_04", 
            "func" :  function(domElem){
                var errorArray = [];
                var anchors    = $A11y.util._getElementsByTagName("a", domElem);

                var anchor = null;
                for(var i = 0; i < anchors.length; i++) {
                    anchor = anchors[i];
                    // check that the anchor contains text or an image with alt text
                    if($A11y.util._hasEmptyText(anchor) && !$A11y.util._elementContainsImageWithNonEmptyAlt(anchor)) {
                        errorArray.push(anchor);
                    }
                }
                return $A11y.util.formatOutput(errorArray, this.tag);
            }
        },

        /**
         * Check that all iframes have a non empty title associated with them
         * @returns {Object[]} array of errors
         */
        checkIframesHaveTitles : {
            "tag" : "A11Y_DOM_06", 
            "func" : function(domElem) {
                var errorArray = [];
                var iframes    = $A11y.util._getElementsByTagName("iframe", domElem);
                var iframe     = null;
                var title      = null;

                for(var i = 0; i < iframes.length; i++) {
                    iframe = iframes[i];
                    title = $A11y.util._getAttribute(iframe, "title");
                    if($A11y.util._isUndefinedOrNull(title) || $A11y.util._trim(title) === "") {
                        errorArray.push(iframe);
                    }
                }
                return $A11y.util.formatOutput(errorArray, this.tag);
             }
        },

        /**
         * Check that the <head> section of the page has a non-empty <title>
         * @returns {Object[]} array of errors
         */
        checkPageHasTitle : {
            "tag"  : "A11Y_DOM_07", 
            "func" : function(domElem) {
                var head = domElem.getElementsByTagName("head")[0];

                if($A11y.util._isEmpty(head)) return [];

                var title = head.getElementsByTagName("title")[0];
                if($A11y.util._isUndefinedOrNull(title) || $A11y.util._hasEmptyText(title)) {
                    return $A11y.util.formatOutput([head], this.tag);
                }

                return [];
            }
        },


        /**
         * Check to make sure that all fieldset tags have a legend and that it is not empty
         * @returns {Object[]} array of errors
         */
         checkFieldSetsAreCorrect : {
            "tag" : "A11Y_DOM_09",
            "func" : function(domElem) {
                var errorArray = [];
                var legends = "";
                var fieldSets = $A11y.util._getElementsByTagName("fieldset", domElem);
                var fieldSetDisplay = "";

                for(var i = 0; i < fieldSets.length; i++) {
                    fieldSetDisplay = fieldSets[i].style.display;
                    legends = fieldSets[i].getElementsByTagName("legend");

                    if($A11y.util._isUndefinedOrNull(fieldSetDisplay) || fieldSetDisplay == "none") 
                         continue;

                    if(legends.length === 0) {
                        errorArray.push(fieldSets[i]);
                    }
                    else {
                        for(var j = 0; j < legends.length; j++) {
                            if($A11y.util._getText(legends[j]) == "") {
                                errorArray.push(fieldSets[i])
                            }
                        }
                    }
                }

                return $A11y.util.formatOutput(errorArray, this.tag);
            }
         },
       
       /**
         * Check to make sure that all radio buttons are grouped within a fieldset
         * @returns {Object[]} array of errors
         */
        checkRadioGrouping : {
            "tag" : "A11Y_DOM_10",
            "func" : function(domElem) {
                var errorArray = [];
                var inputElem = null;
                var inputType = "";
                var rcName = ""; //value of name attribute of radio buttons
                var dict = {};
                var tempArray = [];
                var inputElems = $A11y.util._getElementsByTagName("input", domElem);

                for(var i = 0; i < inputElems.length; i++) {
                    inputElem = inputElems[i];
                    inputType = $A11y.util._getAttribute(inputElem, "type").toLowerCase();
                    if(inputType == "radio") {
                        rcName = $A11y.util._getAttribute(inputElem, "name");
                        
                        if($A11y.util._isEmpty(rcName))
                            continue;
                        
                        if(!(rcName in dict)) {
                            dict[""+rcName] = [];
                        }

                        dict[rcName].push(inputElem);
                    }
                }

                for(rcName in dict) {
                    tempArray = dict[rcName];
                    if(tempArray.length >= 2) {
                        for(var i = 0; i < tempArray.length; i++) {
                            if(!$A11y.util._getAncestorMatchingTag(tempArray[i], "FIELDSET")) {
                                errorArray.push(tempArray[i])
                            }
                        }
                    }
                }
            return $A11y.util.formatOutput(errorArray, this.tag); 
            
            }
        },


        /**
         * Check to make sure that onClick is set only on acceptable elements
         * @returns {Object[]} array of errors
         */
         checkOnClick : {
            "tag" : "A11Y_DOM_15",
            "func" : function(domElem) {
                var errorArray = [];
                var allElements = $A11y.util._getElementsByTagName("*", domElem);
                if(!$A11y.util._isUndefinedOrNull(allElements)) {
                    for(var i = 0; i < allElements.length; i++) {
                        if(allElements[i].hasAttribute("onclick")) {
                            if(allElements[i].tagName != "A" &&
                               allElements[i].tagName != "BUTTON" &&
                               allElements[i].tagName != "INPUT" &&
                               allElements[i].tagName != "CANVAS") {
                                errorArray.push(allElements[i]);
                            }
                        }
                    }
                }

                return $A11y.util.formatOutput(errorArray, this.tag); 
            }
        }

    }
}