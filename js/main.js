$(function() {
	var sidebar = $('#sidebar'); //选择侧栏
	var mask = $('.mask'); //选择蒙版
	var sidebar_trigger = $('#sidebar_trigger'); //选择侧栏触发器
	var backButton = $('.back-to-top'); //选择返回顶部

	function showSidebar() { //显示侧栏
		mask.fadeIn(1000); //fadeIn(speed);毫秒 （比如 1500）
		sidebar.animate({
			'right': 0
		}, 1000); //animate(styles,speed),将right：-300px改变为right:0;
		//sidebar.css('right',0);
	}

	function hideSidebar() { //隐藏侧栏
		mask.fadeOut(500);
		sidebar.animate({
			'right': -sidebar.width()
		}, 500);
	}

	mask.on('click', hideSidebar); //监听蒙版点击事件
	sidebar_trigger.on('click', showSidebar); //监听侧栏触发器点击事件

	backButton.on('click', function() { //监听返回顶部按钮点击事件
		$('html,body').animate({
			scrollTop: 0
		}, 800)
	})

	//判断返回顶部按钮是否隐藏和显示
	$(window).on('scroll', function() {
		//如果已滚动的部分高于窗口的高度
		if($(window).scrollTop() > $(window).height()) {
			//显示返回按钮
			backButton.fadeIn();
		} else {
			//隐藏返回按钮
			backButton.fadeOut();
		}
	})

	//触发scroll事件
	$(window).trigger('scroll');

})

window.onload = function () {
    var qq = document.getElementById("QQ");
    var panel_qq = document.getElementById("panel_qq");

    var wx = document.getElementById("WX");
    var panel_wx = document.getElementById("panel_wx");

    qq.onmouseover = function () {
        panel_qq.style.display = "block";
    };
    qq.onmouseout = function () {
        panel_qq.style.display = "none";
    };

    wx.onmouseover = function () {
        panel_wx.style.display = "block";
    };
    wx.onmouseout = function () {
        panel_wx.style.display = "none";
    };
}