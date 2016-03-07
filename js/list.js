$(document).ready(function(){
	var $div_li =$('div.sidebar_menu ul li');
    $div_li.click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');  
        var index =  $div_li.index(this);  
		$('div.sidebar_box > div').eq(index).show().siblings().hide(); 
	}).hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});

	$('.ul_tab ul li').click(function(){
		var that=this;
		var scroll_offset = $('.step ul li').eq($(that).index()).offset();  
		$("body,html").animate({
		scrollTop:scroll_offset.top - 80 
		},2000);
	});

	$('.ul_tab ul li img').hover(function(){
		$width = $(this).width();
		$height = $(this).height();
		$(this).stop().animate({'width':$width + 30 + 'px','height':$height + 30 + 'px','top':'-15px','left':'-15px'},500);
	},function(){
		$(this).stop().animate({'width':$width,'height':$height,'top':'0','left':'0'},500);
	});

	$('.group1_content ul li img').hover(function(){
		$width = $(this).width();
		$height = $(this).height();
		$(this).stop().animate({'width':$width + 30 + 'px','height':$height + 30 + 'px','top':'-10px','left':'10px'},500);
	},function(){
		$(this).stop().animate({'width':$width,'height':$height,'top':'5px','left':'25px'},500);
	});

	var iNowUlLeft=0;
	var gcLi=$('.group1_content li');
	var gcUl=$('.group1_content ul');
	$('#prev').click(function(){
		if (iNowUlLeft > 0) {
			iNowUlLeft -- ;
			oUlleft();
		}
		oAhref();
	});
	$('#next').click(function(){
		if(iNowUlLeft<gcLi.length-6){
			iNowUlLeft++;
			oUlleft();
		}
		oAhref();
	});

	function oUlleft(){
		var left = -gcLi[0].offsetWidth*iNowUlLeft+'px';
		gcUl.animate({'left' : left},1000);
	}

	function oAhref(){
		$('#prev').attr('class',iNowUlLeft==0?'btn':'btn showBtn');
		$('#next').attr('class',iNowUlLeft==(gcLi.length-6)?'btn':'btn showBtn');
	}

	// $('.pp').hover(
	// 	function(){
	// 		var that=this;
	// 		itemTimer=setTimeout(function(){
	// 			$(that).find('div').css('display','block').fadeIn(200);
	// 		},100);			
	// 		},
	// 	function(){
	// 		var that=this;
	// 		clearTimeout(itemTimer);
	// 		$('.show_step').fadeOut(200);
	// 		}
	// 	)
	
});