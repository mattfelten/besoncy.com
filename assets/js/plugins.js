jQuery( function($) {
	if( $('#slideshow li').length > 1 ) {
		$.getScript('/assets/js/vendor/jquery.cycle.lite.js', function(){

			$.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
				$slides.not(':eq(0)').css('left',-9999);
				$cont.css('overflow','hidden');
				opts.before.push(function(curr, next, opts, fwd) {
					if (opts.rev) {
						fwd = !fwd;
					}
					opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
					opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
				});
				opts.cssBefore.top = 0;
				opts.animIn.left = 0;
				opts.animOut.top = 0;
			};

			$prev = $('<a href="#" class="nc ir prev">Previous</a>').appendTo( $('#slideshow') );
			$next = $('<a href="#" class="nc ir next">Next</a>').appendTo( $('#slideshow') );
			$('#slideshow ul').cycle({
				fx: 'scrollHorz',
				prev: $prev,
				next: $next,
				timeout: 0,
				speed: 300
			});

		});
	}

	if( $('a.fancybox').children().length > 1 ) {
		$.getScript('/assets/js/vendor/jquery.easing.pack.js');
		$.getScript('/assets/js/vendor/jquery.fancybox.pack.js', function() {
			$('head').append('<link rel="stylesheet" type="text/css" href="/assets/css/jquery.fancybox.css" />');

			$('a.fancybox').fancybox({
				padding:0,
				transitionIn:'elastic',
				transitionOut:'elastic'
			});
		});
	}

	if( !$.support.placeholder && $('input[placeholder]').length > 0 ) {;
		$.getScript('/assets/js/vendor/jquery.placeholder.js', function(){
			$('input[placeholder],textarea[placeholder]').placeholder();
		});
	}else {
		$('#contact-form').submit( function() {
			$(this).trigger('new-submit');
			return false;
		});
	}
});

jQuery.support.placeholder = (function(){
    var i = document.createElement('input');
    return 'placeholder' in i;
})();

$.fn.equalHeights = function(minHeight, maxHeight) {
	tallest = (minHeight) ? minHeight : 0;
	this.each(function() {
		if($(this).height() > tallest) {
			tallest = $(this).height();
		}
	});
	if((maxHeight) && tallest > maxHeight) tallest = maxHeight;
	return this.each(function() {
		$(this).height(tallest);
	});
}

window.log = function(){
  log.history = log.history || [];
  log.history.push(arguments);
  arguments.callee = arguments.callee.caller;
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
};
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});
