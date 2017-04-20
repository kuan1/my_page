
//=====banner=====================================================
var Banner = React.createClass({
	render:function(){
		var sty={
			div:{"width":"100%","height":"380px"},
			bannerdiv:{"position":"absolute","top":"80px","left":"50%","margin-left":"-100px","width":"205px","height":"96px","z-index":"1000","background":"url('img/logo-min.png') no-repeat center center"},
			bannerli:{"width":"24px","height":"6px","margin":"0 5px"},
			a:{"background":"rgba(0,0,0,0.5)","padding":"10px 40px","border-radius":"5px",color:"#fff","font-size":"20px","text-decoration":"none"},
			b:{"bottom":"80px"},
			img:{"width":"100%","height":"380px"}
		}
		return(
			<div style={sty.div}>
				<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

					<ol className="carousel-indicators">
					    <li style={sty.bannerli} data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
					    <li style={sty.bannerli} data-target="#carousel-example-generic" data-slide-to="1"></li>
					    <li style={sty.bannerli} data-target="#carousel-example-generic" data-slide-to="2"></li>
					    <li style={sty.bannerli} data-target="#carousel-example-generic" data-slide-to="3"></li>
					    <li style={sty.bannerli} data-target="#carousel-example-generic" data-slide-to="4"></li>
					    <li style={sty.bannerli} data-target="#carousel-example-generic" data-slide-to="5"></li>

					</ol>


				    <div className="carousel-inner" role="listbox">
					    <div className="item active">
					      	<img style={sty.img} src="img/banner (1).jpg" alt=""/>
					        <div style={sty.b} className="carousel-caption">
					        	<a style={sty.a} href="show.html">图片来自《梦想实现的地方-马达加斯加第二季》</a>
					    	</div>
					    </div>
					    <div className="item">
						    <img style={sty.img} src="img/banner (2).jpg" alt=""/>
						    <div style={sty.b} className="carousel-caption">
					        	<a style={sty.a} href="show.html">图片来自《我在美国玩泥巴——记美东西34天》</a>
					      	</div>
					    </div>
					    <div className="item">
					      	<img style={sty.img} src="img/banner (3).jpg" alt=""/>
					      	<div style={sty.b} className="carousel-caption">
					        	<a style={sty.a} href="show.html">图片来自《印度旅行—加尔各答篇(Kolkata)》</a>
					      	</div>
					    </div>
					    <div className="item">
					      	<img style={sty.img} src="img/banner (4).jpg" alt=""/>
					      	<div style={sty.b} className="carousel-caption">
					        	<a style={sty.a} href="show.html">图片来自《关西6日行》</a>
					      	</div>
					    </div>
					    <div className="item">
					      	<img style={sty.img} src="img/banner (5).jpg" alt=""/>
					      	<div style={sty.b} className="carousel-caption">
					        	<a style={sty.a} href="show.html">图片来自《迷失在冰雪世界-小镇利斯特维扬卡》</a>
					      	</div>
					    </div>
					    <div className="item">
					      	<img style={sty.img} src="img/banner (6).jpg" alt=""/>
					      	<div style={sty.b} className="carousel-caption">
					        	<a style={sty.a} href="show.html">图片来自《Norse Saga·冰岛神话》</a>
					      	</div>
					    </div>

				  	</div>
				  	<div style={sty.bannerdiv}></div>
				  	<a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"></a>
  					<a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"></a>
				</div>
			</div>
		)
	}
})

ReactDOM.render(<Banner/>,document.getElementById("banner"));

