
// 滚动监听
$('body').scrollspy({ target: '#mynavbar' })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

// $('.navbar .nav ul').first("li").function(){
//   if ($(window).scrollTop() > 0) {
//   	alert("该滚动监听了")
//   	// $(this).addclass('active');
//   }
// }
$(window).scroll(
  			function()
  			{
	  			if ($(window).scrollTop() >0) {
				$('.navbar .nav ul').first("li")
				}
				else if ($(window).scrollTop() > 150) {

				}
			 });

// 模态框

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})


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

//背景音乐播放脚本===================================
 //加载背景音乐，并自动播放
        $('#bg_music').append('<audio id="m_bg_music" src="music/1.mp3" autoplay="autoplay" loop="loop"  volume="60" autostart=true ></audio>');
        $('#bg_music_btn').click(function(){
          var state = $('#bg_music_btn').attr('state');
            if(state == '1')//
            {
                $('#bg_music_btn').attr('state','0');
                $("#music_btn").removeClass('Rotation');
                $("#m_bg_music").remove();
            }
            else if(state == '0')
            {
                $('#bg_music_btn').attr('state','1');
                $('#m_bg_music').remove();
                $("#music_btn").addClass('Rotation');
                $('#bg_music').append('<audio id="m_bg_music" src="music/1.mp3" autoplay="autoplay" loop="loop"  volume="60" autostart=true ></audio>');
            }
        });

        $("#pass").click(function(){
          var state = $('#bg_music_btn').attr('state');
            if(state == '1')//
            {
                $('#bg_music_btn').attr('state','0');
                $("#music_btn").removeClass('Rotation');
                $("#m_bg_music").remove();
            }
            else if(state == '0')
            {
                $('#bg_music_btn').attr('state','1');
                $('#m_bg_music').remove();
                $("#music_btn").addClass('Rotation');
                $('#bg_music').append('<audio id="m_bg_music" src="music/1.mp3" autoplay="autoplay" loop="loop"  volume="60" autostart=true ></audio>');
            }
        });

        $("#ztbf").click(function(){
          var state = $('#bg_music_btn').attr('state');
            if(state == '1')//
            {
                $('#bg_music_btn').attr('state','0');
                $("#music_btn").removeClass('Rotation');
                $("#m_bg_music").remove();
            }
            else if(state == '0')
            {
                $('#bg_music_btn').attr('state','1');
                $('#m_bg_music').remove();
                $("#music_btn").addClass('Rotation');
                $('#bg_music').append('<audio id="m_bg_music" src="music/1.mp3" autoplay="autoplay" loop="loop"  volume="60" autostart=true ></audio>');
            }
        })

//======================================================

//导航栏============
// $(window).scroll(
//     function() {
//       var top = $(window).scrollTop();
//       if (top <= 50) {
      
//     }
//     }
//   )

// $(window).scroll(
//         function()
//         {
//           if ($(window).scrollTop() <= 50) {
//            $("#mynavbar").addClass('scroll-top');
//         }
//        });
//=========================================

//工具提示=================================

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})
//========================================

