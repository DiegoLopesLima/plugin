{

	const

		name = 'plugin',

		reserved = `__${name}__`,

		$ = window.jQuery;

	let

		defaults = {};

	class Plugin {

		constructor(element, options) {

			this.element = element;

			this.options = $.extend({}, defaults, options);

			// Custom code

		}

		destroy() {

			// Custom code

		}

	}

	$.fn[name] = function(options = {}, ...other) {

		return $(this).each(function() {

			var element = $(this);

			if (typeof options === 'string' && Plugin.prototype.hasOwnProperty(options)) {

				let instance = element.data(reserved);

				return instance[options].apply(instance, other);

			}

			element.data(reserved, new Plugin(element, options, other)) ;

		});

	};

	$[name] = {
		version: '1.0.0-alpha',
		setDefaultOptions: options => $.extend(defaults, options),
		extend: (name, handler) => typeof name === 'string' && typeof handler !== 'undefined' ? Plugin.prototype[name] = handler : $.extend(Plugin.prototype, name)
	};

}
