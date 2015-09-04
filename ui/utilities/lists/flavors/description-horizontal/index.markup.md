Description lists `<dl>` are used when you have a term `<dt>` and information that describes it `<dd>`. A description list can contain more than one term for a description. It can also contain more than one description for a term. A `<dl>` can hold multiple `<dt>` + `<dd>` groupings.

By default, the `<dt>` and `<dd>` stack. No extra class is required. Adding `.{{cssPrefix}}dl--horizontal` gives the `<dt>` a width (1/3) so that the `<dd>` all start in the same horizontal alignment. You can override the width with a sizing helper.
