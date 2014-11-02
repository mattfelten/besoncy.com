jQuery( function($) {
	$('a.nc').live('click', function() {
		return false;
	});

	$('ul.team li.bio').hide().first().show();
	$('<a href="#" class="btn nc"><span>Read Bio</span></a>').appendTo( $('ul.team') ).wrap('<li class="button" />').click( function() {

			$('ul.team li.bio:visible').slideUp().siblings('li.button').slideDown();
			$(this).parent().slideUp().siblings('li.bio').slideDown();

	});

	$('#contact-form input[name=name]').bind('keypress change blur', function() {
		if( $.trim( $(this).val() ).length < 3 ) {
			$(this).addClass('invalid');
		}else {
			$(this).removeClass('invalid');
		}
	});

	$('#contact-form input[name=email]').bind('keypress change blur', function() {
		if( $.trim( $(this).val() ).length < 5 || $(this).val().indexOf("@") < 0 || $(this).val().indexOf(".") < 0 ) {
			$(this).addClass('invalid');
		}else {
			$(this).removeClass('invalid');
		}
	});

	$('#contact-form textarea').bind('keypress change blur', function() {
		if($.trim( $(this).val() ).length < 5 ) {
			$(this).addClass('invalid');
		}else {
			$(this).removeClass('invalid');
		}
	});

    $('#contact-form').bind('new-submit', function(){
    	var form = $('#contact-form');
        var button = form.find('input.submit');
        var name = form.find('input[name=name]');
        var email = form.find('input[name=email]');
        var textarea = form.find('textarea');

        // We use the working class not only for styling the submit button,
        // but also as kind of a "lock" to prevent multiple submissions.

        if( button.hasClass('working') ) {
        	return false;
        }

        if( $.trim( textarea.val() ).length < 5 ){
        	textarea.addClass('invalid');
        }else {
        	textarea.removeClass('invalid');
        }

        if( $.trim( name.val() ).length < 3 ) {
        	name.addClass('invalid');
        }else {
        	name.removeClass('invalid');
        }

        if( $.trim( email.val() ).length < 5 || email.val().indexOf("@") < 0 || email.val().indexOf(".") < 0 ) {
        	email.addClass('invalid');
        }else {
        	email.removeClass('invalid');
        }

        if( $(name, email, textarea).hasClass('invalid') ) {
        	return false;
        }

        // Locking the form and changing the button style:
        button.addClass('working').after( $('<img src="/assets//images/load.gif" class="load" />') );

        $.ajax({
            url : form.attr('action'),
            type : 'post',
            data : {
            	message : $.trim( textarea.val() ),
            	name : $.trim( name.val() ),
            	email:$.trim( email.val() )
            },
            complete : function(xhr){
                var text = xhr.responseText;

                // This will help users troubleshoot their form:
                if(xhr.status == 404){
                    text = 'Your path to submit.php is incorrect.';
                }

                // Hiding the button and the textarea, after which
                // we are showing the received response from submit.php

				var span = $('<div>').addClass('response').html( text ).hide().insertBefore( form ).slideDown();
                form.slideUp().find('input.text,textarea').val('');
            }
        });

        return false;
    });

    $('nav ul ul').each( function() {
    	$(this).css('marginLeft', -$(this).outerWidth()/2 - 15);
    });

    $('div.gallery-thumbs').thumbSlider().find('li').click( function() {
    	if( !$(this).hasClass('active') ) {
    		$(this).addClass('active').siblings('.active').removeClass('active');
    		$('div.gallery-main li').eq( $(this).index() ).addClass('active').siblings('.active').removeClass('active');
    	}
    });

    $('div.gallery-wall li span').each( function() {
    	$(this).css({
    		marginTop: -($(this).height()/2),
    		marginLeft: -($(this).width()/2)
    	});
    });

    $('div.gallery-wall li > img').load( function() {
    	$(this).hide().fadeIn();
    });

    if ($.browser.msie && $.browser.version.substr(0,1) <= 7) {
	    $("div.gallery-wall li").hover( function() {
			$(this).css('z-index', 10000).siblings().css('z-index', 1);
		});
	}

    if( $('html').hasClass('no-csstransitions') ) {
    	$('div.gallery-wall li').hover( function() {
    		$('span', this).fadeIn('fast');
    	}, function() {
    		$('span', this).fadeOut('fast');
    	}).children('span').hide();
    }
});

$(window).load( function() {
	$('nav ul ul').each( function() {
		$(this).css('marginLeft', -$(this).outerWidth()/2);
	});
});

jQuery.fn.thumbSlider = function(options) {
	return this.each( function() {
		$slider = $(this);
		$content = $('.content', this);
		$wrap = $content.parent();
		margin = 15;
		options = options || {};

		$content.css('position', 'absolute');
		$wrap.css('position','relative');

		$('a.next', this).click( function() {
			if( $content.position().top - $wrap.height() >= -( $content.height() - $wrap.height() ) ) {
				$content.animate({
					top: '-='+ ($wrap.height() + margin)
				});
			}else {
				$content.animate({
					top: -( $content.height() - $wrap.height() ) - 3
				});

			}
		});

		$('a.prev', this).click( function() {
			if( $content.position().top + $wrap.height() <= -margin ) {
				$content.animate({
					top: '+='+($wrap.height() + margin )
				});
			}else {
				$content.animate({
					top: -margin
				});
			}
		});
	});
}
