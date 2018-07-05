
import React from "react";
import $ from "jquery"
import "../mock/lei-data"
import pn1 from "../img/hot.png"
import pn2 from "../img/jx.png"
import "../l-iconfont/iconfont.css"
import "../l-iconfont/iconfont.js"

class Lef extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		 var useTag = '<use xlink:href="#icon-jiantouzuo" />';
    	return <svg className="l-n" dangerouslySetInnerHTML={{__html: useTag }} />;
	}
}


class Rig extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		 var useTag = '<use xlink:href="#icon-arrow" />';
    		return <svg className="l-n" dangerouslySetInnerHTML={{__html: useTag }} />;
	}
}



class Can extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		 var useTag = '<use xlink:href="#icon-yongcan" />';
    		return <svg className="l-n" dangerouslySetInnerHTML={{__html: useTag }} />;
	}
}



class Zhu extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		 var useTag = '<use xlink:href="#icon-zhusu" />';
    		return <svg className="l-n" dangerouslySetInnerHTML={{__html: useTag }} />;
	}
}




class Jiao extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		 var useTag = '<use xlink:href="#icon-datubiao-cloud-" />';
    		return <svg className="l-n" dangerouslySetInnerHTML={{__html: useTag }} />;
	}
}


class Shui extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		 var useTag = '<use xlink:href="#icon-shuidi" />';
    		return <svg className="l-n" dangerouslySetInnerHTML={{__html: useTag }} />;
	}
}


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
						async:false,
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
					<div className="l-main-top-tu">
						<div className="l-main-top-da"></div>
						<div className="l-xiao">


							<span className="l-shang l-z">
								<Lef />
							</span>


							<ul>
								{
									_this.state.arr.image.map((item,i)=>{
										return(
											<li style={{background:"url("+{item}+") no-repeat fixed top"}}></li>
											)
									})
								}
							</ul>


							<span className="l-xia l-z">
								<Rig />
							</span>



						</div>
					</div>
					<div className="l-main-top-tu-right">
						<p>优惠价:<span className="l-main-top-tu-right-da">{_this.state.arr.pri}</span>起</p>
						<div className="l-main-top-tu-right-er"><span className="l-main-top-right-er-one">销量：{_this.state.arr.xiao}</span><span>满意度：{_this.state.arr.manyi}</span><span>{_this.state.arr.ping}条点评</span></div>
						<div className="l-main-top-tu-right-kuang">
	 						<p>套餐类型：
								{
									_this.state.arr.taocan.map(function(item,i){
										return(
											<div className="l-main-top-right-er-taocan" key={i}>{item.id}</div>
										)
									})
								}


	 						</p>
	 						<p>出发日期：
	 							<select >
	 								{
                                       _this.state.arr.day.map(function(item,i) {
                                       	return (
                                       		<option value={item.id} key={i}>{item.time}</option>
                                       		)
                                       })   
	 								}
	 							</select>

	 						</p>
	 						<p className="l-main-top-right-er-renshu">出游人数：<span>-</span><span>0</span><span>+</span><p>￥{_this.state.arr.pri}元/成人</p></p>
	 						<button className="l-main-top-btn">立即购买</button>
						</div>
						<p className="l-main-top-right-from">出发地：{_this.state.arr.from}</p>
						<p className="l-main-top-right-from">旅游天数：{_this.state.arr.day1}</p>
						<p className="l-main-top-right-from">提前预定：提前15天预定</p>


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
					
					<div className="l-main-con-day">
						 

					</div>
					<div className="l-main-con-xian">
						<hr />
						<p className="l-main-con-ts">线路特色</p>
						<hr />
						<p>台北101大楼曾是世界第一高楼，2010年1月4日迪拜塔的建成（828米）使得台北101退居世界第四高楼。台北101楼高508米，地上101层，地下5层。其英文名称Taipei101代表台北，该楼融合东方古典文化及台湾本土特色，造型宛若劲竹，节节高升、柔韧有余。另外运用高科技材质及创意照明，以透明、清晰营造视觉穿透效果。其中B2—B4为停车场，B1至4楼共有5层购物中心，5楼则为数家银行与证券服务金融中心所在，6楼至84楼为一般办公大楼， 85楼为商务俱乐部，86至88楼为观景餐厅，89楼为室内观景层，91楼为室外观景台。特别为您安排101登顶，让您享受全方位360°台北全景。</p>

 						<p>【风味餐安排】——台湾地道美食一网打尽</p>
 						<p>  1、台式风味团餐        2、台式自助风味小火锅    3、台湾牛肉面 </p>
 						<p>【住宿安排】——宝岛特别体验</p>

 						<p>免费升级3晚五花酒店，一晚温泉酒店，一晚汽车旅馆</p>
 						<p>【特别赠送】——给您最周全的保障</p>
 						<p>  1、每日赠送矿泉水      2、200万新台币旅游平安险+旅游意外险</p>
					</div>
					<div className="l-main-con-xian">
						<hr />
						<p className="l-main-con-ts">行程安排</p>
						<hr />
							<div className="l-anpai">
								<div className="l-con-both">
									<h4>第一天</h4>
									<p>用餐</p>	
									<p>住宿</p>
									<p>交通</p>
									<p>content</p>
								</div>

							</div>				
					</div>
					

				</div>
				

				

			</div>
		)
	}

}

export default About;