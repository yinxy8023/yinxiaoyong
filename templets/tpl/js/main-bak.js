/*  Name:main.js
//  Data:2016.07.09 11:21
//  Author:skyline
//  QQ:78141097
//  Notes:页面运行事件*/
$(function() { /*需要执行的事件*/
	/*swiper代码*/

	function swiperlode() {
		var swiper01 = new Swiper('.pic-show', {
			pagination: '.swiper-pagination',
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 0,
			loop: true,
			autoplay: 3000,
			autoplayDisableOnInteraction: false
		});
		var swiper02 = new Swiper('.news-show', {
			pagination: '.swiper-pagination',
			slidesPerView: 1,
			paginationClickable: true,
			spaceBetween: 0,
			loop: true,
			autoplay: 3000,
			autoplayDisableOnInteraction: false,
			onInit: function(swiper) {
				swiperAnimateCache(swiper); //隐藏动画元素 
				swiperAnimate(swiper); //初始化完成开始动画
			},
			onSlideChangeEnd: function(swiper) {
				swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			}
		});
	};
	swiperlode();
	var tabsSwiper = new Swiper('.shop-container', {
		speed: 500,
		autoHeight: true,
		/*自动高度*/
		onSlideChangeStart: function() {
			$(".shop-tab .on").removeClass('on');
			$(".shop-tab li").eq(tabsSwiper.activeIndex).addClass('on');
		}
	});
	$(".shop-tab li").on('touchstart mousedown', function(e) {
		e.preventDefault()
		$(".shop-tab .on").removeClass('on')
		$(this).addClass('on')
		tabsSwiper.slideTo($(this).index())
	});
	$(".shop-tab li").on('click', function(e) {
		e.preventDefault()
	}); /*pjax*/
	$(document).pjax('a.pjax', '#main-box', {
		fragment: '#main-box',
		timeout: 5000
	});
	$(document).on('pjax:send', function() {
		$(".pjax_loading").removeClass('hidden');
	});
	$(document).on('pjax:complete', function() {
		$(".pjax_loading").addClass('hidden');
		swiperlode();
		listimg();
	});
	$('.main-nav ul li').on('touchstart mousedown', function() {
		$('.main-nav ul li').removeClass('on');
		$(this).addClass('on');
	});
}); /*复制商品头部，用于渐变动画*/
var shoptop = $('.shop-art-top').clone();
shoptop.addClass('shop-art-top-h');
$('.shop-art-top').before(shoptop); /*添加pjax加载页面*/
var loading = $('<div class="fixed pjax_loading hidden"><i class="absolute ctc iconfont icon-loading-copy"></i></div>');
$("body").append(loading); /*读取当前城市信息*/
var city = $.cookie('grf_cookie');
$(".city-name,#city-this").text(city);
$('.city-name').on('touchstart mousedown', function() {
	$(".city-list").slideDown(300);
});
$('.city-list li').on('touchstart mousedown', function() {
	var city = $(this).text();
	$(".city-name,#city-this").text(city);
	$(".city-list").slideUp(300);
	$.cookie('grf_cookie', city, {
		expires: 7
	});
});
$(".search-keyword,.input").on('focus', function() {
	$(".main-nav").addClass("hidden");
});
$(".search-keyword,.input").on('blur', function() {
	$(".main-nav").removeClass("hidden");
}); /*滚动页面执行*/
var wht = $(window).height();
var dht = $(document).height();
$(window).on('touchstart', function() {
	$(".search-keyword,.input").blur();
});
$(window).on('scroll', function() {
	$(".city-list").slideUp(300); /*商品详情页头部控制*/
	var wst = $(window).scrollTop();
	var dst = $(document).scrollTop();
	var shopOP = ("0." + wst + "");
	if (wst > 60) {
		$(".main-top").addClass("top-shadow");
	} else {
		$(".main-top").removeClass("top-shadow");
	};
	if (dst + 60 >= dht - wht) {
		$(".main-nav,.shop-bottom").removeClass("bot-shadow");
	} else {
		$(".main-nav,.shop-bottom").addClass("bot-shadow");
	};
	if (wst < 100) {
		$(".shop-art-top").css({
			opacity: 1 - shopOP
		});
		$(".shop-art-top-h").css({
			opacity: shopOP
		});
	} else {
		$(".shop-art-top").css({
			opacity: 0
		});
		$(".shop-art-top-h").css({
			opacity: 1
		});
	};
	var shoptopH = $(".shop-art-info").height() - 40;
	if (wst >= shoptopH) {
		$(".shop-article-box .shop-tab").addClass("shop-fixed");
		$(".shop-article-box .shop-container .swiper-wrapper").css("margin-top", "90px");
	} else {
		$(".shop-article-box .shop-tab").removeClass("shop-fixed");
		$(".shop-article-box .shop-container .swiper-wrapper").css("margin-top", "0");
	}
}); /*改变窗口大小执行*/
$(window).resize(function(e) {
	var list_imgh = $(".news-list li:first").height();
	$(".news-list li img").height(list_imgh);
	$(".news-list li:first img").height("auto");
	$(".news-list li img").next("span").height(list_imgh);
}); /*预定页面需执行 for lulu*/
$('.book-insetnow').on('click', function() {
	$('.book-layerbg').show();
	$('.book-box').addClass('overhide');
	$('.book-sure').removeClass('fadeOutUp').addClass('fadeInDown').show();
	return false
});
$('.book-close').on('click', function() {
	$('.book-sure').removeClass('fadeInDown').addClass('fadeOutUp');
	setTimeout(function() {
		$('.book-sure').hide();
	}, 800);
	$('.book-box').removeClass('overhide');
	$('.book-layerbg').hide();
	return false
}); //弹窗
$('.book-index>ul>li>.w').on('swipeleft', function() {
	$(this).addClass('on');
	$(this).animate({
		left: -146
	});
	$(this).next('.book-now').animate({
		right: 73
	});
	$(this).next().next('.book-phone').animate({
		right: 0
	});
}); //左滑
$('.book-index>ul>li>.w').on('swiperight', function() {
	$(this).removeClass('on');
	$(this).animate({
		left: 0
	});
	$(this).next('.book-now').animate({
		right: -73
	});
	$(this).next().next('.book-phone').animate({
		right: -146
	});
}); //右滑
$('.book-index>ul>li>.w').on('click', function() {
	$(this).toggleClass('on');
	if ($(this).is('.on')) {
		$(this).animate({
			left: -146
		});
		$(this).next('.book-now').animate({
			right: 73
		});
		$(this).next().next('.book-phone').animate({
			right: 0
		});
	} else {
		$(this).animate({
			left: 0
		});
		$(this).next('.book-now').animate({
			right: -73
		});
		$(this).next().next('.book-phone').animate({
			right: -146
		});
	}
});
$('.book-plus').on('click', function() {
	var i = $(this).prev().prev('.book-personum').val();
	i++;
	$(this).prev().prev('.book-personum').val(i);
});
$('.book-minus').on('click', function() {
	var i = $(this).prev('.book-personum').val();
	if (i == 1) {
		return false
	} else {
		i--;
		$(this).prev('.book-personum').val(i);
	}
}); //增减
$('.book-searchbtn').on('click', function() {
	$('.book-layerbg').show();
	$('.book-box').addClass('overhide');
	$('.book-search').slideDown(500);
	return false
}); //弹窗
$('.book-backup').on('click', function() {
	$('.book-search').slideUp(500);
	setTimeout(function() {
		$('.book-search').hide();
	}, 800);
	$('.book-box').removeClass('overhide');
	$('.book-layerbg').fadeOut(500);
	return false
});