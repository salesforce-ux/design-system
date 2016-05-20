Page header record home contains up to four
compact layout fields. They're contained in the `.{{cssPrefix}}page-header__detail-row`
div. That div contains the top and bottom spacing needed for this version of
the page header.

When text is truncated, the full text should be placed in
a tooltip on hover (currently shown in the title
attribute). One line truncation is created by using the
`.{{cssPrefix}}truncate` class. Two line truncation must be achieved
using JavaScript.

The page header is located at the top of every record home. It includes the record title and compact layout for a record. Excluding the title, the page header displays 4 compact layout fields. Similar data types can be rolled up and be displayed as a single field.

### Record Title

* Display Record Type icon to the left of the title
* Record Type is displayed above the title
* When required, follow action is displayed to the right of the record title
* Display one line of text, truncate when the length conflicts with the page level actions

As shown in Field 3, web addresses and email addresses should be parsed and displayed as hyperlinks linking to the appropriate mailto: or web url. Do not modify the user's input, display as intended.

When text is truncated, display full field text in browser tooltip on hover.

Display addresses in two lines. Street address on first line, City, State and Postal Code on line 2. For lengthy addresses, truncate each line individually based on the available width of the area using the `.{{cssPrefix}}truncate` class. Display the full address via browser tooltip.
