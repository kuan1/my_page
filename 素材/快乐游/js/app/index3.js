
var React = require('react');
var $ = require('jquery')
var late = 0;
var panduan;
var run;
var keswid;
var wid;
var _left;
var _width;
var _read;

var Show = React.createClass({
	getInitialState:function(){
		return{
			biaoti:'我在美国玩你妹——记美东曦34天',
			topa:'topa1',
			arr:[{"width":'340px',"height":"100%","time1":'09:32',"love":'9',"text":"2"}],
			imgsrc:'img/kl.jpg'
			
		}
	},
	fanhui:function(){
		//console.log(123456)
		this.props.fanhui()
	},
	render:function(){
		var _this = this	
 		var scrollFunc=function(e){	
 			panduan = $("#show").css('transform')
			panduan = parseInt((panduan.split(",")[4]))
			if(panduan == 0){		
		    e=e || window.event;   
		    run = _this.refs.tran
		    keswid = document.documentElement.clientWidth
			keswid = parseInt(keswid)
			wid = document.defaultView.getComputedStyle(run, null).width;
			wid = parseInt(wid)
	      	console.log(e.wheelDelta)
	      	if(e.wheelDelta>0){
	      		if((-late) > 60) {
					run.style.transition = "none"
					run.style.transform = "translate(" + (late + 60) + "px)";
				} else {
					run.style.transition = "none"
					run.style.transform = "translate(0)";
				}
				late = document.defaultView.getComputedStyle(run, null).transform;	
				//转换成数字
				late = parseInt((late.split(",")[4]))
				return
	      	}else{
	      		if((wid + late - keswid) > 60) {
					run.style.transition = "none"
					run.style.transform = "translate(" + (late - 60) + "px)";
				} else {
					run.style.transition = 'none'
					run.style.transform = "translate(" + -(wid - keswid) + "px)";
				}
				late = document.defaultView.getComputedStyle(run, null).transform;	
				//转换成数字
				late = parseInt((late.split(",")[4]))
				return	
	      	}
	      
  		}
		}
 				/*注册事件*/
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari
//判断结束
		//判断鼠标滚轮上下
			
		window.document.onkeydown = function(e){
			
			panduan = $("#show").css('transform')
			panduan = parseInt((panduan.split(",")[4]))
			if(panduan == 0){							
			e = e || window.event;
			run = _this.refs.tran
			
//  获取属性  console.log(document.defaultView.getComputedStyle(run, null).transform)
//获取可视宽度
			keswid = document.documentElement.clientWidth
			keswid = parseInt(keswid)
//获取总宽度
			wid = document.defaultView.getComputedStyle(run, null).width;
			wid = parseInt(wid)
//查看按键
//			console.log(e.keyCode)
			
			var xx = e.keyCode
			if(xx == 38) { //后退！！！！！！！！！！	
				if((-late) > 60) {
					run.style.transition = "none"
					run.style.transform = "translate(" + (late + 60) + "px)";
				} else {
					run.style.transition = "none"
					run.style.transform = "translate(0)";
				}
				late = document.defaultView.getComputedStyle(run, null).transform;	
				//转换成数字
				late = parseInt((late.split(",")[4]))
				return
			}
			if(xx == 40) { //前进！！！！！！！！！！！
				if((wid + late - keswid) > 60) {
					run.style.transition = "none"
					run.style.transform = "translate(" + (late - 60) + "px)";
				} else {
					run.style.transition = 'none'
					run.style.transform = "translate(" + -(wid - keswid) + "px)";
				}
				late = document.defaultView.getComputedStyle(run, null).transform;	
				//转换成数字
				late = parseInt((late.split(",")[4]))
				return
			}	
				              
			if(xx == 32 || xx == 39) {	//空格			
				for(var i=0;i<$("#conbox>div").length;i++){
					//距离可视窗口左边的距离
					_left = parseInt($("#conbox>div").eq(i).offset().left);
					//获取元素本身宽度
					_width = parseInt($("#conbox>div").eq(i).width());
					//获取距离父元素最左端的距离
					_read = parseInt($("#conbox>div").eq(i).position().left);	
					//最后一个
					var num = $("#conbox>div").length-1					
					var _end = parseInt($("#conbox>div").eq(num).position().left);
					
					if((_left<keswid) && (_width+_left>keswid)){
					console.log(wid-_width-20  +"=="+ _read)
						if(((-late)+keswid+keswid) > wid){
							run.style.transform = "translate(" + -(wid - keswid) + "px)";	
							run.style.transition = "all 0.3s"
							late = -(wid - keswid)
							return
						}else{
							run.style.transform = "translate(" + (-_read) + "px)";	
							run.style.transition = "all 0.3s"
							late = -_read
							return
						}
						
					}					
				}								
			}
			if(xx == 37) {	//向前翻页			
				for(var i=0;i<$("#conbox>div").length;i++){
					//距离可视窗口左边的距离
					_left = parseInt($("#conbox>div").eq(i).offset().left);
					//获取元素本身宽度
					_width = parseInt($("#conbox>div").eq(i).innerWidth());
					//获取距离父元素最左端的距离
					_read = parseInt($("#conbox>div").eq(i).position().left);	
					console.log(_left+"======"+_width +"========"+ i)
					if((_left<0) && (_left+_width+2>0)){
						run.style.transform = "translate(" + (-_read) + "px)";	
						run.style.transition = "all 0.3s"
						late = -_read
						return
					}
				}								
			}
	}
//获取偏移距离 为什么放到后面获取呢，因为第一次未定义的  会出错
//console.log(late);			
//测试  字符串截取不可用 测试截取
//var late = lat.substring(('matrix(1, 0, 0, 1, ').length,('matrix(1, 0, 0, 1, -654').length)	
//console.log(wid+late-keswid) //总宽度，-移出去距离-可视宽度 = 剩余宽度									
		}
		return(
			
			<div ref="panduan" id="show" className={this.props.classS}>
				{/*头部*/}
				<div style={this.sty.top} >
					<a onClick={this.fanhui} className={this.state.topa} href="#" style={this.sty.topa}>{this.state.biaoti} </a>
					<a style={this.sty.qiqiu} href="#">氢气球旅行App</a>
				</div>
				{/*主体*/}
				
				<div ref="tran" id="conbox" style={this.sty.cont}>
				
					<div style={this.sty.contout2}>
						<span style={this.sty.con2span1}></span>
						<span style={this.sty.con2span2}></span>
						<span style={this.sty.con2span3}>第1天</span>
						<span style={this.sty.con2span4}>2012-06-25 周一</span>
					</div>
					<div style={this.sty.contout3}>
						<span style={this.sty.con3span1}></span>
						<span style={this.sty.con3span2}></span>
						<span style={this.sty.con3span3}>沙发客</span>
						<span style={this.sty.con3span4}>房间0美元</span>
						<span style={this.sty.con3span5}>我的评价:</span>
						<span style={this.sty.con3span6}>住在了一个美国姑娘的家里，他们家的猫</span>
					</div>
					<div style={this.sty.contout}>	
						<div style={this.sty.conbox}>
							<img style={this.sty.conimg} src="img/maomi.jpg"/>
							<div style={this.sty.conboxB}> 
								<span>{this.state.arr[0].time1}</span>
								<span>{this.state.arr[0].love}</span>
								<span>{this.state.arr[0].text}</span>
							</div>
						</div>
					</div>
					<div style={this.sty.contout3}>
						<span style={this.sty.con3span1}></span>
						<span style={this.sty.con3span2}></span>
						<span style={this.sty.con3span3}>国家潇湘博物馆</span>						
					</div>
					<div style={this.sty.contout}>	
						<div style={this.sty.conbox}>
							<img style={this.sty.conimg} src="img/bwg.jpg"/>
							<div style={this.sty.conboxB}> 
								<span>{this.state.arr[0].time1}</span>
								<span>{this.state.arr[0].love}</span>
								<span>{this.state.arr[0].text}</span>
							</div>
						</div>
					</div>																					
					<div style={this.sty.contout3}>
							<span style={this.sty.con3span1}></span>
							<span style={this.sty.con3span2}></span>
							<span style={this.sty.con3span3}>华盛顿</span>	
							<span style={this.sty.con3span3}>Washington DC</span>	
					</div>
					<div style={this.sty.contout}>	
						<div style={this.sty.conbox}>
							<img style={this.sty.conimg} src="img/hsd.jpg"/>
							<div style={this.sty.conboxB}> 
								<span>{this.state.arr[0].time1}</span>
								<span>{this.state.arr[0].love}</span>
								<span>{this.state.arr[0].text}</span>
							</div>
						</div>
					</div>	
					<div style={this.sty.contout}>	
						<div style={this.sty.conbox}>
							<img style={this.sty.conimg} src="img/deng.jpg"/>
							<div style={this.sty.conboxB}> 
								<span>{this.state.arr[0].time1}</span>
								<span>{this.state.arr[0].love}</span>
								<span>{this.state.arr[0].text}</span>
							</div>
						</div>
					</div>	
					<div style={this.sty.contout2}>
						<span style={this.sty.con2span1}></span>
						<span style={this.sty.con2span2}></span>
						<span style={this.sty.con2span3}>第2天</span>
						<span style={this.sty.con2span4}>2012-06-26 周二</span>
					</div>
					<div style={this.sty.contout3}>
							<span style={this.sty.con3span1}></span>
							<span style={this.sty.con3span2}></span>
							<span style={this.sty.con3span3}>国家雕刻与印刷局</span>		
					</div>
					<div style={this.sty.contout}>	
						<div style={this.sty.conbox}>
							<img style={this.sty.conimg} src="img/meijin.jpg"/>
							<div style={this.sty.conboxB}> 
								<span>{this.state.arr[0].time1}</span>
								<span>{this.state.arr[0].love}</span>
								<span>{this.state.arr[0].text}</span>
							</div>
						</div>
					</div>	
					<div style={this.sty.contout3}>
							<span style={this.sty.con3span1}></span>
							<span style={this.sty.con3span2}></span>
							<span style={this.sty.con3span3}>自然博物馆</span>		
					</div>
					<div style={this.sty.contout}>	
						<div style={this.sty.conbox}>
							<img style={this.sty.conimg} src="img/kl.jpg"/>
							<div style={this.sty.conboxB}> 
								<span>{this.state.arr[0].time1}</span>
								<span>{this.state.arr[0].love}</span>
								<span>{this.state.arr[0].text}</span>
							</div>
						</div>
					</div>	
					<div style={this.sty.contout3}>
							<span style={this.sty.con3span1}></span>
							
							<span style={this.sty.con3span3}>THE END</span>	
							<span style={this.sty.con3span3}>蝉游记</span>	
					</div>
				</div>	
				{/*底部*/}
					<div style={this.sty.dibu}>
					</div>
			</div>
			
		)
	}
})
Show.prototype.sty = {
	//头部
	top:{width:'100vw',height:'90px',background:'rgb(115,115,115)',position:'relative',paddingTop:'10px'},
	topa:{height:'34px',lineHeight:'34px',color:'#fff',fontSize:'16px',padding:'0 10px 0 34px',
	display:'inline-block',borderRadius:'3px'}, //返回的a标签
	qiqiu:{height:'34px',fontSize:'16px',color:'#fff',lineHeight:'34px',display:'inline-block',
	padding:'0  15px',borderRadius:'3px',marginLeft:'15px',background:'#53C4C9'},
	//主体
	cont:{width:'1100.2vh',overflowX:'auto',position:'absolute',top:'100px',boxSizing:'border-box',
		bottom:'0px',height:'auto',boxSizing:'border-box',paddingBottom:'50px',
	},
			//下部分 第一种盒子
			contout:{background:'#fff',height:'100%',borderRight:'1px #ccc solid',
			width:'110vh',float:'left',position:'relative',boxSizing:'border-box',},			
			//图片框
			conbox:{width:'100%',height:'auto',position:'absolute',top:'0',bottom:'30px'
			,background:'#fff',boxSizing:'border-box',padding:'10px 10px 0px 10px'},
			conboxB:{height:'35px',lineHeight:'35px',color:'#000',fontSize:'18px',width:'100%'},
			//图片
			conimg:{border:'none',width:'100%',height:'100%',padding:'0',margin:'0'},	
			//第二种盒子
			contout2:{background:'#fff',height:'100%',borderRight:'1px #ccc solid',
			width:'55vh',float:'left',position:'relative',padding:'35px',boxSizing:'border-box',},
			//头部的流出的空间
			con2span1:{width:'100%',height:'30%',display:'block'},
			con2span2:{width:'18%',background:'url("img/youji.png") no-repeat',
			height:'15%',display:'block',margin:'0 auto'},
			con2span3:{width:'100%',height:'12%',display:'block',
			fontSize:'42px',textAlign:'center',color:'rgb(76,132,132)',marginTop:'5%'},
			con2span4:{width:'100%',display:'block',
			fontSize:'16px',textAlign:'center',color:'rgb(76,132,132)'},
			//第三种盒子
			contout3:{background:'#fff',height:'100%',borderRight:'1px #ccc solid',
			width:'55vh',float:'left',position:'relative',padding:'35px',boxSizing:'border-box',},
				//toubu
			con3span1:{width:'100%',height:'30%',display:'block'},
			con3span2:{width:'18%',background:'url("img/youji.png") no-repeat',
			height:'15%',display:'block',margin:'0 auto',backgroundPosition:'0 -84px'},
			con3span3:{width:'100%',height:'10%',display:'block',
			fontSize:'20px',textAlign:'center',},
			con3span4:{width:'100%',display:'block',
			fontSize:'16px',textAlign:'center',color:'rgb(76,132,132)'},
			con3span5:{width:'100%',display:'block',
			fontSize:'16px',textALign:'left'},
			con3span6:{width:'100%',display:'block',
			fontSize:'16px',textAlign:'center',},
			//底部
			dibu:{position:'absolute',bottom:'0',width:'100vw',height:'50px',background:'rgba(0,0,0,0.4)',}
}
module.exports = Show;

/*
 * 
 * 
 * contout:{height:'100%',borderRight:'1px #ccc solid',
		width:'120vh',float:'left',paddingBottom:'50px',boxSizing:'border-box'
	},	//大图框		
	conbox:{height:'auto',position:'absolute',top:'0',bottom:'40px',width:'auto',
	background:'#fff',padding:'10px 10px 0 10px'},
		//天数
	day:{width:'60vh',padding:'5vh',height:'100%',boxSizinng:'boder-box',background:'#f0f'
	,borderRight:'1px #ccc solid',float:'left'},
	//评论
	conboxB:{height:'35px',lineHeight:'35px',background:'#fff',color:'#000',fontSize:'18px'},
		{
						this.state.arr.map(function(item,ind){
							return(
								<div style={this.sty.conbox}>
									<img style={{width:item.width,height:'100%'}} src={this.state.imgsrc}/>
								</div>
							)
						})
					}
				
 */