//======top=====================================================
var Top = React.createClass({
	getInitialState:function(){
		return{
			res1:"http://chanyouji.com/search/trips?",
			res2:"",
			res3:"#myModal",
			unname:"登录"
		}
	},
	loginIn:function(){
		if(localStorage.getItem("login")){
			this.setState({res3:""})
			this.setState({unname:"欢迎 :"+localStorage.getItem("loginId")+" 登陆本系统"})
		}else{
			this.setState({res3:"#myModal"})
		}
	},
	onclick:function(e){
		var search = this.refs.ipt.value;

		var btnurl = e.target.getAttribute("href");
		var url = btnurl+"q="+search;
		this.setState({res1:url})


	},
	componentDidMount:function(){
		if(localStorage.getItem("login")){
			this.setState({res3:""})
			this.setState({unname:"欢迎 :"+localStorage.getItem("loginId")+" 登陆本系统"})
		}else{
			this.setState({res3:"#myModal"})
		}
	},
	onfocus:function(){
		if(this.state.res2.length<=0){
			this.setState({res2:"点击刷新验证码"})
			$("#zz-yanzheng").css({"display":"block"});
		}
		console.log(this.state.res2.length)
	},
	onblur:function(e){
		var t = e.target.value;
		if(t !== this.state.res2){
			this.setState({res2:"验证码不正确"});
			$("#zz-yanzheng").css({"background":"#fff","color":"#f00","font-weight":"900"});
		}
	},
	zzyanzheng:function(){
		//随机数颜色
		var a = Math.floor(Math.random()*255)+1;
		var b = Math.floor(Math.random()*255)+1;
		var c = Math.floor(Math.random()*255)+1;

		//随机数验证码
		var q = Math.floor(Math.random()*10);
		var w = Math.floor(Math.random()*10);
		var e = Math.floor(Math.random()*10);
		var r = Math.floor(Math.random()*10);
		var qwer = q+""+w+""+e+""+r;
		this.setState({res2:qwer});

		$("#zz-yanzheng").css({"background":"rgb("+a+","+b+","+c+")","color":"#aaa","font-weight":"100"});
	},
	render:function(){
		var sty = {
			div:{"width":"100%","background":"#000"},
			topul:{"width":"1200px","margin":"0 auto","padding":"0","height":"50px","background":"#000","list-style":"none"},
			topli:{"float":"left","margin":"0 20px","text-align":"center","line-height":"50px"},
			color:{"color":"#fff","font-size":"16px","text-decoration":"none"},
			toplia:{"float":"right","margin":"0 10px","line-height":"50px"},
			topliinput:{"float":"left","margin":"10px 20px","text-align":"center","line-height":"30px","background":"#2F3841","border-radius":"3px",},
			topinput:{"margin":"6px 5px","padding":"0","border":"none","background":"#2F3841","width":"140px","height":"16px","font":"14px/16px '微软雅黑'","color":"#fff","display":"block","float":"left","outline":"none"},
			topbtn:{"width":"20px","height":"20px","display":"block","float":"left","margin":"5px","padding":"0","border":"none","background":"url('img/icon.png') no-repeat center center"},
			topbtna:{"width":"100%","height":"100%","display":"block"},
			loginp:{"text-align":"center","color":"#999"},
			loginh:{"font":"100 18px/24px '黑体'","color":"#777","text-align":"center","background":"url('img/bg.png') no-repeat center center","background-size":"448px"},
			loginul:{"list-style":"none","margin":"20px auto","padding":"0","display":"table","text-align":"center"},
			loginli:{"float":"left","margin":"0 20px"},
			logina1:{"display":"block","width":"60px","height":"60px","background":"url('img/icons.png') no-repeat -215px -133px","background-size":"390px 351px"},
			logina2:{"display":"block","width":"60px","height":"60px","background":"url('img/icons.png') no-repeat 0px 0px","background-size":"390px 351px"},
			logina3:{"display":"block","width":"60px","height":"60px","background":"url('img/icons.png') no-repeat -215px -255px","background-size":"390px 351px"},
			logindiv:{"width":"320px","height":"40px","margin":"auto","margin-bottom":"20px"},
			logindiv3:{"width":"320px","height":"40px","margin":"auto","margin-bottom":"20px","border":"1px solid #ccc","border-radius":"5px"},
			logininput:{"float":"left","height":"38px","border":"none","border-radius":"5px","width":"120px","margin":"0","padding-left":"10px","outline":"none"},
			loginspan:{"float":"right","width":"120px","height":"38px","line-height":"38px","text-align":"center","font-weight":"100","border-radius":"5px","cursor":"default","display":"none"}
		}
		return(
			<div style={sty.div}>
				<ul style={sty.topul}>
					<li style={sty.topli}><a href="index.html"><img src="img/logo.png"/></a></li>
					<li style={sty.topliinput}>
						<input style={sty.topinput} type="text" placeholder="搜索" ref="ipt"/>
						<button onClick={this.onclick} style={sty.topbtn}><a style={sty.topbtna} href={this.state.res1}></a></button>
					</li>
					<li style={sty.topli}><a style={sty.color} href="app.html">手机应用</a></li>
					<li style={sty.topli}><a style={sty.color} href="#">氢气球旅行</a></li>
					<li style={sty.toplia}><a style={{"color":"#fff","font-size":"12px","text-decoration":"none","outline":"none"}} href="#"  type="button" className="btn btn-lg" data-toggle="modal" data-target={this.state.res3} onClick={this.loginIn} >{this.state.unname}</a></li>
				</ul>
				<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			  		<div className="modal-dialog" style={{"width":"480px"}} role="document">
				    	<div className="modal-content" style={{"min-height":"550px"}}>
					        <div className="modal-header" style={{"border":"none"}}>
					        	<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					        	<h4 className="modal-title" id="myModalLabel" style={{"text-align":"center","font-size":"24px"}}>蟬游記</h4>
				      		</div>
					      	<div className="modal-body">
					        	<p style={sty.loginp}>蝉游记是帮助你轻松制作游记的工具</p>
					        	<p  style={sty.loginp}>3个步骤10分钟，制作华丽游记，记录旅行也可以如此简单！</p>

					        	<h3 style={sty.loginh}>第三方登录</h3>
					        	<ul style={sty.loginul}>
					        		<li style={sty.loginli}><a style={sty.logina1} href=""></a></li>
					        		<li style={sty.loginli}><a style={sty.logina2} href=""></a></li>
					        		<li style={sty.loginli}><a style={sty.logina3} href=""></a></li>
					        	</ul>
					        </div>
					        <form>
					        <div className="modal-body">
					        	<h3 style={sty.loginh}>邮箱登录</h3>

						        <div style={sty.logindiv} className="form-group">
						        	<input style={{"text-align":"center"}} type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
						        </div>
						        <div style={sty.logindiv} className="form-group">
						        	<input style={{"text-align":"center"}} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
						        </div>
						        <div style={sty.logindiv3} className="form-group">
						        	<input style={sty.logininput} ref="yanzheng" onFocus={this.onfocus} onBlur={this.onblur} type="text" placeholder="验证码"/>
						        	<span style={sty.loginspan} onClick={this.zzyanzheng}  id="zz-yanzheng">{this.state.res2}</span>
						        </div>

						    </div>
					        <div className="modal-footer">
								<label><input type="checkbox"/>记住密码</label>
					        	<button type="submit" className="btn btn-primary">登录</button>
					        </div>
				        	</form>

				    	</div>
				    </div>
				</div>
			</div>
		)
	}
})




ReactDOM.render(<Top/>,document.getElementById("top"))

