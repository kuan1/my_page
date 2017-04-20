var React = require('react')
var Show = require('./index3.js')
var Dome = React.createClass({
	getInitialState:function(){
		return{
			imgsrc:'',
			title:'梦想实现的地方-马达加斯加',
			zuozeurl:'https://www.baidu.com',
			riqi:'2013年8月10日[6天]',
			zuoze:'by 眼镜蛇斯基',
			classN:'logoh1',
			classS:'show1'
		}
	},
	getDefaultProps:function(){
		return{
			logo:"img/logo.png",
			shifen:'https://www.baidu.com'
		}
	},
	tap:function(){
		var logo = this.refs.logo;		
		this.setState({classN:'logoh1s'});
		this.setState({classS:'show2'})
	},
	tap1:function(){
		
	},
	render:function(){
		var _this = this
		return(
			<div style={this.sty.cont}>
				<h1 ref="logo" className={this.state.classN}> <a className="logo1" href="#"> <img  src={this.props.logo} /> </a> </h1>
				<div style={this.sty.navR}>
					<a className="shifen" style={this.sty.shifen} href={this.props.shifen}>十分钟写游记</a>
					<div style={this.sty.fenxiang}>
						<div style={this.sty.fenxiangR}></div>
						<div id="fenxiangL">
							<a  className="fx1" style={this.sty.Fxa} href="#">分享游记</a>
							<div className="fx2">
								<a style={this.sty.fxa} className="Fxb1" href="#"></a>
								<a style={this.sty.fxa} className="Fxb2" href="#"></a>
								<a style={this.sty.fxa} className="Fxb3" href="#"></a>
							</div>
						</div>						
					</div>
				</div>
				{/*梦想实现的地方*/}	
				<div style={this.sty.bjt}></div>
				<div style={this.sty.conopa}></div>
				<div style={this.sty.contxt}>
				<a href="#" onClick={this.tap}>
					<div style={this.sty.conL}>
					
						<h2 style={this.sty.conL}>{this.state.title}</h2>
						<div>
							<p style={this.sty.riqi}>{this.state.riqi}</p>
							<p style={this.sty.zuoze}><a style={this.sty.zuoze} href={this.state.zuozeurl}>{this.state.zuoze}</a></p>
						</div>
					
					</div>
					
					<div style={this.sty.conR}>
						<div onClick={this.tap}  style={this.sty.yuans}>
							&gt;
						</div>
						<div style={this.sty.conRbor}></div>
					</div>
					</a> 
				</div>
				<Show classS={this.state.classS} fanhui={function(e){
					_this.setState({classN:'logoh1'});
					_this.setState({classS:'show1'})
				}}/>
			</div>
		)
	}
})

Dome.prototype.sty={
	//顶层div样式；
cont:{width:'100vw',height:'100vh',position:'relative',margin:'0',padding:'0'},
	//logo
	//右侧列表
	navR:{width:'300px',height:'34px',zIndex:'10',
	lineHeight:'34px',fontSize:'12px',position:'absolute',right:'10px',top:'10px'},
	//十分钟写游记
	shifen:{height:'34px',padding:'0 10px 0 34px',color:'#fff',
	borderRadius:'5px',
	display:'block',float:'right'},
	//分享游记
	fenxiang:{borderRadius:'4px',width:'140px',background:'#000',float:'right',height:'34px',color:'#fff',marginRight:'10px'},
	fenxiangR:{float:'right',width:'34px',height:'22px',borderLeft:'1px #fff solid ',
	marginTop:'7px',background:'url("img/iconbj.png") no-repeat',
	backgroundPosition:'8px -2634px '},
	Fxa:{color:'#fff',width:'50px',float:'right',height:'34px',padding:'0 15px 0 30px',
	background:'url("img/iconbj1.png") no-repeat',backgroundPosition:'3px -2698px' },
	fxa:{color:'#ff0',width:'25px',float:'left',height:'34px',padding:'0 4px',
	display:'block',float:'left'},
	//梦想实现的地方
	bjt:{width:'100%',height:'100%',position:'absolute',zIndex:-2,background:'url("img/bodybj.jpg") no-repeat',
	backgroundSize:'100% 122%',backgroundPosition:'0 40%'},
	conopa:{position:'absolute',width:'750px',height:'100%',opacity:'0.5',background:' linear-gradient(to left,rgba(0,0,0,1), rgba(255,255,255,0)',right:'0',zIndex:'-1'},
	contxt:{width:'500px',overflow:'hidden',position:'absolute',top:'50%',right:'0'},
		//标题
	conL:{float:'left',width:'300px',lineHeight:'38px',color:'#fff',fontSize:'34px',margin:'0'},
	riqi:{fontSize:'14px',color:'#fff',lineHeight:'16px',marginBottom:'10px',padding:'0'},
	zuoze:{fontSize:'14px',color:'#fff',lineHeight:'16px',display:'block'},
		//右侧
	conR:{width:'160px',height:'60px',float:'right',marginTop:'50px'}	,
	yuans:{width:'56px',height:'56px',borderRadius:'50%',border:'2px #ccc solid',background:'rgba(0,0,0,0.3)',fontWeight:'900',fontSize:'50px',
	color:'#fff',textAlign:'center',lineHeight:'60px'},
	conRbor:{width:'100px',height:'3px',position:'absolute',right:'0',bottom:'40%',background:'#ccc'}
}

module.exports = Dome