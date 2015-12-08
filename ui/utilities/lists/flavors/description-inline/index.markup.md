Description lists `<dl>` are used when you have a term `<dt>` and information that describes it `<dd>`. A description list can contain more than one term for a description. It can also contain more than one description for a term. A `<dl>` should hold multiple `<dt>` + `<dd>` groupings.

By default, the `<dt>` and `<dd>` stack. No extra class is required. Adding `.{{cssPrefix}}dl--inline` formats the `<dl>` so that the `<dd>` immediately follows the `<dt>`. Be aware that for inline styling, you will not be able to differentiate between multiple `<dt>` or `<dd>`.
