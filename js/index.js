//预加载的图片
var loadImg = [
	{path:'img/logo.png',type:'img',name:'logo'},
	{path:'img/loadBkg.jpg',type:'img',name:'loadBkg'},
	{path:'img/music.png',type:'img',name:'music'},
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
	{path:'img/bt001.png',type:'img',name:'bt001'},
	{path:'img/bt002.png',type:'img',name:'bt002'},
	{path:'img/bt003.png',type:'img',name:'bt003'},
	{path:'img/bt004.png',type:'img',name:'bt004'},
	{path:'img/bt005.png',type:'img',name:'bt005'},
	{path:'img/bt006.png',type:'img',name:'bt006'},
	{path:'img/bw001.png',type:'img',name:'bw001'},
	{path:'img/bw002.png',type:'img',name:'bw002'},
	{path:'img/bw003.png',type:'img',name:'bw003'},
	{path:'img/bw004.png',type:'img',name:'bw004'},
	{path:'img/bw005.png',type:'img',name:'bw005'},
	{path:'img/bw006.png',type:'img',name:'bw006'},
	{path:'img/bp001.png',type:'img',name:'bp001'},
	{path:'img/bp002.png',type:'img',name:'bp002'},
	{path:'img/bp003.png',type:'img',name:'bp003'},
	{path:'img/bp004.png',type:'img',name:'bp004'},
	{path:'img/bp005.png',type:'img',name:'bp005'},
	{path:'img/bp006.png',type:'img',name:'bp006'},
	{path:'img/t01.png',type:'img',name:'t01'},
	{path:'img/t02.png',type:'img',name:'t02'},
	{path:'img/t03.png',type:'img',name:'t03'},
	{path:'img/t04.png',type:'img',name:'t04'},
	{path:'img/tp01.png',type:'img',name:'tp01'},
	{path:'img/tp02.png',type:'img',name:'tp02'},
	{path:'img/tp03.png',type:'img',name:'tp03'},
	{path:'img/tp04.png',type:'img',name:'tp04'},
	{path:'img/tp05.png',type:'img',name:'tp05'},
	{path:'img/tp06.png',type:'img',name:'tp06'},
	{path:'img/lb.png',type:'img',name:'lb'},
	{path:'img/lr.png',type:'img',name:'lr'},
	{path:'img/music.png',type:'img',name:'music'},
	{path:'img/music1.png',type:'img',name:'music1'},
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
	LLoadManage.load(gameImg,loading,opening);//读取加载页面背景图片
	
	//添加音乐
	var music = new musicBtn(15,LGlobal.height-60,0.75,0.75,result['music']);
	backLayer.addChild(music);
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
function bigAndSmall(tween,x,y,time,scales,delayTime,loops){
	var bigBeforeX = tween.x;
	var bigBeforeY = tween.y;
	var bigAfterX = tween.x-tween.getWidth()*scales/x;
	var bigAfterY = tween.y-tween.getHeight()*scales/y;
	return LTweenLite.to(tween,time/2,{loop:loops,delay:delayTime,x:bigAfterX,y:bigAfterY,scaleX:(1+scales),scaleY:(1+scales)})

}
function opening(result){
	backLayer.removeAllChild();
	backLayer.die();
	backLayer.removeAllEventListener();
	//背景
	var backimg = new LBitmap(new LBitmapData(result['loadBkg']));
	backLayer.addChild(backimg);
	
	var t01 = new LBitmap(new LBitmapData(result['t01']));
	backLayer.addChild(t01);
	t01.x = 138;
	t01.y = 328;
	t01.alpha = 0;
	
	var t02 = new LBitmap(new LBitmapData(result['t02']));
	backLayer.addChild(t02);
	t02.x = 123;
	t02.y = 328;
	t02.alpha = 0;
	
	var t03 = new LBitmap(new LBitmapData(result['t03']));
	backLayer.addChild(t03);
	t03.x = 138;
	t03.y = 328;
	t03.alpha = 0;
	var t041 = new LBitmap(new LBitmapData(result['t04']));
	backLayer.addChild(t041);
	t041.x = 123;
	t041.y = 328;
	t041.visible = false;
	
	var t0411 = new LBitmap(new LBitmapData(result['t04']));
	backLayer.addChild(t0411);
	t0411.x = 123;
	t0411.y = 328;
	t0411.visible = false;
	var t0412 = new LBitmap(new LBitmapData(result['t04']));
	backLayer.addChild(t0412);
	t0412.x = 123;
	t0412.y = 328;
	t0412.visible = false;
	var t042 = new LBitmap(new LBitmapData(result['t04']));
	backLayer.addChild(t042);
	t042.x = 123;
	t042.y = 328;
	t042.visible = false;
	
	var t043 = new LBitmap(new LBitmapData(result['t04']));
	backLayer.addChild(t043);
	t043.x = 123;
	t043.y = 328;
	t043.visible = false;
	
	var t04 = new LBitmap(new LBitmapData(result['t04']));
	backLayer.addChild(t04);
	t04.x = 123;
	t04.y = 328;
	t04.visible = false;
	var rule = true;
	var time = 0;
	var tween;
	
	
	var tp01 = new LBitmap(new LBitmapData(result['tp01']));
	backLayer.addChild(tp01);
	tp01.x = 55;
	tp01.y = 555;
	tp01.alpha = 0;
	var tp02 = new LBitmap(new LBitmapData(result['tp02']));
	backLayer.addChild(tp02);
	tp02.x = 54;
	tp02.y = 581;
	tp02.alpha = 0;
	var tp03 = new LBitmap(new LBitmapData(result['tp03']));
	backLayer.addChild(tp03);
	tp03.x = 46.5;
	tp03.y = 606;
	tp03.alpha = 0;
	var tp04 = new LBitmap(new LBitmapData(result['tp04']));
	backLayer.addChild(tp04);
	tp04.x = 46.8;
	tp04.y = 633;
	tp04.alpha = 0;
	var tp05 = new LBitmap(new LBitmapData(result['tp05']));
	backLayer.addChild(tp05);
	tp05.x = 46.5;
	tp05.y = 555;
	tp05.alpha = 0;
	var tp06 = new LBitmap(new LBitmapData(result['tp06']));
	backLayer.addChild(tp06);
	tp06.x = 141;
	tp06.y = 555;
	tp06.alpha = 0;
	//背景
	var lr = new LBitmap(new LBitmapData(result['lr']));
	backLayer.addChild(lr);
	lr.x = -750;
	var lb = new LBitmap(new LBitmapData(result['lb']));
	backLayer.addChild(lb);
	lb.x = 750;
	//添加音乐
	var music = new musicBtn(688,15,0.75,0.75,result['music']);
	backLayer.addChild(music);
	LTweenLite.to(t01,1.0,{alpha:1.0}).to(t02,1.0,{alpha:1.0}).to(t03,1.0,{alpha:1.0,onComplete:function(){
		t01.visible=false;
		tween = setInterval(function(){
			time++;
			if(rule==true)
			{
				rule=false;
				t02.visible=false;
				t03.visible=true;
			}else{
				rule=true;
				t03.visible=false;
				t02.visible=true;
			}
			if(time==30)
			{
				clearInterval(tween);
				t02.visible=false;
				t03.visible=false;
				t0411.visible=true;
				t0412.visible=true;
				t0411.alpha=0;
				t0412.alpha=0;
				t041.visible=true;
				t042.visible=true;
				t043.visible=true;
				t04.visible=true;
				bigAndSmall(t04,2,2,2.5,15,0,false);
				LTweenLite.to(t04,1.5,{alpha:0});
				bigAndSmall(t043,2,2,2.5,15,0.5,false);
				LTweenLite.to(t043,1.5,{alpha:0});
				bigAndSmall(t042,2,2,2.5,15,1.0,false);
				LTweenLite.to(t042,1.5,{alpha:0,onComplete:function(){
					bigAndSmall(t041,2,2,1.8,-0.5,0,false);
					bigAndSmall(t0411,2,2,1.8,-0.5,0,false);
					bigAndSmall(t0412,2,2,1.8,-0.5,0,false);
					setTimeout(function(){
						LTweenLite.to(t041,1.0,{alpha:0,onStart:function(){
							LTweenLite.to(t0411,1.0,{alpha:1.0,x:80});
							LTweenLite.to(t0412,1.0,{alpha:1.0,x:400,onComplete:function(){
								LTweenLite.to(lr,1.0,{x:0});
								
								LTweenLite.to(lb,1.0,{x:0,onComplete:function(){
									t0411.visible=false;
									t0412.visible=false;
									LTweenLite.to(lr,1.5,{x:-750,delay:0.5});
									LTweenLite.to(lb,1.5,{x:750,delay:0.5});
									LTweenLite.to(tp01,2.0,{alpha:1,delay:0.8});
									LTweenLite.to(tp02,2.0,{alpha:1,delay:1.0});
									LTweenLite.to(tp03,2.0,{alpha:1,delay:1.2});
									LTweenLite.to(tp04,2.0,{alpha:1,delay:1.4,onComplete:function(){
										LTweenLite.to(tp01,0.3,{delay:0,x:-650});
										LTweenLite.to(tp02,0.3,{delay:0.1,x:750});
										LTweenLite.to(tp03,0.3,{delay:0.2,x:-650});
										LTweenLite.to(tp04,0.3,{delay:0.3,x:750});
										LTweenLite.to(tp05,2.0,{delay:0.8,alpha:1,onComplete:function(){
											
											LTweenLite.to(lr,0.6,{x:0,delay:0});
											LTweenLite.to(lb,0.6,{x:0,delay:0,onComplete:function(){
												tp05.visible = false;
												tp06.alpha = 1.0;
												LTweenLite.to(lr,1.5,{x:-750,delay:0.5});
												LTweenLite.to(lb,1.5,{x:750,delay:0.5,onComplete:function(){
													LTweenLite.to(backLayer,1,{alpha:0,delay:0.5});
													setTimeout(function(){
														gameStart();
													},500);
												}});
												
											}});
										}});
									}});
								}});
							}});
						}});
					},1500);
				}});
			}
		},50);
	}});
}
//开始
function gameStart(){	
	$('#mainContent').fadeIn(1000,function(){
		backLayer.remove();
		$('#load').remove();
	});
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
//	    autoplay : 5000,
	    loop:true,
	    initialSlide :0,
	    autoplayDisableOnInteraction : false,
	    pagination: '.swiper-pagination', 
	    onSlideChangeStart: function(swiper){
	    	var bttime3;
	    	var bwtime;
	    	var bptime;
	    	var index = swiper.activeIndex%3;
	    	if(index==1)
	    	{
	    		
		    	//1
		    	clearInterval(bwtime);
		    	$('.bw001').removeClass('animated bounceInDown');
	    		$('.bw002').removeClass('animated bounceInRight');
	    		$('.bw003').removeClass('animated bounceInLeft');
	    		$('.bw004').removeClass('animated bounceInRight');
	    		$('.bw005').removeClass('animated bounceInLeft');
	    		$('.bw006').removeClass('animated bounceInUp');
	    		$('.bw002').stop().animate({left:'18%'},10);
	    		$('.bw001').stop().animate({left:'32.26%'},10);
	    		$('.bw003').stop().animate({left:'18.4%'},10);
	    		$('.bw004').stop().animate({left:'19.6%'},10);	    		
	    		$('.bw006').stop().animate({left:'13.2%'},10);
	    		$('.bw005').stop().animate({left:'14%'},10);

	    		//2
		    	$('.bp001').addClass('animated bounceInDown');
	    		$('.bp002').addClass('animated bounceInRight');
	    		$('.bp003').addClass('animated bounceInLeft');
	    		$('.bp004').addClass('animated bounceInRight');
	    		$('.bp005').addClass('animated bounceInLeft');
	    		$('.bp006').addClass('animated bounceInUp');
	    		bptime = setInterval(function(){
	    			$('.bp002').stop().animate({left:'26.1%'},150,function(){
	    				$(this).stop().animate({left:'25.6%'},150);
	    			});
	    			$('.bp004').stop().animate({left:'20.2%'},150,function(){
	    				$(this).stop().animate({left:'19.7%'},150);
	    			});
	    			$('.bp006').stop().animate({left:'19.3%'},150,function(){
	    				$(this).stop().animate({left:'18.8%'},150);
	    			});
	    			$('.bp001').stop().animate({left:'25.1%'},150,function(){
	    				$(this).stop().animate({left:'25.6%'},150);
	    			});
	    			$('.bp003').stop().animate({left:'19.5%'},150,function(){
	    				$(this).stop().animate({left:'20%'},150);
	    			});
	    			$('.bp005').stop().animate({left:'19.63%'},150,function(){
	    				$(this).stop().animate({left:'20.13%'},150);
	    			});
	    		},1000);
		    	//3
		    	$('.bt001').removeClass('animated bounceInRight');
	    		$('.bt002').removeClass('animated bounceInLeft');
	    		$('.bt003').removeClass('animated bounceInRight');
	    		$('.bt004').removeClass('animated bounceInLeft');
	    		$('.bt005').removeClass('animated bounceInRight');
	    		$('.bt006').removeClass('animated bounceInLeft');
	    		clearInterval(bttime3);
	    		imgChoice = true;
	    		$('.bt3').css('opacity','0');
	    		$('.bt001').stop().animate({left:'20.4%'},10);
				$('.bt002').stop().animate({left:'20.4%'},10);
				$('.bt003').stop().animate({left:'7.06%'},10);
				$('.bt004').stop().animate({left:'7.06%'},10);
				$('.bt005').stop().animate({left:'9.8%'},10);
				$('.bt006').stop().animate({left:'9.3%'},10);
				
	    	}else if(index==2)
	    	{
	    		//1
		    	$('.bw001').addClass('animated bounceInDown');
	    		$('.bw002').addClass('animated bounceInRight');
	    		$('.bw003').addClass('animated bounceInLeft');
	    		$('.bw004').addClass('animated bounceInRight');
	    		$('.bw005').addClass('animated bounceInLeft');
	    		$('.bw006').addClass('animated bounceInUp');
	    		bwtime = setInterval(function(){
	    			$('.bw002').stop().animate({left:'18.5%'},150,function(){
	    				$(this).stop().animate({left:'18%'},150);
	    			});
	    			$('.bw004').stop().animate({left:'20.1%'},150,function(){
	    				$(this).stop().animate({left:'19.6%'},150);
	    			});
	    			$('.bw006').stop().animate({left:'13.7%'},150,function(){
	    				$(this).stop().animate({left:'13.2%'},150);
	    			});
	    			$('.bw001').stop().animate({left:'31.76%'},150,function(){
	    				$(this).stop().animate({left:'32.26%'},150);
	    			});
	    			$('.bw003').stop().animate({left:'17.9%'},150,function(){
	    				$(this).stop().animate({left:'18.4%'},150);
	    			});
	    			$('.bw005').stop().animate({left:'13.5%'},150,function(){
	    				$(this).stop().animate({left:'14%'},150);
	    			});
	    		},1000);
	    		//2
		    	clearInterval(bptime);
		    	$('.bp001').removeClass('animated bounceInDown');
	    		$('.bp002').removeClass('animated bounceInRight');
	    		$('.bp003').removeClass('animated bounceInLeft');
	    		$('.bp004').removeClass('animated bounceInRight');
	    		$('.bp005').removeClass('animated bounceInLeft');
	    		$('.bp006').removeClass('animated bounceInUp');
	    		$('.bp002').stop().animate({left:'25.6%'},10);
	    		$('.bp001').stop().animate({left:'25.6%'},10);
	    		$('.bp003').stop().animate({left:'20%'},10);
	    		$('.bp004').stop().animate({left:'19.7%'},10);	    		
	    		$('.bp006').stop().animate({left:'18.8%'},10);
	    		$('.bp005').stop().animate({left:'20.13%'},10);
		    	//3
		    	$('.bt001').removeClass('animated bounceInRight');
	    		$('.bt002').removeClass('animated bounceInLeft');
	    		$('.bt003').removeClass('animated bounceInRight');
	    		$('.bt004').removeClass('animated bounceInLeft');
	    		$('.bt005').removeClass('animated bounceInRight');
	    		$('.bt006').removeClass('animated bounceInLeft');
	    		clearInterval(bttime3);
	    		imgChoice = true;
	    		$('.bt3').css('opacity','0');
	    		$('.bt001').stop().animate({left:'20.4%'},10);
				$('.bt002').stop().animate({left:'20.4%'},10);
				$('.bt003').stop().animate({left:'7.06%'},10);
				$('.bt004').stop().animate({left:'7.06%'},10);
				$('.bt005').stop().animate({left:'9.8%'},10);
				$('.bt006').stop().animate({left:'9.3%'},10);
				
	    	}else if(index == 0){
				$('.bt3').css('opacity','0');
				$('.bt001').addClass('animated bounceInRight');
	    		$('.bt002').addClass('animated bounceInLeft');
	    		$('.bt003').addClass('animated bounceInRight');
	    		$('.bt004').addClass('animated bounceInLeft');
	    		$('.bt005').addClass('animated bounceInRight');
	    		$('.bt006').addClass('animated bounceInLeft');
	    		var imgChoice = true;
	    		bttime3 = setInterval(function(){
	    			$('.bt001').stop().animate({left:'19.9%'},150,function(){
	    				$(this).stop().animate({left:'20.4%'},150);
	    			});
	    			$('.bt002').stop().animate({left:'20.9%'},150,function(){
	    				$(this).stop().animate({left:'20.4%'},150);
	    			});
	    			$('.bt003').stop().animate({left:'6.51%'},150,function(){
	    				$(this).stop().animate({left:'7.06%'},150);
	    			});
	    			$('.bt004').stop().animate({left:'7.56%'},150,function(){
	    				$(this).stop().animate({left:'7.06%'},150);
	    			});
	    			$('.bt005').eq(4).stop().animate({left:'9.3%'},150,function(){
	    				$(this).stop().animate({left:'9.8%'},150);
	    			});
	    			$('.bt006').stop().animate({left:'9.8%'},150,function(){
	    				$(this).stop().animate({left:'9.3%'},150);
	    			});
	    			$('.bt3').stop().animate({opacity:'1.0'},150,function(){
	    				$(this).stop().animate({opacity:'0'},150);
	    				if(imgChoice==true)
	    				{
	    					imgChoice=false;
	    					$(this).attr('src','img/bt3.png');
	    				}else{
	    					imgChoice=true;
	    					$(this).attr('src','img/bt33.png');
	    				}
	    			});
	    		},1000);
	    		//1
	    		clearInterval(bwtime);
		    	$('.bw001').removeClass('animated bounceInDown');
	    		$('.bw002').removeClass('animated bounceInRight');
	    		$('.bw003').removeClass('animated bounceInLeft');
	    		$('.bw004').removeClass('animated bounceInRight');
	    		$('.bw005').removeClass('animated bounceInLeft');
	    		$('.bw006').removeClass('animated bounceInUp');
	    		$('.bw002').stop().animate({left:'18%'},10);
	    		$('.bw004').stop().animate({left:'19.6%'},10);	    		
	    		$('.bw006').stop().animate({left:'13.2%'},10);	
	    		
	    		//2
		    	clearInterval(bptime);
		    	$('.bp001').removeClass('animated bounceInDown');
	    		$('.bp002').removeClass('animated bounceInRight');
	    		$('.bp003').removeClass('animated bounceInLeft');
	    		$('.bp004').removeClass('animated bounceInRight');
	    		$('.bp005').removeClass('animated bounceInLeft');
	    		$('.bp006').removeClass('animated bounceInUp');
	    		$('.bp002').stop().animate({left:'25.6%'},10);
	    		$('.bp001').stop().animate({left:'25.6%'},10);
	    		$('.bp003').stop().animate({left:'20%'},10);
	    		$('.bp004').stop().animate({left:'19.7%'},10);	    		
	    		$('.bp006').stop().animate({left:'18.8%'},10);
	    		$('.bp005').stop().animate({left:'20.13%'},10);
		    	
	    	}
	    	
	    }
	});
//	$('.bannerBottom').height(($(window).innerHeight()-$('.swiper-container-banner').height()));
	$('#rightnow').on('touchstart',function(){
		swiper.slideNext();
	});
	$('.person').on('touchstart',function(event){
		var e = event||window.event;
		e.stopPropagation();
		$('.person ul li input').blur ();
	});
	//音乐控制
			var rotate = 0;
			var musicRotate;
			var openMusic = true;
			musicRotate = setInterval(function(){
				rotate+=10;
				$('#music').css('transform','rotate('+rotate+'deg)');
			},25);
			$('#music').on('touchstart',function(){
				if(openMusic==true)
				{
					openMusic=false;
					document.getElementById('Jaudio').pause();
					clearInterval(musicRotate);
				}else{
					openMusic=true;
					document.getElementById('Jaudio').play();
						musicRotate = setInterval(function(){
						rotate+=10;
						$('#music').css('transform','rotate('+rotate+'deg)');
					},25);
				}
			});
}
//音乐按钮类
function musicBtn(x,y,sx,sy,name){
	base(this,LSprite,[]);
	var self = this;
	self.x=x;
	self.y=y;
	self.open=true;
	var musicImg = new LBitmap(new LBitmapData(name));
	musicImg.scaleX = sx;
	musicImg.scaleY = sy;
	self.musicplay = LTweenLite.to(musicImg,1.0,{rotate:360,loop:true,onComplete:function(){
		musicImg.rotate = 0;
	}})
	self.addChild(musicImg);
	self.graphics.drawRect(0,'#000000',[0,0,musicImg.getWidth(),musicImg.getHeight()],false,'#ff0000');
	self.addEventListener(LMouseEvent.MOUSE_DOWN,function(){
		if(self.open==true)
		{
			document.getElementById('Jaudio').pause();
			self.open = false;
			self.musicplay.pause();
			
		}else{
			document.getElementById('Jaudio').play();
			self.open = true;
			self.musicplay.resume();
		}
	})
}
