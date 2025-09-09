$(function () {

	/**
	 * 根据data-level修改评分星星数量
	 */
	$(".start").each(function () {
		let level = $(this).data("level")
		let childHtmlStr = ''
		for (let i = 0; i < 5; i++) {
			if (i < level) {//黄色星星
				childHtmlStr = childHtmlStr + '<img src="/img/star_01.png" >'
			} else {//灰色星星
				childHtmlStr = childHtmlStr + '<img src="/img/star_02.png" >'
			}

		}
		$(this).html(childHtmlStr)
		console.log(childHtmlStr)
	})


	// 计算时间
	function secondToMin(s) {
		if (s) {
			var MM = Math.floor(s / 60);
			var SS = s % 60;
			if (MM < 10)
				MM = "0" + MM;
			if (SS < 10)
				SS = "0" + SS;
			var min = MM + ":" + SS;
			return min.split('.')[0];
		} else {
			return "--:--";
		}

	}
	var music = $("#mplayer")[0];
	/**
	 * 更新播放进度
	 */
	var updateMusicProgress = function () {
		if (music != null) {
			music.duration;//获取总播放时间
			music.currentTime;//获取播放进度
			var value = music.currentTime > 0 ? music.currentTime * 100 / music.duration : "0"
			$(".progress-bar").css("width", value + "%")
			$(".current-time").text(secondToMin(music.currentTime))
			$(".total-time").text(secondToMin(music.duration))
			console.log("myVid.duration", value);
		}
	}
	var timer = setInterval(() => {
		updateMusicProgress()
	}, 1000);

	var currentPlayUrl = ''
	/**
	 * 歌曲点击
	 */
	$(".music-item").bind("click", function () {
		var clickElement = $(this)
		//点击的元素变大，其他元素还原
		$(".music-item").each(function () {
			$(this).removeClass("big")
		})
		$(this).addClass("big")
		//元素变大的不处理，非变大元素还原播放状态
		$(".music-item").each(function () {
			if(!$(this).hasClass("big")){
				$(this).addClass("pause").removeClass("play")
			}
		})
		//当前点击的元素切换播放状态
		if (!$(this).hasClass("play")) {
			$(this).removeClass("pause").addClass("play")
			var url = $(this).data("url")
			if(url != currentPlayUrl){
				currentPlayUrl = url
				$("#mplayer").attr("src", currentPlayUrl);
			}

			music.play();//开始播放
		} else {
			$(this).addClass("pause").removeClass("play")
			music.pause();//暂停
		}
	})
})
