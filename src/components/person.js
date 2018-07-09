
import React from 'react';
import '../css/person.scss';
import '../font/iconfont.css';
import Store from '../redux/store.js';
import {Link,hashHistory} from 'react-router';
import $ from 'jquery';
class Person extends React.Component{
	constructor(props){
		super(props)
		this.state={
			user:Store.getState(),
			cont:null
		}
	}

	componentDidMount(){
		let _this = this;
		function shuju(){
			console.log(111111111111)
			$.ajax({
			url:'http://datainfo.duapp.com/shopdata/getCar.php',
			type:'get',
			data:{userID:'aaa'},
			dataType:'jsonp',
			success:function(data){
				_this.setState({
					cont:data
				})
				console.log(3333333)
				$('.p-del').click(function(e){
					let id = $(this).attr('data-id')
					console.log(id)
					 $.ajax({
		                url:'http://datainfo.duapp.com/shopdata/updatecar.php',
		                type:'post',
		                data:{userID:'aaa',goodsID:id,number:0},
		                success:function(data){

		                    if(data == 1){
		                    	alert('操作成功~!')
		                    	shuju()
		                    }else{
		                    	alert('系统出错辣~！')
		                    }
		                }
		             })
				})
			}
		})
		}
		shuju()
		
	}
	elem(){
		if(this.state.cont){
			return(
                    this.state.cont.map(function(item,i){
                        return(
                            <div key={i} className='pers-Con'>
                                <Link to={'/about/'+item.goodsID}>
                                    <img src={item.goodsListImg} alt=""/>
                                 </Link>    
                                    <div>
                                        <p>【{item.goodsName}】</p>
                                        <div>
                                            <p>  <i className="icon iconfont icon-importedlayers"></i>郑州出发</p>
                                            <p>价格 : <span>￥{item.price}</span></p>
                                            <p>数量 : <span>{item.number}</span></p>
                                        </div>
                                    </div>
                                    <em>
                                        <p>
                                            ￥{item.price*item.number}
                                        </p>
                                        <div>
                                            <button className='p-del' data-id={item.goodsID}>删除商品</button>
                                        </div>
                                    </em>
                               
                              
                            </div>
                        )
                    })
                            

			)
		}else{
			return(
				<div id='kk'>
					购物车空空如也~~
				</div>

			)
		}
	}


	render(){
		return(
			<div id='Person'>
				<p>个人中心</p>
				<section>
					<div id="section-left">
						<ul>
							<li className='light'>  <i className="icon iconfont icon-shouye"></i>会员首页</li>
							<li> <i className="icon iconfont icon-gouwuche1"></i>我的订单</li>
							<li>  <i className="icon iconfont icon-lvyou"></i>我的游记</li>
							<li><i className="icon iconfont icon-laba"></i>我的咨询</li>
							<li>  <i className="icon iconfont icon-jifen"></i>我的积分</li>
							<li> <i className="icon iconfont icon-user"></i>我的钱包</li>
							<li><i className="icon iconfont icon-ren"></i>个人中心</li>
							<li> <i className="icon iconfont icon-importedlayers"></i>常用信息</li>
						</ul>
					</div>
					<div id='section-right'>
						<header>
							<div id="header-left">
								<img src="http://www.aozhoutrip.com/res/images/member_nopic.png" alt="pic" />
								<div className='person-zl'>
									<h3>{this.state.user}</h3>
									<p>会员等级：普通</p>
									<p>登录邮箱：*********</p>
									<p>手机号码：11223344</p>
									<p>真实姓名：未完善</p>
								</div>
							</div>
							<div id='header-right'>
									<div id='pay'>
										<i className="icon iconfont icon-gouwuche1"></i>
										<p>未付款</p>
									</div>
									<div id='dp'>
										<i className="icon iconfont icon-user"></i>
										<p>未点评</p>
									</div>
									<div id='zx'>
										<i className="icon iconfont icon-laba"></i>
										<p>我的咨询</p>
									</div>
							</div>
						</header>
						<section>
							<h3><i className="icon iconfont icon-gouwuche1"></i>最新订单
								<span>
									查看更多
								</span>
							</h3>
							<div id='person-list'>
								{
									this.elem()
								}
							</div>
						</section>			
					</div>

				</section>

			</div>

		)
	}
}



export default Person;