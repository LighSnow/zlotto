$(document).ready(function(){
	
	$('.input-phone').mask('+7 (999) 999-99-99', {autoclear: true}).on('click', function(){
		$(this)[0].selectionStart = 2;
		$(this).focus();
	});
	$('.input-card').mask('9999 9999 9999 9999', {autoclear: true}).on('click', function(){
		$(this)[0].selectionStart = 0;
		$(this).focus();
	});
	$('.input-expd').mask('99/9999', {autoclear: true}).on('click', function(){
		$(this)[0].selectionStart = 0;
		$(this).focus();
	});
	$('.input-date').mask('99.99', {autoclear: true}).on('click', function(){
		$(this)[0].selectionStart = 0;
		$(this).focus();
	});
	$('.input-time').mask('99:99PM - 99:99PM', {autoclear: true}).on('click', function(){
		$(this)[0].selectionStart = 0;
		$(this).focus();
	});
	$('.input-cvv').mask('999');
	$('.input-bday').mask('99.99.9999');

	$('.select').selectmenu();

	$('.tooltip').tooltip({
		position: {
			my: 'left bottom',
			at: 'right top'
		}
	});
	
	$('.header__lang').toShowHide({
		button: '.header__lang-level',
		box: '.header__lang-value',
		effect: 'fade',
		anim_speed: 300,
		close_only_button: true,
		onBefore: function(el){
			el.addClass('header__lang_show');
		},
		onAfter: function(el){
			el.removeClass('header__lang_show');
		}
	});

	$('.main-1__list').slick({
		speed: 1100,
		prevArrow: '.main-1 .sl-arr_l',
		nextArrow: '.main-1 .sl-arr_r'
	});
	
	if ($('.main-3__list').length)
	{
		var total = Math.ceil($('.main-3__list .main-3__lot-item').length/4);
		
		$('.main-3__num-total').text(total);

		//var time = 5;
		//var $bar, $slick, isPause, tick, percentTime;

		var $bar = $('.main-3__pbar-inn');

		$slick = $('.main-3__list');
		$slick.slick({
			speed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			rows: 4,
			prevArrow: '.main-3 .sl-arr_l',
			nextArrow: '.main-3 .sl-arr_r',
			responsive: [
			    {
					breakpoint: 1300,
					settings: {
						slidesToShow: 2
					}
			    },
			    {
					breakpoint: 700,
					settings: {
						slidesToShow: 1
					}
			    }
			]
		});
		$slick.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.main-3__num-cur').text(nextSlide+1);
			var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
			$bar.css('width', calc+'%');
		});

		/*$bar = $('.main-3__pbar-inn');

		$('.main-3__lot-item, .main-3__bot').on({
			mouseenter: function() {
				isPause = true;
			},
			mouseleave: function() {
				isPause = false;
			}
		});

		function startProgressbar()
		{
			resetProgressbar();
			percentTime = 0;
			isPause = false;
			tick = setInterval(interval, 10);
		}

		function interval()
		{
			if(isPause === false)
			{
				percentTime += 1 / (time+0.1);
				$bar.css({
					width: percentTime+"%"
				});
				if(percentTime >= 100)
				{
					$slick.slick('slickNext');
					startProgressbar();
				}
			}
		}

		function resetProgressbar()
		{
			$bar.css({
				width: 0+'%' 
			});
			clearTimeout(tick);
		}

		startProgressbar();*/
	}

	var fp = ($('.fp-wrapper').length) ? true : false;

	var fp_created = false;

	function create_fp()
	{
        fp_created = true;
		$('.fp-wrapper').fullpage({
			navigation: true,
			sectionSelector: '.section',
			scrollBar: false,
			lockAnchors: true,
			scrollOverflow: true,
			scrollOverflowReset: true,
			onLeave: function(origin, destination, direction)
			{
				//alert();
				//$('[data-anchor='+origin.anchor+']').removeClass('current');
				//setTimeout(function(){
					$('[data-anchor='+destination.anchor+']').addClass('current');
				//}, 300);
				//console.log(origin+' '+destination);
			}/*,
			afterLoad: function(origin, destination, direction)
			{
				if ($('.main-3__list').length)
				{
					if (destination.anchor == 'main3')
					{
						startProgressbar();
					}
					else
					{
						resetProgressbar();
					}
				}
			}*/
		});
	}

	var throttleTimeout, wWidth, wHeight;
	var history_api = invs_api = lot_api = null;
	$(window).bind('resize', function(){
		var $this = $(this);
			wWidth = $this.width(), wHeight = $this.height();
		if (!throttleTimeout) {
			throttleTimeout = setTimeout(
				function()
				{
					if (fp)
					{
						if ((wHeight < 1100 && wHeight > 700) && wWidth > 1025)
						{
							if (!fp_created)
							{
								//resetProgressbar();
								create_fp();
							}
						}
						else
						{
							if (fp_created)
							{
								fp_created = false;
								$.fn.fullpage.destroy('all');
								$('body, html').animate({scrollTop: 0}, 400);
							}
						}
					}
					if (wWidth > 1025)
					{
						if (!$('.header__wrapper > .header__log').length)
						{
							$('.header__log').appendTo('.header__wrapper');
						}
						if (!$('.header__wrapper > .header__cab').length)
						{
							$('.header__cab').appendTo('.header__wrapper');
						}
						if (!$('.header__wrapper > .header__lang').length)
						{
							$('.header__lang').insertAfter('.header__menu');
						}
						if ($('.cab-menu').length)
						{
							if (!$('.cab-menu').is('.stick'))
							{
								$('.cab-menu').stickySidebar({
									innerWrapperSelector: '.cab-menu__list'
								});
								//$('.cab-menu').stick_in_parent();
								$('.cab-menu').addClass('stick');
							}
							else
							{
								$('.cab-menu').stickySidebar('updateSticky');
							}
						}
					}
					else
					{
						if ($('.header__wrapper > .header__log').length)
						{
							$('.header__log').appendTo('.header__menu');
						}
						if ($('.header__wrapper > .header__cab').length)
						{
							$('.header__cab').appendTo('.header__menu');
						}
						if ($('.header__wrapper > .header__lang').length)
						{
							$('.header__lang').appendTo('.header__menu');
						}
						//if ($('.cab-menu').length && $('.cab-menu').is('.stick'))
						//{
							//$('.cab-menu').stickySidebar('destroy');
							//$('.cab-menu').trigger('sticky_kit:detach');
							//$('.cab-menu').removeClass('stick');
						//}
					}
					if (wWidth > 900)
					{
						/*if (lot_api)
						{
							lot_api.destroy();
							lot_api = null;
						}*/
						if (!$('.main-2__list').is('.slick-initialized'))
						{
							$('.main-2__list').slick({
								speed: 700,
								slidesToShow: 5,
								slidesToScroll: 3,
								variableWidth: true, 
								prevArrow: '.main-2 .sl-arr_l',
								nextArrow: '.main-2 .sl-arr_r',
								responsive: [
								    {
										breakpoint: 1400,
										settings: {
											slidesToShow: 4,
											slidesToScroll: 2
										}
								    },
								    {
										breakpoint: 700,
										settings: {
											slidesToShow: 3,
											slidesToScroll: 1
										}
								    }
								]
							});
						}
					}
					else
					{
						/*if (!lot_api)
						{
							setTimeout(function(){
								lot_api = $('.main-2__sl').jScrollPane({
									showArrows: false, mouseWheelSpeed: 30, autoReinitialise: true
								}).data('jsp');
							}, 50);
						}*/
						if ($('.main-2__list').is('.slick-initialized'))
						{
							$('.main-2__list').slick('unslick');
						}
					}
					if (wWidth > 700)
					{
						if (!$('.cab-hist .cab-hist-f').length)
						{
							$('.cab-hist-f').appendTo('.cab-hist__top');
						}
					}
					else
					{
						if ($('.cab-hist .cab-hist-f').length)
						{
							$('.cab-hist-f').insertBefore('.cab-hist');
						}
					}
					if (wWidth > 500)
					{
						/*if (history_api)
						{
							history_api.destroy();
							history_api = null;
						}*/
						/*if (invs_api)
						{
							invs_api.destroy();
							invs_api = null;
						}*/
					}
					else
					{
						/*if (!history_api)
						{
							history_api = $('.cab-hist__tbl').jScrollPane({
								showArrows: false, mouseWheelSpeed: 30, autoReinitialise: true
							}).data('jsp');
						}*/
						/*if (!invs_api)
						{
							invs_api = $('.invites__tbl').jScrollPane({
								showArrows: false, mouseWheelSpeed: 30, autoReinitialise: true
							}).data('jsp');
						}*/
					}
					throttleTimeout = null;
				},
				50
			);
		}
		$('.select').selectmenu('close');
	}).resize();

	/*$('.modalbox').fancybox({
		autoFocus: false, hideScrollbar: false, closeExisting: true, touch: false, 
		btnTpl: {
			smallBtn: 
			'<div data-fancybox-close class="modal-close"><span class="icon-x"></span></div>'
		}
	});*/

	//$.fancybox.open({
	//	src: '#modal-how', autoFocus: false, hideScrollbar: false, closeExisting: true, touch: false
	//});

    $('.modalbox').on('click', function(event){
		event.preventDefault();
		$(this).modal({
			showClose: false
		});
    });
	
	$('.header').toShowHide({
		button: '.header__menu-bt',
		box: '.header__menu',
		effect: 'fade',
		anim_speed: 300,
		close_only_button: true,
		onBefore: function(el){
			$('body').css({'height': '100%', 'overflow': 'hidden'});
			el.addClass('header_showmenu');
		},
		onAfter: function(el){
			$('body').css({'height': 'auto', 'overflow': 'auto'});
			el.removeClass('header_showmenu');
		}
	});
	
	$('.cab-nms').toShowHide({
		button: '.cab-nms__level',
		box: '.cab-nms__list',
		close_only_button: false,
		onBefore: function(el){
			el.addClass('cab-nms_show');
		},
		onAfter: function(el){
			el.removeClass('cab-nms_show');
		}
	});

	$('input[name=country]').on('change', function(){
		$('.pg-region').show();
		$('.cab-menu').stickySidebar('updateSticky');
	});

	$('.pg-country__sel select').on('selectmenuchange', function(event, ui){
		$('.pg-region').show();
		$('.cab-menu').stickySidebar('updateSticky');
		$('.pg-region-sel').addClass('hidden');
		$('.pg-region-sel[data-id='+$(this).find(':selected').data('id')+']').removeClass('hidden');
		$('.pg-country__input').prop('checked', false);
		$('.pg-country__input[data-id='+$(this).find(':selected').data('id')+']').prop('checked', true);
	});
	$('.pg-country__input').on('change', function(){
		$('.pg-region-sel').addClass('hidden');
		$('.pg-region-sel[data-id='+$('.pg-country__input:checked').data('id')+']').removeClass('hidden');
		$('.pg-country__sel select option').prop('selected', false);
		$('.pg-country__sel select option[data-id='+$('.pg-country__input:checked').data('id')+']').prop('selected', true);
		$('.pg-country__sel select').selectmenu('refresh');
	});
	
	var _thank = function()
	{
		//$.fancybox.open({
		//	src: '#modal-thank', autoFocus: false, closeExisting: true, touch: false
		//});
		$('#modal-thank').modal({
			showClose: false
		});
	};

	var reCalc = function()
	{

	};
	$('.paym__sl').each(function(){
		var $sl = $(this);
		var type = $sl.data('type');
		$sl.slider({
			animate: true, 
			range: 'min', 
			min: $sl.data('min'), 
			max: $sl.data('max'), 
			value: $sl.data('val'),
			step: 1,
			change: function(event, ui)
			{
				$sl.find('.paym__sl-item').each(function(){
					var $this = $(this);
					if ($this.data('val') <= ui.value)
					{
						$this.addClass('paym__sl-item_active');
					}
					else
					{
						$this.removeClass('paym__sl-item_active');
					}
				});
				if (type == 'members')
				{
					$('.paym__stat-i_members .paym__stat-v').html(ui.value);
				}
				if (type == 'months')
				{
					$('.paym__stat-i_months .paym__stat-v').html($sl.find('.paym__sl-item[data-val='+ui.value+']').text());
					$('.paym__price-new').html('$ '+$sl.find('.paym__sl-item[data-val='+ui.value+']').data('price'));
					$('.paym__sale-text > span b').html($sl.find('.paym__sl-item[data-val='+ui.value+']').data('discount'));
				}
				reCalc();
				$('.paym__price').click();
			}
		});
	});
	$('.paym__price').on('click', function(){
		if ($('.paym-inp-1month').prop('checked'))
		{
			$('.paym-inp-1month').click();
		}
	});
	$('.paym-inp-1month').on('change', function(){
		if ($(this).prop('checked'))
		{
			$('.paym__stat-i_months .paym__stat-v').html('1 month');
			$('.paym__price').addClass('paym__price_disabled');
		}
		else
		{
			$('.paym__stat-i_months .paym__stat-v').html($('.paym__sl_months .paym__sl-item[data-val='+$('.paym__sl_months').slider('value')+']').text());
			$('.paym__price').removeClass('paym__price_disabled');
		}
		reCalc();
	});
	$('.paym-inp-members').on('change', function(){
		if ($(this).prop('checked'))
		{
			$('.paym__stat-i_members').removeClass('hidden');
		}
		else
		{
			$('.paym__stat-i_members').addClass('hidden');
		}
		reCalc();
	});

	$('.pg-video').vide({
		mp4: $('.pg-video').data('video'),
		webm: $('.pg-video').data('video'),
		ogv: $('.pg-video').data('video'),
		poster: $('.pg-video').data('video')
	}, {
		position: '50% 50%',
		posterType: 'jpg'
	});

	if ($('.pg-time').length)
	{
		var seconds = /*30*60+1*/11, h, m, s, t;
		function countDown()
		{
			console.log(seconds);
			if (seconds > 1)
			{
				seconds--;
				h = seconds/3600 ^ 0,
				m = (seconds-h*3600)/60 ^ 0,
				s = seconds-h*3600-m*60,
				time = (m<10?'0'+m:m)+':'+(s<10?'0'+s:s);
				$('.pg-time').text(time);
				setTimeout(function(){countDown()},1000);
			}
			else
			{
				$('.pg-video, .pg-time').hide();
				$('.pg-numbers, .pg-begining').show();
			}
		}
		countDown();
	}

	$('.paym__app .input-card').keyup(function(){
		var $inp = $(this);
		if($inp.val().replace(/\D+/g,'').length == 16)
		{
			$('.input-expd').focus();
		}
	});
	$('.paym__app .input-expd').keyup(function(){
		var $inp = $(this);
		if($inp.val().replace(/\D+/g,'').length == 6)
		{
			$('.input-cvv').focus();
		}
	});

	$('.pg-lot__form .input-date').keyup(function(){
		var $inp = $(this);
		if($inp.val().replace(/\D+/g,'').length == 4)
		{
			$('.input-time').focus();
		}
	});
	$('.pg-lot__form .input-time').keyup(function(){
		var $inp = $(this);
		if($inp.val().replace(/\D+/g,'').length == 8)
		{
			$('.input-amount').focus();
		}
	});

	// validation

	var p_mail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

	$('.cab-start_login .cab-start__btn').on('click', function(){
		var err = false;
		var $form = $(this).parents('form');
		if($form.find('.input-name').val().length < 3)
		{
			if (!$form.find('.input-name').is('.input_error'))
			{
				$form.find('.input-name').keyup(function(){
					if($(this).val().length < 3)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-name').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-name').removeClass('input_error');
	    }
		if($form.find('.input-passw').val().length < 3)
		{
			if (!$form.find('.input-passw').is('.input_error'))
			{
				$form.find('.input-passw').keyup(function(){
					if($(this).val().length < 3)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-passw').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-passw').removeClass('input_error');
	    }
	    if (!$form.find('.pp').prop('checked'))
	    {
	    	$form.find('.pp').parent().addClass('checkbox_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.pp').parent().removeClass('checkbox_error');
	    }
	    if (!err)
	    {
			alert('Успешно!');
	    }
		return false;
	});

	$('.cab-start_register .cab-start__btn').on('click', function(){
		var err = false;
		var $form = $(this).parents('form');
		if($form.find('.input-name').val().length < 3)
		{
			if (!$form.find('.input-name').is('.input_error'))
			{
				$form.find('.input-name').keyup(function(){
					if($(this).val().length < 3)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-name').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-name').removeClass('input_error');
	    }
		if(!p_mail.test($form.find('.input-mail').val()))
		{
			if (!$form.find('.input-mail').is('.input_error'))
			{
				$form.find('.input-mail').keyup(function(){
					if(!p_mail.test($(this).val()))
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-mail').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-mail').removeClass('input_error');
	    }
		if($form.find('.input-passw').val().length < 3)
		{
			if (!$form.find('.input-passw').is('.input_error'))
			{
				$form.find('.input-passw').keyup(function(){
					if($(this).val().length < 3)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-passw').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-passw').removeClass('input_error');
	    }
	    if (!$form.find('.pp').prop('checked'))
	    {
	    	$form.find('.pp').parent().addClass('checkbox_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.pp').parent().removeClass('checkbox_error');
	    }
	    if (!err)
	    {
			alert('Успешно!');
	    }
		return false;
	});

	$('.cab-start_reset .cab-start__btn').on('click', function(){
		var err = false;
		var $form = $(this).parents('form');
		if(!p_mail.test($form.find('.input-mail').val()))
		{
			if (!$form.find('.input-mail').is('.input_error'))
			{
				$form.find('.input-mail').keyup(function(){
					if(!p_mail.test($(this).val()))
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-mail').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-mail').removeClass('input_error');
	    }
	    if (!err)
	    {
			alert('Успешно!');
	    }
		return false;
	});

	$('.main-2__app-btn').on('click', function(){
		var err = false;
		var $form = $(this).parents('form');
		if($form.find('.input-name').val().length < 3)
		{
			if (!$form.find('.input-name').is('.input_error'))
			{
				$form.find('.input-name').keyup(function(){
					if($(this).val().length < 3)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-name').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-name').removeClass('input_error');
	    }
	    if($form.find('.input-bday').val().replace(/\D+/g,'').length != 8)
		{
			if (!$form.find('.input-bday').is('.input_error'))
			{
				$form.find('.input-bday').keyup(function(){
					if($(this).val().replace(/\D+/g,'').length != 8)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-bday').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-bday').removeClass('input_error');
	    }
	    if (!err)
	    {
			alert('Успешно!');
	    }
		return false;
	});

	$('.invite__btn').on('click', function(){
		var err = false;
		var $form = $(this).parents('form');
		if($form.find('.input-name').val().length < 3)
		{
			if (!$form.find('.input-name').is('.input_error'))
			{
				$form.find('.input-name').keyup(function(){
					if($(this).val().length < 3)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-name').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-name').removeClass('input_error');
	    }
		if(!p_mail.test($form.find('.input-mail').val()))
		{
			if (!$form.find('.input-mail').is('.input_error'))
			{
				$form.find('.input-mail').keyup(function(){
					if(!p_mail.test($(this).val()))
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-mail').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-mail').removeClass('input_error');
	    }
	    if (!err)
	    {
			_thank();
	    }
		return false;
	});

	$('.paym__btn').on('click', function(){
		var err = false;
		var $form = $(this).parents('form');
		if($form.find('.input-card').val().replace(/\D+/g,'').length != 16)
		{
			if (!$form.find('.input-card').is('.input_error'))
			{
				$form.find('.input-card').keyup(function(){
					if($(this).val().replace(/\D+/g,'').length != 16)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-card').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-card').removeClass('input_error');
	    }
		if($form.find('.input-expd').val().replace(/\D+/g,'').length != 6)
		{
			if (!$form.find('.input-expd').is('.input_error'))
			{
				$form.find('.input-expd').keyup(function(){
					if($(this).val().replace(/\D+/g,'').length != 6)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-expd').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-expd').removeClass('input_error');
	    }
		if($form.find('.input-cvv').val().replace(/\D+/g,'').length != 3)
		{
			if (!$form.find('.input-cvv').is('.input_error'))
			{
				$form.find('.input-cvv').keyup(function(){
					if($(this).val().replace(/\D+/g,'').length != 3)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-cvv').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-cvv').removeClass('input_error');
	    }
	    if (!$form.find('.pp').prop('checked'))
	    {
	    	$form.find('.pp').parent().addClass('checkbox_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.pp').parent().removeClass('checkbox_error');
	    }
	    if (!err)
	    {
			alert('Успешно!');
	    }
		return false;
	});

	$('.cab-set__btn').on('click', function(){
		var err = false;
		var $form = $(this).parents('form');
		if($form.find('.input-fname').val().length < 3)
		{
			if (!$form.find('.input-fname').is('.input_error'))
			{
				$form.find('.input-fname').keyup(function(){
					if($(this).val().length < 3)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-fname').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-fname').removeClass('input_error');
	    }
		if($form.find('.input-lname').val().length < 3)
		{
			if (!$form.find('.input-lname').is('.input_error'))
			{
				$form.find('.input-lname').keyup(function(){
					if($(this).val().length < 3)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-lname').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-lname').removeClass('input_error');
	    }
	    if($form.find('.input-bday').val().replace(/\D+/g,'').length != 8)
		{
			if (!$form.find('.input-bday').is('.input_error'))
			{
				$form.find('.input-bday').keyup(function(){
					if($(this).val().replace(/\D+/g,'').length != 8)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-bday').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-bday').removeClass('input_error');
	    }
		if(!p_mail.test($form.find('.input-mail').val()))
		{
			if (!$form.find('.input-mail').is('.input_error'))
			{
				$form.find('.input-mail').keyup(function(){
					if(!p_mail.test($(this).val()))
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-mail').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-mail').removeClass('input_error');
	    }
	    if (!err)
	    {
			alert('Успешно!');
	    }
		return false;
	});

	$('.pg-lot__btn').on('click', function(){
		var err = false;
		var $form = $(this).parents('form');
		if($form.find('.input-date').val().replace(/\D+/g,'').length != 4)
		{
			if (!$form.find('.input-date').is('.input_error'))
			{
				$form.find('.input-date').keyup(function(){
					if($(this).val().replace(/\D+/g,'').length != 4)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-date').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-date').removeClass('input_error');
	    }
		if($form.find('.input-time').val().replace(/\D+/g,'').length != 8)
		{
			if (!$form.find('.input-time').is('.input_error'))
			{
				$form.find('.input-time').keyup(function(){
					if($(this).val().replace(/\D+/g,'').length != 8)
					{
						$(this).addClass('input_error');
					}
					else
					{
						$(this).removeClass('input_error');
					}
				});
			}
			$form.find('.input-time').addClass('input_error');
			err = true;
	    }
	    else
	    {
	    	$form.find('.input-time').removeClass('input_error');
	    }
	    if (!err)
	    {
			alert('Успешно!');
	    }
		return false;
	});

	$('.how-end__btn').on('click', function(){
		if (!$('.how-end .tc').prop('checked'))
	    {
	    	$('.how-end .tc').parent().addClass('checkbox_error');
	    	return false;
	    }
	});
	$('.how-end .tc').on('change', function(){
		if ($(this).prop('checked'))
	    {
	    	$(this).parent().removeClass('checkbox_error');
	    }
	});

});