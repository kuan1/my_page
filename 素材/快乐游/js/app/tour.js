

var Main = React.createClass({
	getInitialState: function() {
    return {
      		res:[],
      		res2:[],
      		res3:[],
      		res4:[],
      		res5:[]

    	}
  	},
	componentDidMount:function(){
		var _this = this;
		console.log(_this.state.res);
		$.get('data-tour.json',function(result){
			//console.log(result);
			_this.setState({
				res:result.dataAsia,
				res2:result.dataEuro,
				res3:result.dataOther,
				res4:result.dataHK,
				res5:result.dataInner
			});
			//console.log(_this.state.res);
		})
	},
	render:function(){
		return(
			<div className="container qq-container">
			<ul className="nav nav-pills qq-nav">
			  <li>
			  	<a href="index.html">发现好游记</a>
			  	<span className="nav-border"></span>
			  </li>
			  <li><a href="#">|</a></li>
			  <li>
			  	<a href="#">旅行口袋书</a>
			  	<span className="nav-border nav-border-active"></span>
			  </li>
			  <li><a href="#">|</a></li>
			  <li>
			  	<a href="#">我要写游记</a>
			  	<span className="nav-border"></span>
			  </li>
			</ul>
			<div className="qq-center-tour">
				<ul className="nav nav-pills qq-tour-ul">
				    <li className="active"><a href="#asia" data-toggle="tab">国外-亚洲</a></li>
				    <li><a href="#euro" data-toggle="tab">国外-欧洲</a></li>
				    <li><a href="#other" data-toggle="tab">国外-其他</a></li>
				    <li><a href="#hk" data-toggle="tab">国外-港澳台</a></li>
				    <li><a href="#inner" data-toggle="tab">国外-大陆</a></li>
			  	</ul>
			  	<div id="myTabContent" className="tab-content">
			  		<div className="tab-pane in active" id="asia">
				       		{
							this.state.res.map(function(r){
								return (
										<div className="tour-img">
									  		<a href="info.html">
									  			<img src={r.img} alt="" />
									  			<div></div>
									  			<h2>
									  				<span>{r.nationName1}</span>
									  				<em>{r.nationName2}</em>
									  			</h2>
									  			<p>{r.note}</p>
									  		</a>
									  	</div>
									)
							})
						}

				    </div>
				    <div className="tab-pane" id="euro">
				        {
							this.state.res2.map(function(r){
								return (
										<div className="tour-img">
									  		<a href="#">
									  			<img src={r.img} alt="" />
									  			<div></div>
									  			<h2>
									  				<span>{r.nationName1}</span>
									  				<em>{r.nationName2}</em>
									  			</h2>
									  			<p>{r.note}</p>
									  		</a>
									  	</div>
									)
							})
						}
				    </div>
				    <div className="tab-pane" id="other">
				        {
							this.state.res3.map(function(r){
								return (
										<div className="tour-img">
									  		<a href="#">
									  			<img src={r.img} alt="" />
									  			<div></div>
									  			<h2>
									  				<span>{r.nationName1}</span>
									  				<em>{r.nationName2}</em>
									  			</h2>
									  			<p>{r.note}</p>
									  		</a>
									  	</div>
									)
							})
						}
				    </div>
				    <div className="tab-pane" id="hk">
				        {
							this.state.res4.map(function(r){
								return (
										<div className="tour-img">
									  		<a href="#">
									  			<img src={r.img} alt="" />
									  			<div></div>
									  			<h2>
									  				<span>{r.nationName1}</span>
									  				<em>{r.nationName2}</em>
									  			</h2>
									  			<p>{r.note}</p>
									  		</a>
									  	</div>
									)
							})
						}
				    </div>
				    <div className="tab-pane" id="inner">
				        {
							this.state.res5.map(function(r){
								return (
										<div className="tour-img">
									  		<a href="#">
									  			<img src={r.img} alt="" />
									  			<div></div>
									  			<h2>
									  				<span>{r.nationName1}</span>
									  				<em>{r.nationName2}</em>
									  			</h2>
									  			<p>{r.note}</p>
									  		</a>
									  	</div>
									)
							})
						}
				    </div>
				</div>
			</div>
		</div>
		)
	}
});
ReactDOM.render(<Main/>,document.getElementById('main'));
