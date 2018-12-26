window.onload = function(){

		var c = 0;
		var x = $("#container img").size();
		//自动播放
		var timer = setInterval(function slide(){
			c++;
			c = c==x?0:c;
			$("#container img").eq(c).fadeIn().siblings('img').fadeOut();
			$("#container ul li").eq(c).css('background','#C4C4C4').siblings('li').css('background-color','#DDDDDD');
			},2000)
		// 移入移出停止轮播
		$("#container").hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(function(){
				c++;
				c = c==x?0:c;
				$("#container img").eq(c).fadeIn(500).siblings('img').fadeOut(500);
				$("#container ul li").eq(c).css('background','#C4C4C4').siblings('li').css('background-color','#DDDDDD');
			},2000);
			})

		$("#left").hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(function(){
				c++;
				c = c==x?0:c;
				$("#container img").eq(c).fadeIn(500).siblings('img').fadeOut(500);
				$("#container ul li").eq(c).css('background','#C4C4C4').siblings('li').css('background-color','#DDDDDD');
			},2000);
			})

		$("#right").hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(function(){
				c++;
				c = c==x?0:c;
				$("#container img").eq(c).fadeIn(500).siblings('img').fadeOut(500);
				$("#container ul li").eq(c).css('background','#C4C4C4').siblings('li').css('background-color','#DDDDDD');
			},2000);
			})
		//圆点控制
		$("#container ul li").mouseenter(function(){
				c = $(this).index();
				// c显示
				$("#container img").eq(c).fadeIn(500).siblings('img').fadeOut(500);
				$("#container ul li").eq(c).css('background','#C4C4C4').siblings('li').css('background-color','#DDDDDD');
			})
		//右按钮切换
		$("#container #right").click(function(){
				c++;
				c = c==x?0:c;
				$("#container img").eq(c).fadeIn(500).siblings('img').fadeOut(500);
				$("#container ul li").eq(c).css('background','#C4C4C4').siblings('li').css('background-color','#DDDDDD');
			})
		//左按钮切换
		$("#container #left").click(function(){
			c--;
			c = c==-x?0:c;
			$("#container img").eq(c).fadeIn(500).siblings('img').fadeOut(500);
			$("#container ul li").eq(c).css('background','#C4C4C4').siblings('li').css('background-color','#DDDDDD');
		})

		//按钮切换内容·

		$("#s .button").click(function(){
			var b = 0;
			var b = $("#shift .button").index();
			alert(b);
			$("#shift .text").eq(b).fadeIn(1000).siblings('.text').fadeOut(1000);
		})

		window.onbeforeunload=function(e){
	　　alter("你要离开吗？")}

}