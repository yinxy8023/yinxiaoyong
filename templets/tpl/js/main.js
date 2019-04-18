/*  Name:main.js
//  Data:2016.07.14 15：37
//  Author:skyline
//  QQ:78141097
//  Notes:页面运行事件*/
/*读取当前城市信息*/
var city = $.cookie('grfweb_cookie');
$(".city-name,#city-this").text(city);
$("input.this-city").val(city); /*需要默认城市的输入框，添加.this-city类*/

function getLocation() {/*调用新浪ip接口获取当前位置*/
	$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function() {
/*  $(".country").html(remote_ip_info.country);
  $(".province").html(remote_ip_info.province);
  $(".city").html(remote_ip_info.city);
  $(".isp").html(remote_ip_info.isp);*/
		var city = (remote_ip_info.city);
		$(".city-name,#city-this").text(city);
		alert("获取成功，当前城市是：" + city + "");
		$.cookie('grfweb_cookie', city, {
			expires: 7
		});
		$(".city-list").slideUp(300);
		$('.city-switch').removeClass("city-switch-on");
	});
};
$('.city-switch').on('click', function() {
	$(this).toggleClass("city-switch-on");
	$(".city-list").slideToggle(300);
});
$('.city-list li').on('click', function() {
	var city = $(this).text();
	$(".city-name,#city-this").text(city);
	$(".city-list").slideUp(300);
	$('.city-switch').removeClass("city-switch-on");
	$.cookie('grfweb_cookie', city, {
		expires: 7
	});
});
$(".download").mouseenter(function() {
	$(this).addClass("download-on");
	$(".app-download").slideDown(300);
}).mouseleave(function() {
	$(".app-download").slideUp(300);
	$(this).removeClass("download-on");
}); 

/*大图轮播开始*/
var swiper01 = new Swiper('.pic-show', {
	pagination: '.swiper-pagination',
	slidesPerView: 1,
	paginationClickable: true,
	spaceBetween: 0,
	loop: true,
	autoplay: 3000,
	autoplayDisableOnInteraction: false
}); 
/*商品图*/
var galleryTop = new Swiper('.gallery-top', {
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	spaceBetween: 10,
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	spaceBetween: 10,
	centeredSlides: true,
	slidesPerView: 'auto',
	touchRatio: 0.2,
	slideToClickedSlide: true
});
galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop; 
/*轮播结束*/

/*小星星*/
var star = $('<i class="s1"></i><i class="s2"></i><i class="s3"></i><i class="s4"></i><i class="s5"></i>');
$(".star-box").append(star);
$(".star-box i").addClass("iconfont icon-xingxing-copy-copy");
$(".star-box[data-star=4]").find('.s4').next('i').addClass('h');
$(".star-box[data-star=3]").find('.s3').nextAll('i').addClass('h');
$(".star-box[data-star=2]").find('.s2').nextAll('i').addClass('h');
$(".star-box[data-star=1]").find('.s1').nextAll('i').addClass('h');

 /*球场列表图像动画*/
$(".court-list li").mouseenter(function() {
	var thisimg = $(this).find("img");
	var imgw = 290;
	var imgh = 211;
	thisimg.animate({
		width: imgw,
		height: imgh,
		top: "-15px",
		left: "-15px"
	}, 300);
});
$(".court-list li").mouseleave(function() {
	var thisimg = $(this).find("img");
	var imgw = 260;
	var imgh = 181;
	thisimg.animate({
		width: imgw,
		height: imgh,
		top: "0",
		left: "0"
	}, 300);
});
/*城市分类切换*/
$(".sub-list li").on('click', function() {
	$(this).parent().find("li").removeClass("on");
	$(this).addClass("on");
}); 
/*for top*/
var fortop = $('<div class="fixed scrollbox hidden"><i class="iconfont icon-arrows-copy1 fortop" title="返回顶部"></i></div>');
$("body").append(fortop);
$(".fortop").on('click', function() {
	var wst = $(window).scrollTop();
	if (wst >= 1500) {
		var wtime = 1500
	} else {
		var wtime = wst
	};
	$('body, html').animate({
		scrollTop: '0'
	}, wtime);
	return false;
});
$(window).on('scroll', function() {
	var wst = $(window).scrollTop();
	if (wst > 200) {
		$(".scrollbox").removeClass('hidden');
	} else {
		$(".scrollbox").addClass('hidden');
	};
}); /*精品购物*/
$(".shop-search ul>li,.shop-sort ul>li").on('click', function() {
	$(this).parent().find("li").removeClass("on");
	$(this).addClass("on");
});
$(".shop-color b").on('click', function() {
	$(this).parent().find("b").removeClass("on");
	$(this).addClass("on");
});
$(".icon-iconfont707").on('click', function() {
	var input = $(this).parent().find(".input");
	var number = input.val();
	number++;
	input.val(number);
});
$(".icon-icon").on('click', function() {
	var input = $(this).parent().find(".input");
	var number = input.val();
	number--;
	input.val(number);
}); /*教学频道 for xiaoyong*/
$(".teaching-nav1>li>a").on('click', function() {
	$(".teaching-nav1>li>a").removeClass('th-tag-active');
	$(this).addClass('th-tag-active');
})
$(".teaching-nav2>li>a").on('click', function() {
	$(".teaching-nav2>li>a").removeClass('th-tag-active');
	$(this).addClass('th-tag-active');
})
$(".teaching-nav3>li>a").on('click', function() {
	$(".teaching-nav3>li>a").removeClass('th-tag-active');
	$(this).addClass('th-tag-active');
})
$('.coach-title>ul>li').on('click', function() {
	$('.coach-title>ul>li').removeClass('title-active');
	$(this).addClass('title-active');
	var sss = $(this).attr('id');
	$(this).parent().parent().parent().find("sss").toggle();
})
$('#coach-content1').on('click', function() {
	$('.coach-content2').toggle();
	$('.coach-content1').toggle();
})
$('#coach-content2').on('click', function() {
	$('.coach-content1').toggle();
	$('.coach-content2').toggle();
})
/*个人中心*/
$('.my-left>ul>li').on('click',function(){
	$('.my-left>ul>li').removeClass('on');
	$(this).addClass('on');
});
$(".registerform").Validform({
		tiptype:2,
		usePlugin:{
			passwordstrength:{
				minLen:6,//设置密码长度最小值，默认为0;
				maxLen:20,//设置密码长度最大值，默认为30;
				trigger:function(obj,error){
					if(error){
						obj.parent().next().find(".Validform_checktip").show();
						obj.parent().next().find(".passwordStrength").hide();
					}else{
						obj.parent().next().find(".Validform_checktip").hide();
						obj.parent().next().find(".passwordStrength").show();	
					}
				}
			}
		}
	});
$('.my-password>li input[name*=password2]').on('focus',function(){
  $(".passwordStrength").hide();
});
/*pjax*/
	$(document).pjax('.my-left a', '.my-right', {
		fragment: '.my-right',
		timeout: 5000
	});
	$(document).on('pjax:send', function() {
		$(".pjax_loading").removeClass('hidden');
	});
	$(document).on('pjax:complete', function() {
		$(".pjax_loading").addClass('hidden');
	});
/*select.js*/
$(function($) {
	var selects = $('select'); //获取select
	for (var i = 0; i < selects.length; i++) {
		createSelect(selects[i], i);
	}

	function createSelect(select_container, index) {
		//创建select容器，class为select_box，插入到select标签前
		var tag_select = $('<div></div>'); //div相当于select标签
		tag_select.attr('class', 'select_box');
		tag_select.insertBefore(select_container);
		//显示框class为select_showbox,插入到创建的tag_select中
		var select_showbox = $('<div></div>'); //显示框
		select_showbox.css('cursor', 'pointer').attr('class', 'select_showbox').appendTo(tag_select);
		//创建option容器，class为select_option，插入到创建的tag_select中
		var ul_option = $('<ul></ul>'); //创建option列表
		ul_option.attr('class', 'select_option');
		ul_option.appendTo(tag_select);
		createOptions(index, ul_option); //创建option
		//点击显示框
		select_showbox.on('click', function() {
			ul_option.slideToggle();
		});
		//tag_select.toggle(function() {
		//			ul_option.show();
		//		}, function() {
		//			ul_option.hide();
		//		});
		var li_option = ul_option.find('li');
		li_option.on('click', function() {
			$(this).addClass('selected').siblings().removeClass('selected');
			var value = $(this).text();
			select_showbox.text(value);
			ul_option.slideUp();
		});

		li_option.hover(function() {
			$(this).addClass('hover').siblings().removeClass('hover');
		}, function() {
			li_option.removeClass('hover');
		});

	}

	function createOptions(index, ul_list) {
		//获取被选中的元素并将其值赋值到显示框中
		var options = selects.eq(index).find('option'),
			selected_option = options.filter(':selected'),
			selected_index = selected_option.index(),
			showbox = ul_list.prev();
		showbox.text(selected_option.text());

		//为每个option建立个li并赋值
		for (var n = 0; n < options.length; n++) {
			var tag_option = $('<li></li>'),
				//li相当于option
				txt_option = options.eq(n).text();
			tag_option.text(txt_option).css('cursor', 'pointer').appendTo(ul_list);

			//为被选中的元素添加class为selected
			if (n == selected_index) {
				tag_option.attr('class', 'selected');
			}
		}
	}

});(jQuery)