/* ****************************************************************** 

	@This javascript Information{
		JS File Name:common.js
			
	}

****************************************************************** */



/*===================================================================

	1:imgover setting

===================================================================*/
if(typeof jQuery != "undefined"){

	/* img input */
	$(function(){
		$('img.imgover,input[type=image].imgover').each(function(){
			var imgOut  = new Image();
			imgOut.src  = $(this).attr('src');
			var imgOver = new Image();
			if(imgOut.src.match(/.gif$/)){
			    imgOver.src = $(this).attr('src').replace('.gif','_on.gif');
			}else if(imgOut.src.match(/.jpg$/)){
			    imgOver.src = $(this).attr('src').replace('.jpg','_on.jpg');
			}else if(imgOut.src.match(/.png$/)){
			    imgOver.src = $(this).attr('src').replace('.png','_on.png');
			}
			
			$(this)
				.mouseover(function(){$(this).attr('src',imgOver.src);})
				.mouseout( function(){$(this).attr('src',imgOut.src);});
		});
	});
	
	/* fade */
	$(function(){
		$('a img.imgfade,input.imgfade,a.imgfade').hover(
			function(){
				$(this).fadeTo(100,0.7);
			},
			function(){
				$(this).fadeTo(100,1.0);
			}
		);
	});
}



/*===================================================================

	2:scroll setting

===================================================================*/
$(function(){
    $('a[href^=#]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});



/*===================================================================

	3:gnavi setting

===================================================================*/
$(function(){
    $("#gnavi .sub_menu").hide();
	$('#gn_01').hover(
	function(){ $(this).children(".sub_menu").stop(true, true).fadeIn("fast"); },
	function(){ $(this).children(".sub_menu").stop(true, true).fadeOut("fast"); }
	);
	
	$("#gnavi .sub_menu2").hide();
	$('#gn_02').hover(
	function(){ $(this).children(".sub_menu2").stop(true, true).fadeIn("fast"); },
	function(){ $(this).children(".sub_menu2").stop(true, true).fadeOut("fast"); }
	);
});



/*===================================================================

	4:top slide setting

===================================================================*/
$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		slideshowSpeed: 5000,
		mousewheel: false,
		directionNav: true,
		controlNav: false,
	});    
});



/*===================================================================

	5:Language change setting

===================================================================*/
$(function(){
    $('#gn_08 a').click(function(){
        $('.en,#gn_08').hide();
		$('.jp,#gn_09').show();
    });
	$('#gn_09 a').click(function(){
        $('.jp,#gn_09').hide();
		$('.en,#gn_08').show();
    });
	$('#sphn_01 a').click(function(){
        $('.en,#sphn_01').hide();
		$('.jp,#sphn_02').show();
    });
	$('#sphn_02 a').click(function(){
        $('.jp,#sphn_02').hide();
		$('.en,#sphn_01').show();
    });
});



/*===================================================================

	6:smart navi setting

===================================================================*/
$(function(){
	$("#sph_navi").hide();
	$("#sphn_03").click(function(){
		$("#sph_navi").slideToggle('fast');
	});
	
	$("#sph_navi .each_navi .sub_menu").hide();
	$("#sph_navi .each_navi").click(function(){
		$(this).children(".sub_menu").slideToggle('fast');
	});
});

$(function() {
    var w = $(window).width();
    var x = 500;
    if (x <= w) {
        $("#sph_navi").hide();
    }
});



/*===================================================================

	7:title fadein setting

===================================================================*/
$(window).load(function () {
    $("#news_title h2,#ot_title h2").fadeIn(3000);
});



/*===================================================================

	8:Parameter setting

===================================================================*/
$(function(){
    $("#gn_08,#sphn_01").click(function(){
		$("a:not([href ^= '#'])").each(function() {
//		$("a:not([href ^= '#'])").each(function() {
//			var obj = $(this);
//			var link = obj.attr("href");
//			obj.attr("href",link+"?lang=jp")
			var url3 = $(this).attr('href').replace(/\?lang=en/ig, "?lang=jp");
			$(this).attr('href',url3);
		});
	});
	$("#gn_09,#sphn_02").click(function(){
		$("a:not([href ^= '#'])").each(function() {
			var url2 = $(this).attr('href').replace(/\?lang=jp/ig, "?lang=en");
			$(this).attr('href',url2);
		});
	});
});


$(function(){
	// URLを取得して「?]で分割
	var url   = location.href;
	params    = url.split("?");
	//paramms   = params[1].split("&");
	
	// パラメータ用の配列を用意
	var paramArray = [];
	
	// 配列にパラメータを格納
	for ( i = 0; i < params.length; i++ ) {
		neet = params[i].split("=");
		paramArray.push(neet[0]);
		paramArray[neet[0]] = neet[1];
	}
	
	if ( paramArray["lang"] == "jp") {
		$("a:not([href ^= '#'])").each(function() {
			var obj = $(this);
			var link = obj.attr("href");
			obj.attr("href",link+"?lang=jp")
		});
		$('.en,#gn_08,#sphn_01').hide();
		$('.jp,#gn_09,#sphn_02').show();
	} else {
		$("a:not([href ^= '#'])").each(function() {
			var obj = $(this);
			var link = obj.attr("href");
			obj.attr("href",link+"?lang=en")
		});
		$('.jp,#gn_09,#sphn_02').hide();
		$('.en,#gn_08,#sphn_01').show();
	}
});




/*===================================================================

	9:scroll setting

===================================================================*/
//$(function() {
//	var scrolly = 0;
//	var speed = 200;
//	$('html').mousewheel(function(event, mov) {
//		if(jQuery.browser.webkit){
//			if (mov > 0) scrolly =  $('body').scrollTop() - speed;
//			else if (mov < 0) scrolly =  $('body').scrollTop() + speed;
//		} else {
//			if (mov > 0) scrolly =  $('html').scrollTop() - speed;
//			else if (mov < 0) scrolly =  $('html').scrollTop() + speed;
//		}
//		$('html,body')
//			.stop()
//			.animate({scrollTop: scrolly}, 'slow',$.easie(0,0,0,1));
//		return false;
//	});
//	
//});


$(function() {
	$("#data_form").hide();
	$("#btn_data a").click(function(){
		$("#data_form").slideToggle();
	});
});

$(function(){
console.log("Javascript loaded");
});