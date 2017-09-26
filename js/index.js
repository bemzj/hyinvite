//预加载的图片
var loadImg = [
	{path:'img/logo.png',type:'img',name:'logo'},
	{path:'img/loadBkg.jpg',type:'img',name:'loadBkg'}
]
//加载的图片
var gameImg = [
	{path:'img/logo.png',type:'img',name:'logo'},
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
//开始
function gameStart(){
	backLayer.remove();
//	$('#load').remove();
	$('#mainContent').show();//上下拨动
	var swiper = new Swiper('.swiper-container-main', {
	    direction: 'vertical'
	});
	$('.person ul li input').on('touchstart',function(){
		$(this).focus();
	});
	$('.person ul li select').on('touchstart',function(){
		$(this).focus();
		document.getElementById("s").size=document.getElementById("s").options.length;
	});
}
