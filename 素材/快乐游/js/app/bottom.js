//=====底部========================================================
var Bottom = React.createClass({
	render:function(){
		var sty={
			div:{"width":"100%","height":"120px","border-top":"1px solid #ccc"},
			div2:{"width":"990px","margin":"0 auto","height":"120px"},
			div3:{"height":"30px","float":"left","list-style":"none","margin":"45px 0"},
			a:{"font-size":"16px","color":"#777","text-decoration":"none","margin":"0 15px"},
			div4:{"height":"30px","float":"right","color":"#777","margin":"45px"}
		}
		return(
			<div style={sty.div}>
				<div style={sty.div2}>
					<div style={sty.div3}>
						<a style={sty.a} href="#">手机应用</a>
						|
						<a style={sty.a} href="#">口袋攻略</a>
						|
						<a style={sty.a} href="#">意见反馈</a>
						|
						<a style={sty.a} href="#">联系我们</a>
						|
						<a style={sty.a} href="#">使用条款</a>
					</div>
					<div style={sty.div4}>@蝉游记 <a style={{"color":"#aaa","font-size":"16px"}} href="http://www.miibeian.gov.cn/state/outPortal/loginPortal.action" target="_blank">沪ICP备12026324号</a></div>
				</div>
			</div>
		)
	}
})
ReactDOM.render(<Bottom/>,document.getElementById("bottom"))