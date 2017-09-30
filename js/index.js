//预加载的图片
var loadImg = [
	{path:'img/logo.png',type:'img',name:'logo'},
	{path:'img/loadBkg.jpg',type:'img',name:'loadBkg'}
]
//加载的图片
var gameImg = [
	{path:'img/check.png',type:'img',name:'check'},
	{path:'img/loadBkg.jpg',type:'img',name:'loadBkg'},
	{path:'img/map.png',type:'img',name:'map'},
	{path:'img/pageOneBkg.jpg',type:'img',name:'pageOneBkg'},
	{path:'img/pageOneTitle.png',type:'img',name:'pageOneTitle'},
	{path:'img/personBkg.jpg',type:'img',name:'personBkg'},
	{path:'img/up.png',type:'img',name:'up'},
	{path:'img/videoOne.jpg',type:'img',name:'videoOne'},
	{path:'img/banner01.jpg',type:'img',name:'banner01'},
	{path:'img/banner02.jpg',type:'img',name:'banner02'},
	{path:'img/banner03.jpg',type:'img',name:'banner03'},
	{path:'img/btitle01.png',type:'img',name:'btitle01'},
	{path:'img/btitle02.png',type:'img',name:'btitle02'},
	{path:'img/btitle03.png',type:'img',name:'btitle03'},
	{path:'img/bannerBottom.jpg',type:'img',name:'bannerBottom'},
	{path:'img/date01.png',type:'img',name:'date01'},
	{path:'img/date02.png',type:'img',name:'date02'},
	{path:'img/date03.png',type:'img',name:'date03'},
	{path:'img/dateImg.png',type:'img',name:'dateImg'},
	{path:'img/pageFourBkg.jpg',type:'img',name:'pageFourBkg'},
	{path:'img/page2.jpg',type:'img',name:'page2'},
	{path:'img/logoBkg.png',type:'img',name:'logoBkg'},
	{path:'img/bigplay.png',type:'img',name:'bigplay'},
];
//全局函数
var backLayer,logoText,loadup;
//初始化
LInit(1000/40,"load",750,1206,main);
//游戏入口主函数
function main(){
    LGlobal.stageScale = LStageScaleMode.EXACT_FIT;//设置全屏变量
    LGlobal.screen(LStage.FULL_SCREEN);//设置全面适应
    backLayer = new LSprite();//创建背景层
    addChild(backLayer);//添加背景层到游戏环境中
    LLoadManage.load(loadImg,'',loadImging);
}
//预加载页面
function loadImging(result){
	//背景
	var backimg = new LBitmap(new LBitmapData(result['loadBkg']));
	backLayer.addChild(backimg);
	//logo
	var logo = new LBitmap(new LBitmapData(result['logo']));
	logo.scaleX = 1.5;
	logo.scaleY = 1.5;
	logo.x = (LGlobal.width-logo.getWidth())/2;
	logo.y = 500;
	//text
	logoText = new LTextField();
	logoText.size = 22;
	logoText.color = '#ffffff';
	logoText.text = '0%';
	logoText.x = 535;
	logoText.y = 500+logo.getHeight()+24;
	//加载条背景
	var loaddown = new LSprite();
	loaddown.x = 225;
	loaddown.y = 500+logo.getHeight()+30;
	loaddown.graphics.drawRoundRect(0,'#0d7d80',[0,0,300,10,5],true,'#0d7d80');
	//加载条
	loadup = new LSprite();
	loadup.x = 225;
	loadup.y = 500+logo.getHeight()+30;
	loadup.graphics.drawRoundRect(0,'#ffffff',[0,0,300,10,5],true,'#ffffff');
	backLayer.addChild(logo);
	backLayer.addChild(logoText);
	backLayer.addChild(loaddown);
	backLayer.addChild(loadup);
	LLoadManage.load(gameImg,loading,gameStart);//读取加载页面背景图片
}
//加载页面
function loading(progress){
	logoText.text = parseInt(progress)+'%';
	loadup.graphics.clear();
	loadup.graphics.drawRoundRect(0,'#ffffff',[0,0,300*progress/100,10,5],true,'#ffffff');
}
function audioAutoPlay(id){
    var audio = document.getElementById(id);
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
    }, false);
}
//开始
function gameStart(){
	backLayer.remove();
	$('#load').remove();
	$('#mainContent').show();
	var player =document.getElementById('videot')
	//上下拨动
	var fade;
	var fadeCheck;
	var swiper = new Swiper('.swiper-container-main', {
	    direction: 'vertical',
	    initialSlide :0,
	    onInit: function(swiper){
		      $('.page1').eq(0).addClass('animated bounceInLeft');
		 		$('.page1').eq(1).addClass('animated bounceInRight');
		 		$('.page1').eq(2).addClass('animated bounceInLeft');
		 		$('.page1').eq(3).addClass('animated rotateIn');
		 		fade = setInterval(function(){
		 			if(fadeCheck==true)
		 			{
		 				fadeCheck=false;
		 				$('.logoBkg').animate({opacity:'1.0'},800);
		 			}else{
		 				fadeCheck=true;
		 				$('.logoBkg').animate({opacity:'0.5'},800);
		 			}		 			
		 		},500);
		 		$('.page3').removeClass('animated fadeInDown');
		    },
	    onSlideChangeStart: function(swiper){	    	
		      if(swiper.activeIndex==1){

		      }else{
		      	player.pause();
		      	$("#videoplay").show();
		      }
		 	var index = swiper.activeIndex;
		 	if(index==0)
		 	{
		 		$('.page1').eq(0).addClass('animated bounceInLeft');
		 		$('.page1').eq(1).addClass('animated bounceInRight');
		 		$('.page1').eq(2).addClass('animated bounceInLeft');
		 		$('.page1').eq(3).addClass('animated rotateIn');
		 		fade = setInterval(function(){
		 			if(fadeCheck==true)
		 			{
		 				fadeCheck=false;
		 				$('.logoBkg').animate({opacity:'1.0'},800);
		 			}else{
		 				fadeCheck=true;
		 				$('.logoBkg').animate({opacity:'0.5'},800);
		 			}		 			
		 		},500);
		 		$('.page3').removeClass('animated fadeInDown');
		 		$('.page41').removeClass('animated fadeInDown');
		 		$('.page42').eq(0).removeClass('animated bounceInLeft');
		 		$('.page42').eq(1).removeClass('animated bounceInRight');
		 		$('.page43').eq(0).removeClass('animated bounceInRight');
		 		$('.page43').eq(1).removeClass('animated bounceInRight');
		 		$('.page43').eq(2).removeClass('animated bounceInRight');
		 		$('.page43').eq(3).removeClass('animated bounceInLeft');
		 		$('.page43').eq(4).removeClass('animated bounceInLeft');
		 		$('.page43').eq(5).removeClass('animated bounceInRight');
		 		$('.page43').eq(6).removeClass('animated bounceInRight');
		 		$('.page44').eq(0).removeClass('animated fadeInUp');
		 		$('.page45').eq(0).removeClass('animated fadeIn');
		 		$('.page5').eq(0).removeClass('animated bounceInLeft');
		 		$('.page5').eq(1).removeClass('animated bounceInRight');
		 	}else if(index==2){
		 		//3
		 		$('.page3').addClass('animated fadeInDown');
		 		//1
		 		clearInterval(fade);
		 		fadeCheck=true;
		 		$('.page1').eq(0).removeClass('animated bounceInLeft');
		 		$('.page1').eq(1).removeClass('animated bounceInRight');
		 		$('.page1').eq(2).removeClass('animated bounceInLeft');
		 		$('.page1').eq(3).removeClass('animated rotateIn');
		 		$('.page41').removeClass('animated fadeInDown');
		 		$('.page42').eq(0).removeClass('animated bounceInLeft');
		 		$('.page42').eq(1).removeClass('animated bounceInRight');
		 		$('.page43').eq(0).removeClass('animated bounceInRight');
		 		$('.page43').eq(1).removeClass('animated bounceInRight');
		 		$('.page43').eq(2).removeClass('animated bounceInRight');
		 		$('.page43').eq(3).removeClass('animated bounceInLeft');
		 		$('.page43').eq(4).removeClass('animated bounceInLeft');
		 		$('.page43').eq(5).removeClass('animated bounceInRight');
		 		$('.page43').eq(6).removeClass('animated bounceInRight');
		 		$('.page44').eq(0).removeClass('animated fadeInUp');
		 		$('.page45').eq(0).removeClass('animated fadeIn');
		 		$('.page5').eq(0).removeClass('animated bounceInLeft');
		 		$('.page5').eq(1).removeClass('animated bounceInRight');
		 	}
		 	else if(index==3)
		 	{
		 		$('.page41').addClass('animated fadeInDown');
		 		$('.page42').eq(0).addClass('animated bounceInLeft');
		 		$('.page42').eq(1).addClass('animated bounceInRight');
		 		$('.page43').eq(0).addClass('animated bounceInRight');
		 		$('.page43').eq(1).addClass('animated bounceInRight');
		 		$('.page43').eq(2).addClass('animated bounceInRight');
		 		$('.page43').eq(3).addClass('animated bounceInLeft');
		 		$('.page43').eq(4).addClass('animated bounceInLeft');
		 		$('.page43').eq(5).addClass('animated bounceInRight');
		 		$('.page43').eq(6).addClass('animated bounceInRight');
		 		$('.page44').eq(0).addClass('animated fadeInUp');
		 		$('.page45').eq(0).addClass('animated fadeIn');
		 		clearInterval(fade);
		 		fadeCheck=true;
		 		$('.page1').eq(0).removeClass('animated bounceInLeft');
		 		$('.page1').eq(1).removeClass('animated bounceInRight');
		 		$('.page1').eq(2).removeClass('animated bounceInLeft');
		 		$('.page1').eq(3).removeClass('animated rotateIn');
		 		$('.page3').removeClass('animated fadeInDown');
		 		$('.page5').eq(0).removeClass('animated bounceInLeft');
		 		$('.page5').eq(1).removeClass('animated bounceInRight');
		 	}else if(index==4){
		 		$('.page5').eq(0).addClass('animated bounceInLeft');
		 		$('.page5').eq(1).addClass('animated bounceInRight');
		 		$('.page3').removeClass('animated fadeInDown');
		 		clearInterval(fade);
		 		fadeCheck=true;
		 		$('.page1').eq(0).removeClass('animated bounceInLeft');
		 		$('.page1').eq(1).removeClass('animated bounceInRight');
		 		$('.page1').eq(2).removeClass('animated bounceInLeft');
		 		$('.page1').eq(3).removeClass('animated rotateIn');
		 		$('.page41').removeClass('animated fadeInDown');
		 		$('.page42').eq(0).removeClass('animated bounceInLeft');
		 		$('.page42').eq(1).removeClass('animated bounceInRight');
		 		$('.page43').eq(0).removeClass('animated bounceInRight');
		 		$('.page43').eq(1).removeClass('animated bounceInRight');
		 		$('.page43').eq(2).removeClass('animated bounceInRight');
		 		$('.page43').eq(3).removeClass('animated bounceInLeft');
		 		$('.page43').eq(4).removeClass('animated bounceInLeft');
		 		$('.page43').eq(5).removeClass('animated bounceInRight');
		 		$('.page43').eq(6).removeClass('animated bounceInRight');
		 		$('.page44').eq(0).removeClass('animated fadeInUp');
		 		$('.page45').eq(0).removeClass('animated fadeIn');
		 		
		 	}else{
		 		clearInterval(fade);
		 		fadeCheck=true;
		 		$('.page1').eq(0).removeClass('animated bounceInLeft');
		 		$('.page1').eq(1).removeClass('animated bounceInRight');
		 		$('.page1').eq(2).removeClass('animated bounceInLeft');
		 		$('.page1').eq(3).removeClass('animated rotateIn');
		 		$('.page3').removeClass('animated fadeInDown');
		 		$('.page41').removeClass('animated fadeInDown');
		 		$('.page42').eq(0).removeClass('animated bounceInLeft');
		 		$('.page42').eq(1).removeClass('animated bounceInRight');
		 		$('.page43').eq(0).removeClass('animated bounceInRight');
		 		$('.page43').eq(1).removeClass('animated bounceInRight');
		 		$('.page43').eq(2).removeClass('animated bounceInRight');
		 		$('.page43').eq(3).removeClass('animated bounceInLeft');
		 		$('.page43').eq(4).removeClass('animated bounceInLeft');
		 		$('.page43').eq(5).removeClass('animated bounceInRight');
		 		$('.page43').eq(6).removeClass('animated bounceInRight');
		 		$('.page44').eq(0).removeClass('animated fadeInUp');
		 		$('.page45').eq(0).removeClass('animated fadeIn');
		 		$('.page5').eq(0).removeClass('animated bounceInLeft');
		 		$('.page5').eq(1).removeClass('animated bounceInRight');
		 	}
		}
	});
	player.addEventListener('play',function(){
		$('#videoplay').hide();
	});
	player.addEventListener('pause',function(){
		$('#videoplay').show();
	});
	player.addEventListener('ended',function(){
		$('#videoplay').show();
	});
	//播放视频
	$('#videoplay img').on('touchstart',function(event){
		$('#videoplay').hide();
		player.play();
	});
	//获取焦点
	$('.person ul li input').on('touchstart',function(event){
		$(this).focus();
		var e = event||window.event;
		e.stopPropagation();
	});
	$('#check').on('touchstart',function(){
		if($(this).attr('check')=='true')
		{
			$(this).find('img').css('opacity','0');
			$(this).siblings('div').css('color','#333333');
			$(this).attr('check','false');
		}else{
			$(this).find('img').css('opacity','1.0');
			$(this).siblings('div').css('color','#535353');
			$(this).attr('check','true');
		}	
	});
	//开始箭头向下动画
	$('.up').animate({bottom:'5%',opacity:'0'},600,function(){
		$(this).css('opacity',1);
		$(this).css('bottom','8%');
	});
	var uptime = setInterval(function(){
		$('.up').animate({bottom:'5%',opacity:'0'},600,function(){
			$(this).css('opacity',1);
			$(this).css('bottom','8%');
		});
	},600);
	$('.up img').on('touchstart',function(){
		swiper.slideNext();
	});
	var nexttime = setInterval(function(){
		$('.next').animate({bottom:'2.5%',opacity:'0'},600,function(){
			$(this).css('opacity',1);
			$(this).css('bottom','5%');
		});
	},600);
	$('.next img').on('touchstart',function(){
		swiper.slideNext();
	});
	//轮播图
	var banner = new Swiper('.swiper-container-banner', {
	    direction: 'horizontal',
	    autoplay : 5000,
	    loop:true,
	    autoplayDisableOnInteraction : false,
	    pagination: '.swiper-pagination',  
	    onSlideChangeStart: function(swiper){
	    	var index = swiper.activeIndex%3;
	    	if(index==1)
	    	{
	    		$('.bt1').addClass('animated rotateIn');
		    	$('.bt2').removeClass('animated bounceInDown');
		    	$('.bt3').removeClass('animated bounceInUp');
	    	}else if(index==2)
	    	{
	    		$('.bt2').addClass('animated bounceInDown');
	    		$('.bt1').removeClass('animated rotateIn');
		    	$('.bt3').removeClass('animated bounceInUp');
	    	}else{
	    		$('.bt3').addClass('animated bounceInUp');
	    		$('.bt1').removeClass('animated rotateIn');
		    	$('.bt2').removeClass('animated bounceInDown');
	    	}
	    	
	    }
	});
//	$('.bannerBottom').height(($(window).innerHeight()-$('.swiper-container-banner').height()));
	$('#rightnow').on('touchstart',function(){
		swiper.slideNext();
	});
	$('.person ul').on('touchstart',function(event){
		var e = event||window.event;
		e.stopPropagation();
		$('.person ul li input').blur();
	});
}
