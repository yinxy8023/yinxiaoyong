/*  Name:ie.js
//  Data:2016.04.08 09:34
//  Author:skyline
//  QQ:78141097
//  Notes:针对IE8一下浏览器的一些事件*/
$(document).ready(function() {
    /*让我们早日摆脱IE浏览器！*/
	function ie() {
		var topbg = $('<div class="topdiv"><i>X</i>是时候淘汰IE浏览器了，点击<a href="http://www.okjn.cn/upgrade-your-browser.html">这里</a>更换其它浏览器！</div><div class="topbg"></div>');
		$("body").append(topbg);
	};
	var COOKIE_NAME = "novaie";
	if ($.cookie(COOKIE_NAME)) {} else {
		ie();
		$.cookie(COOKIE_NAME, 'ishide', {
			expires: 1
		});
	};
	$(".topdiv i").click(function() {
		$(".topdiv").hide();
		$(".topbg").slideUp(300);
	});
	/*解决ie不支持placeholder*/
	jQuery('[placeholder]').focus(function() {
		var input = jQuery(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = jQuery(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur().parents('form').submit(function() {
		jQuery(this).find('[placeholder]').each(function() {
			var input = jQuery(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});
	/*让IE支持圆角及阴影*/
	if (window.PIE) {
		$('.bd-r100,.bd-r2,.bd-r4,.appbtn, .view-title, .hel-view>li, #view-sug, .message-list .box,.intext, .btn, .message-list time,.message-list .face').each(function() {
			PIE.attach(this);
		});
	};
})