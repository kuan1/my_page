

var Main = React.createClass({
	getInitialState: function() {
    return {
      		res:[],
      		href:""
    	}
  	},
	componentDidMount:function(){
		var _this = this;
		$.get('data-find.json',function(result){
			console.log(result);
			_this.setState({res:result.data});
			//console.log(_this.state.res[0].title);
		})
	},
	tap:function(){
		if(localStorage.getItem("login")){
			this.setState({href:"youji.html"})
		}else{
			alert("请登录")
			this.setState({href:"login.html"})
		}
	},
	render:function(){
		return(
			<div className="container qq-container">
			<ul className="nav nav-pills qq-nav">
			  <li>
			  	<a href="#">发现好游记</a>
			  	<span className="nav-border nav-border-active"></span>
			  </li>
			  <li><a href="#">|</a></li>
			  <li>
			  	<a href="tour.html">旅行口袋书</a>
			  	<span className="nav-border"></span>
			  </li>
			  <li><a href="#">|</a></li>
			  <li>
			  	<a href={this.state.href} onClick={this.tap}>我要写游记</a>
			  	<span className="nav-border"></span>
			  </li>
			</ul>
			<div className="qq-center">
				<ul className="nav nav-pills qq-find-ul">
				    <li className="active"><a href="#">精选游记</a></li>
				    <li className="dropdown find-li find-li1">
				      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
				        出发时间 <span className="caret"></span>
				      </a>
				      <ul className="find-div find-div1">
				        <li><a href="#">1月</a></li>
				        <li><a href="#">2月</a></li>
				        <li><a href="#">3月</a></li>
				        <li><a href="#">4月</a></li>
				        <li><a href="#">5月</a></li>
				        <li><a href="#">6月</a></li>
				        <li><a href="#">7月</a></li>
				        <li><a href="#">8月</a></li>
				        <li><a href="#">9月</a></li>
				        <li><a href="#">10月</a></li>
				        <li><a href="#">11月</a></li>
				        <li><a href="#">12月</a></li>
				      </ul>
				    </li>
				    <li className="dropdown find-li find-li2">
				      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
				        国外旅行地 <span className="caret"></span>
				      </a>
				      <ul className="find-div find-div2">
				        <li><a href="#">日本</a></li>
				        <li><a href="#">朝鲜</a></li>
				        <li><a href="#">韩国</a></li>
				        <li><a href="#">蒙古</a></li>
				        <li><a href="#">菲律宾</a></li>
				        <li><a href="#">越南</a></li>
				        <li><a href="#">老挝</a></li>
				        <li><a href="#">柬埔寨</a></li>
				        <li><a href="#">缅甸</a></li>
				        <li><a href="#">泰国</a></li>
				        <li><a href="#">马来西亚</a></li>
				        <li><a href="#">文莱</a></li>
				        <li><a href="#">印度尼西亚</a></li>
				        <li><a href="#">印度</a></li>
				        <li><a href="#">马尔代夫</a></li>
				        <li><a href="#">哈萨克斯坦</a></li>
				        <li><a href="#">芬兰</a></li>
				        <li><a href="#">瑞典</a></li>
				        <li><a href="#">丹麦</a></li>
				        <li><a href="#">冰岛</a></li>
				        <li><a href="#">挪威</a></li>
				        <li><a href="#">爱沙尼亚</a></li>
				        <li><a href="#">立陶宛</a></li>
				        <li><a href="#">白俄罗斯</a></li>
				        <li><a href="#">俄罗斯</a></li>
				        <li><a href="#">乌克兰</a></li>
				        <li><a href="#">波兰</a></li>
				        <li><a href="#">捷克</a></li>
				        <li><a href="#">斯洛伐克</a></li>
				        <li><a href="#">匈牙利</a></li>
				        <li><a href="#">德国</a></li>
				        <li><a href="#">奥地利</a></li>
				        <li><a href="#">瑞士</a></li>
				        <li><a href="#">英国</a></li>
				        <li><a href="#">爱尔兰</a></li>
				        <li><a href="#">荷兰</a></li>
				        <li><a href="#">比利时</a></li>
				        <li><a href="#">卢森堡</a></li>
				        <li><a href="#">法国</a></li>
				        <li><a href="#">摩纳哥</a></li>
				        <li><a href="#">罗马尼亚</a></li>
				        <li><a href="#">保加利亚</a></li>
				        <li><a href="#">塞尔维亚</a></li>
				        <li><a href="#">黑马</a></li>
				        <li><a href="#">马其顿</a></li>
				        <li><a href="#">希腊</a></li>
				        <li><a href="#">斯洛文尼亚</a></li>
				        <li><a href="#">克罗地亚</a></li>
				        <li><a href="#">意大利</a></li>
				        <li><a href="#">梵蒂冈</a></li>
				        <li><a href="#">西班牙</a></li>
				        <li><a href="#">葡萄牙</a></li>
				        <li><a href="#">埃及</a></li>
				        <li><a href="#">苏丹</a></li>
				        <li><a href="#">摩洛哥</a></li>
				        <li><a href="#">索马里</a></li>
				        <li><a href="#">肯尼亚</a></li>
				        <li><a href="#">卢旺达</a></li>
				        <li><a href="#">中非</a></li>
				        <li><a href="#">毛里求斯</a></li>
				        <li><a href="#">刚果</a></li>
				        <li><a href="#">马里</a></li>
				        <li><a href="#">尼日尔</a></li>
				        <li><a href="#">加纳</a></li>
				        <li><a href="#">尼日利亚</a></li>
				        <li><a href="#">安哥拉</a></li>
				        <li><a href="#">南非</a></li>
				        <li><a href="#">澳大利亚</a></li>
				        <li><a href="#">新西兰</a></li>
				        <li><a href="#">帕劳</a></li>
				        <li><a href="#">瑙鲁</a></li>
				        <li><a href="#">萨摩亚</a></li>
				        <li><a href="#">萨摩亚</a></li>
				        <li><a href="#">汤加</a></li>
				        <li><a href="#">关岛</a></li>
				        <li><a href="#">加拿大</a></li>
				        <li><a href="#">美国</a></li>
				        <li><a href="#">墨西哥</a></li>
				        <li><a href="#">格陵兰</a></li>
				        <li><a href="#">危地马拉</a></li>
				        <li><a href="#">萨尔瓦多</a></li>
				        <li><a href="#">洪都拉斯</a></li>
				        <li><a href="#">尼加拉瓜</a></li>
				        <li><a href="#">巴拿马</a></li>
				        <li><a href="#">多米尼加</a></li>
				        <li><a href="#">波多黎各</a></li>
				        <li><a href="#">哥伦比亚</a></li>
				        <li><a href="#">委内瑞拉</a></li>
				        <li><a href="#">苏里南</a></li>
				        <li><a href="#">厄瓜多尔</a></li>
				        <li><a href="#">巴西</a></li>
				        <li><a href="#">智利</a></li>
				        <li><a href="#">阿根廷</a></li>
				        <li><a href="#">乌拉圭</a></li>
				        <li><a href="#">玻利维亚</a></li>
				      </ul>
				    </li>
				    <li className="dropdown find-li find-li3">
				      <a className="dropdown-toggle" data-toggle="dropdown" href="#">
				        国内旅行地 <span className="caret"></span>
				      </a>
				      <ul className="find-div find-div3">
				        <li><a href="#">北京</a></li>
				        <li><a href="#">天津</a></li>
				        <li><a href="#">上海</a></li>
				        <li><a href="#">重庆</a></li>
				        <li><a href="#">河北</a></li>
				        <li><a href="#">河南</a></li>
				        <li><a href="#">云南</a></li>
				        <li><a href="#">辽宁</a></li>
				        <li><a href="#">黑龙江</a></li>
				        <li><a href="#">湖南</a></li>
				        <li><a href="#">安徽</a></li>
				        <li><a href="#">山东</a></li>
				        <li><a href="#">新疆</a></li>
				        <li><a href="#">江苏</a></li>
				        <li><a href="#">浙江</a></li>
				        <li><a href="#">江西</a></li>
				        <li><a href="#">湖北</a></li>
				        <li><a href="#">广西</a></li>
				        <li><a href="#">甘肃</a></li>
				        <li><a href="#">山西</a></li>
				        <li><a href="#">上海</a></li>
				        <li><a href="#">内蒙古</a></li>
				        <li><a href="#">陕西</a></li>
				        <li><a href="#">吉林</a></li>
				        <li><a href="#">福建</a></li>
				        <li><a href="#">贵州</a></li>
				        <li><a href="#">广东</a></li>
				        <li><a href="#">青海</a></li>
				        <li><a href="#">台湾</a></li>
				        <li><a href="#">香港</a></li>
				        <li><a href="#">澳门</a></li>
				        <li><a href="#">海南</a></li>
				        <li><a href="#">宁夏</a></li>
				        <li><a href="#">西藏</a></li>
				      </ul>
				    </li>
			  	</ul>
				{
					this.state.res.map(function(r){
						return (
							<div className="find-img">
						  		<a href="info.html">
						  			<img src={r.bigImg} alt="" />
						  		</a>
						  		<a href="info.html" className="find-img-head-a">
						  			<img className="find-img-head" src={r.smallImg} alt="" />
						  		</a>
						  		<p>{r.title}</p>
						  		<span>{r.date}</span>
						  	</div>
							)
					})
				}

			  	<div className="row col-lg-12">
			  		<div className="col-lg-offset-4 page-div">
			  		<a href="#" className="page-active">1</a>
			  		<a href="#">2</a>
			  		<a href="#">3</a>
			  		<span>...</span>
			  		<a href="#">后一页></a>
			  		<a href="#">末页>></a>
			  	</div>
			  	</div>
			</div>
		</div>)
	}
});
ReactDOM.render(<Main/>,document.getElementById('main'));
