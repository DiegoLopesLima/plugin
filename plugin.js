/*! Plugin name[ | URL] */
;(function($, window, undefined) {

	'use strict';

	var

		document = window.document,

		// Plugin name
		name = 'plugin',

		// Default properties
		defaults = {
			property : 'value'
		},

		plugin = {
			init : function() {

				var

					element = $(this),

					options = element.data(name);

				// Plugin initialization logic
			},

			// Usage:
			// $(selector).plugin('destroy');
			destroy : function() {

				return $(this).off('.' + name).removeData(name);
			}
		};

	$.fn[name] = function(options) {

		var

			args = arguments;

		return $(this).each(function() {

			if(typeof plugin[options] == 'function') return plugin[options].apply(this, [].slice.call(args, 1));

			plugin.init.call(plugin.destroy.call(this).data(name, $.extend({}, defaults, options)));
		});
	};

	// 
	$[name] = $.extend(function(element) {

		return $.fn[name].apply(element, [].slice.call(arguments, 1));
	}, {
		// Plugin version
		version : '0.0.0'
	});
})(jQuery, window);