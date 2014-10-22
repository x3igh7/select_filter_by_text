jQuery.fn.filterByText = function(textbox, selectSingleMatch) {

	return this.each(function() {

		var select = this;

		var options = [];

		$(select).find('option').each(function() {

			options.push({value: $(this).val(), text: $(this).text()});

		});

		$(select).data('options', options);
		var currentTimeout = null;
		$(textbox).bind('change keyup', function() {
			var self = $(this);

			clearTimeout(currentTimeout);

			currentTimeout = setTimeout(function() {
				var options = $(select).empty().scrollTop(0).data('options');

				var search = $.trim(self.val());

				var regex = new RegExp(search,'gi');

				var new_options_html = '';

				$.each(options, function(i, option) {

					if(option.text.match(regex) !== null) {

						if(option.name){

							new_options_html += '<option value=' + option.value + ' name=' + option.name + '>' + option.text + '</option>';

						} else {

							new_options_html += '<option value=' + option.value + '>' + option.text + '</option>';

						}
					}

				});

				$(select).append(new_options_html);

				if (selectSingleMatch === true &&

					$(select).children().length === 1) {

					$(select).children().get(0).selected = true;

			}
		}, 150);

	});

	});

};
