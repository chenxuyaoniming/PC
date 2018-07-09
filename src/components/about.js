
import React from "react";
import $ from "jquery"
import "../mock/lei-data"
import pn1 from "../img/hot.png"
import pn2 from "../img/jx.png"
import "../l-iconfont/iconfont.css"
import "../l-iconfont/iconfont.js"
import {hashHistory} from "react-router"



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
			arr:{},
			num:"",
			pos:1,
			lun:0,
			chuan:{},
			img:[]
		}
	}

	
	componentWillMount(){

			var id=this.props.params.id;
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



		tap(i){

		 	console.log(i.i)
		 	var cc=i.i;
		 	this.setState({
		 		pos:cc
		 	})
		 	$(".l-img").css({
		 		opacity:"0"
		 	})
			$(".l-img").eq(cc).animate({
				opacity: "1"
			},100);
		}

	 	
	render(){

		var _this=this;

		return(

			<div>
				<div className="l-main-top">
					
					<div className="l-main-top-ads">
						<div className="l-main-top-tit">【{_this.state.arr.name}】</div>
						<div className="l-main-top-pic1">{_this.state.arr.address}</div>
						<img src={pn1}  className="l-main-top-pic"/>
						<img src={pn2}  className="l-main-top-pic"/>
					</div>
					<div className="l-main-top-two">
						<div className="l-main-top-two-one">线路编号：{_this.state.chuan.goodsID}</div>
						<div>精华景点：{_this.state.arr.jd}</div>
					</div>
					<div className="l-main-top-tu">

						<div className="l-main-top-da">
							<ul>
								{
									_this.state.img.map((item,i)=>{
										return(
											<li><img src={item} className="l-img"/></li>
											)
									})
								}
							</ul>
						</div>

						<div className="l-xiao">
							<span className="l-shang l-z" onClick={_this.shang.bind(this)}>
								<Lef />
							</span>
							
							<div className="l-lun">
								<ul id="l-lb">
									{
										_this.state.img.map((item,i)=>{
											return(
												<li><img  key={i} src={item} onClick={_this.tap.bind(_this,{i})} className="l-lt"/></li>
												)
										})
									}
								</ul>
							</div>

							<span className="l-xia l-z" onClick={_this.xia.bind(this)}>
								<Rig />
							</span>



						</div>
					</div>
					<div className="l-main-top-tu-right">
						<p>优惠价:<span className="l-main-top-tu-right-da">{_this.state.chuan.price}</span>起</p>
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
	 						<p className="l-main-top-right-er-renshu">出游人数：<span onClick={_this.jian.bind(_this)}>-</span><span className="l-num">{_this.state.pos}</span><span onClick={_this.jia.bind(_this)}>+</span><p>{_this.state.chuan.price}元/成人</p></p>
	 						<button className="l-main-top-btn" onClick={_this.tag.bind(_this)}>立即购买</button>
						</div>{_this.state.chuan.goodsID}
						<p className="l-main-top-right-from">出发地：{_this.state.arr.from}</p>
						<p className="l-main-top-right-from">旅游天数：{_this.state.arr.day1}</p>
						<p className="l-main-top-right-from">提前预定：提前15天预定</p>


					</div>
					
					
				
				


				</div>
				<div className="l-main-con">
					<ul className="l-main-con-ul" id="l-lie">
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

					<div className="l-main-con-xian">
					
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
								{
									_this.state.arr.richeng.map((item,i)=>{
										return(
											<div className="l-con-both">
												<h4><span className="l-con-day">{item.day}</span><span className="l-con-way">{item.way}</span></h4>
												<p className="l-can"><span className="l-con-can"><Can /><span className="l-lan">用餐情况:</span><span className="l-con-zao">早餐：{item.zao}</span><span className="l-con-wu">午餐：{item.wu}</span><span className="l-con-wan">晚餐：{item.wan}</span></span></p>	
												<p><span className="l-con-zhu"><Zhu /><span className="l-lan1">住宿情况：</span><span>{item.zhu}</span></span></p>
												<p><span className="l-con-bus"><Jiao /><span className="l-lan2">交通工具：</span><span>{item.gongju}</span></span></p>
												<p className="l-con-con">{item.con}</p>
											</div>
									)})

								}

								

							</div>				
					</div>
					


					<div className="l-main-con-xian">
					
						<p className="l-main-con-ts">费用包含</p>
						<hr />
						<p>1、郑州起止行程表内国际往返机票、机场税；</p>
 						<p>2、台湾入台证签证费；</p>
 						<p>3、境外入住全程入住四花酒店，升级3晚5花酒店，一晚温泉酒店、2晚特色酒店；</p>
 						<p>4、早餐自助，10个正餐；正餐为8菜一汤,10人一桌；</p>
 						<p>5、行程内景点门票；</p>
 						<p>6、专业领队全程服务；</p>
 						<p>7、全程含小费。</p>
					</div>




					<div className="l-main-con-xian">
						
						<p className="l-main-con-ts">费用不含</p>
						<hr />
						<p>1、大陆居民赴台通行证及其签注的费用（郑州80元/人，地市可能稍高） ；</p>
 						<p>2、个人消费以及未提及的费用等 ；</p>
 						<p>3、交通延阻、罢工及由于天气等人力不可抗拒的因素所引致的额外费用</p>
					</div>

					<div className="l-main-con-xian">
						
						<p className="l-main-con-ts">签约流程</p>
						<hr />
						<p> 网上预订：直接通过网站下单，在线选择产品并填写相关信息后，提交订单。</p>
 						<p> 在线预订：拨打咨询/预订电话，由客服帮助您完成信息的确认和下单操作。</p>
					</div>
			
				
				<div className="l-main-con-xian">
						
						<p className="l-main-con-ts">备注</p>
						<hr />
						<p>1、我社在不减少景点的情况下,有权根据交通及天气等原因调整景点顺序 ；</p>
 						<p>2、入台证资料我社将于出团前7个工作日寄至台北,若客人取消则收取300元/人入台证损失费用,机票,酒店损失费用另算；</p>
 						<p>3、按照规定，游客必须随团进出台湾和国内口岸，不得自行离团自由活动，否则将被记入黑名单，并将造成组团旅行社被罚款20万台币和其他惩处.由此产生的损失将向脱团旅客索取 ； </p>
 						<p>4、请出发前带齐私人物品，足用现金和信用卡、常备药品、泳装、相机、摄像机、充电器、酒店大堂有转换插头 ；</p>
 						<p>5、赴台证件由领队带至机场发给团员 ；</p>
 						<p>6、境外务必注意自身安全，酒店房间内洗浴请穿厚底拖鞋以免滑倒，过马路请注意交通信号遵章通过 ；</p>
 						<p>7、从台湾打回大陆国际电话：拨00286-371-固定电话号码，或00286+手机号、可发短信（便宜）；</p>
 						<p>8、如届时阿里山的路况不允许上山的话，则阿里山风景区换成溪头森林游乐区或台南 ；</p>
 						<p>9、因境外酒店按床位提供早餐券,故儿童不占床,境外不提供早餐,请自理 。 </p>
					</div>
		

				<div className="l-main-con-xian l-te">
						
						<p className="l-main-con-ts">客户点评</p>
						<hr />
							<div>
								<p className="l-man">满意度：<span className="l-num">{_this.state.arr.manyidu}%</span></p>
								<p className="l-ping"><span>回程归来发表点评即可获赠积分，获得的积分可在下次消费时抵用部分现金。</span></p>
								<p className="l-btn"><button>我要点评</button></p>
							</div>
						<hr className="l-h1"/>
					</div>

				
				<div className="l-main-con-xian">
						
						<p className="l-main-con-ts">我要咨询</p>
						<hr />
						
						<textarea className="l-txa" placeholder="请填写你的问题。。。"></textarea>
						<div className="l-tijiao">
							<span>手机号码：</span>
							<input type="text" />
							<span>昵称：</span>
							<input type="text" />
							<span>登陆</span>
							<span>验证码：</span>
							<input type="text" />
							<span></span>
							<input type="button" value="提交" className="l-ti"/>
						</div>
					</div>




			</div>
			</div>
		)
	}


	componentDidMount(){
			var _this=this

		$.ajax({
				url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
				type: 'post',
				dataType: 'jsonp',
				async:false,
				data: {goodsID:_this.props.params.id},
				success:function(data){
					_this.setState({
						chuan:data[0],
						img:JSON.parse(data[0].imgsUrl)
					})
					console.log(JSON.parse(data[0].imgsUrl))

				}
			}).then(function(){
				console.log($(".l-lt").eq(0).offsetWidth)
					$("#l-lb").css({
						width: ($(".l-lt").length*120),
						position:"absolute"
					});
					$(".l-img").eq(0).css({
					opacity: '1',
				});
			})
	
		window.onscroll=function(){
			if($("html").scrollTop()>820){
				$("#l-lie").css({"position":"fixed","top":"0px","left":"200px"})
			}else{
				$("#l-lie").css({"position":"relative","top":"0px","left":"0px"})
			}
		};
	}

		jian(){
			var _this=this;
			if(_this.state.pos<2){
				_this.setState({
				pos:1
			})
			}else{
				_this.setState({
				pos:this.state.pos-1
			})

			}
		}

		jia(){
			var _this=this;
			_this.setState({
				pos:this.state.pos+1
			})
		}



	xia(){     
			var _this=this
	 			console.log($(".l-lun").eq(0).offset().left+$(".l-lun").eq(0).width()-$("#l-lb").width())
	 		if($(".l-lun").eq(0).offset().left+$(".l-lun").eq(0).width()==$("#l-lb").offset().left+$("#l-lb").width()){
	 			$("#l-lb").css({
		 			left:($(".l-lun").eq(0).offset().left+$(".l-lun").eq(0).width()-$("#l-lb").width())+"px"
		 		})
	 		}else{
	 			_this.setState({
			 			lun:_this.state.lun-1
			 		})
	 			$("#l-lb").css({
		 			left:_this.state.lun*120+"px"
		 		})
	 		}
	 	}

	 	shang(){
	 			
	 			var _this=this
	 		if($(".l-lun").eq(0).offset().left==$("#l-lb").offset().left){
	 			_this.setState({
	 			lun:0
	 			})
	 			$("#l-lb").css({
		 			left:"0px"
		 		})
	 		}else{
	 			_this.setState({
	 			lun:_this.state.lun+1
	 			})
	 			$("#l-lb").css({
		 			left:(_this.state.lun)*120+"px"
		 		})
	 		}
	 	}

	 	tag(){
	 		var _this=this
	 		hashHistory.push({pathname:"/gouwuche",query:{id:_this.state.chuan.goodsID,num:_this.state.pos,price:_this.state.chuan.price}})
	 	}

}

export default About;