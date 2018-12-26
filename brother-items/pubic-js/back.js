// 返回顶部脚本开始
$(window).scroll(
  			function()
  			{
	  			if ($(window).scrollTop() <= 50) {
				$("#turnback").fadeOut();
				}
				else if ($(window).scrollTop() > 200) {
					$("#turnback").fadeIn();
				} 
			 });

$("#turnback").click(function()
		{
			$("html,body").animate({scrollTop:0},500);
			$(this).fadeOut();
		});
// 返回顶部脚本结束