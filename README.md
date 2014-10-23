# Select Filter By Text
This is a small jQuery plugin that you can use to turn a text input into a search / filter field for a select dropdown (or multi-select). I was finding that other plugins that purported to do this could not handle large datasets. Includes some small improvements such as using <code>.html()</code> once, as opposed to using <code>.append()</code> for each option, and including a timeout while typing before the filtering begins. 

Call it on a select element in jQuery with <code>.filterByText(<i>text input selector</i>)</code> and search away!

TO DO: Perhaps include a minimum input requirement as well. This would also help to speed up search results filtering.
