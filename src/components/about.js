
import React from "react";
import $ from "jquery"
import "../mock/lei-data"
import pn1 from "../img/hot.png"
import pn2 from "../img/jx.png"

class About extends React.Component{
	constructor(props){
		super(props);
		this.state={
			arr:{}
		}
	}

	componentWillMount(){
			var _this=this;
			$.ajax({
						url: 'http://www.lei.com/api',
						type: 'get',
						async:true,
						dataType: 'json',
						success:function(data) {
							_this.setState({
								arr:data.user
							})
						console.log(_this.state.arr)
						}
				})
	}

	render(){
		var _this=this;
		return(
			<div>
				<h1>我是详情页</h1>
				
				<div className="l-main-top">
					
					<div className="l-main-top-ads">
						<div className="l-main-top-tit">【{_this.state.arr.name}】</div>
						<div className="l-main-top-pic1">{_this.state.arr.address}</div>
						<img src={pn1}  className="l-main-top-pic"/>
						<img src={pn2}  className="l-main-top-pic"/>
					</div>
					<div className="l-main-top-two">
						<div className="l-main-top-two-one">线路编号：{_this.state.arr.id}</div>
						<div>精华景点：{_this.state.arr.jd}</div>
					</div>
					<div className="l-main-top-tu"></div>
					<div className="l-main-top-tu-right">
						<p>优惠价:<span className="l-main-top-tu-right-da">{_this.state.arr.pri}</span>起</p>
						<div className="l-main-top-tu-right-er"><span className="l-main-top-right-er-one">销量：{_this.state.arr.xiao}</span><span>满意度：{_this.state.arr.manyi}</span><span>{_this.state.arr.ping}条点评</span></div>
						<div className="l-main-top-tu-right-kuang">
	 						<p>套餐类型：</p>
	 						<p>出发日期：</p>
	 						<p>出游人数：</p>
	 						<button className="l-main-top-btn">立即购买</button>
						</div>



					</div>
					
					
				
				


				</div>
				<div className="l-main-con">
					<ul className="l-main-con-ul">
						<li>在线预定</li>
						<li>线路特色</li>
						<li>行程安排</li>
						<li>费用包含</li>
						<li>费用不含</li>
						<li>签约流程</li>
						<li>备注</li>
						<li>客户评价</li>
						<li>我要咨询</li>
					</ul>


				</div>

			</div>
		)
	}

}

export default About;