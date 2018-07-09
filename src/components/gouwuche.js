import React, { Component } from 'react';
import {Router,Route,hashHistory,IndexRedirect,IndexRoute,Link} from 'react-router';
import $ from 'jquery';
import Action from '../redux/action'
import Renducer from '../redux/renducer'
import Stor from '../redux/store'



class Gouwuche extends Component{
    constructor(porps){
        super(porps)
        this.state={
            jing:'',
            yan:'',
            user:Stor.getState(),
            price:'',
            name:'稍等-'
        }
    }
    componentWillMount(){
      
    }
    change(a){
        this.setState({user:Stor.getState()})
    }
    componentDidMount(){
        
        var _this=this;
        let id = this.props.location.query.id
        let num = this.props.location.query.num
        console.log(this.props.location.search)
        $.ajax({
            url: 'http://datainfo.duapp.com/shopdata/getGoods.php',
            type: 'post',
            async:false,
            dataType: 'jsonp',
            data: {goodsID:id},
            success:function(data){
                _this.setState({
                    price:data[0].price,
                    name:data[0].goodsName,
                    jing:data[0].price*num
                })
                console.log(data)

            }
        })


        ////////////////////////////////////////////

        var jg=$('.zdanjia').html()
        _this.setState({jing:jg})
        $(function(){
            var arr='';
            $('#ztb_in').val(num)
            $('.zjian').click(function(){
                
                num++;
                $('#ztb_in').val(num)
                $('.zxiaoji').html($('.zdanjia').html()*num)
                arr=$('.zxiaoji').html()
                _this.setState({jing:arr})
            })
            $('.zjia').click(function(){
                if(num>1){
                    num--;
                    $('#ztb_in').val(num)
                    $('.zxiaoji').html($('.zdanjia').html()*num)
                    arr=$('.zxiaoji').html()                   
                    _this.setState({jing:arr})
                }
            })
            
          
        })
        // 结算
        Stor.subscribe(this.change.bind(this))

        var yanz=Math.floor(Math.random()*900000+100000)
        _this.setState({yan:yanz})
        var users=_this.state.user;
        $(function(){
            $('#zsuiji').click(function(){
                yanz=Math.floor(Math.random()*900000+100000)
                _this.setState({yan:yanz})
            })
            $('.ztijao_1').click(function(){
                
                var zval=$('#zsuiji1').val()
                var zavl1=$('#zsuiji').html()
                console.log(zavl1)
                if(zval != ''){
                     if(zavl1===zval){
                        console.log(users)
                        alert('请输入正确验证码')
                        if(users!==undefined){
                            $.ajax({
                                url:'http://datainfo.duapp.com/shopdata/updatecar.php',
                                type:'post',
                                dataType:'jsonp',
                                data:{userID:'001',goodsID:id,number:num},
                                success:function(data){
                                    console.log(data)
                                    alert('成功')
                                    hashHistory.push('/person')
                                }
                            })
                        }else{
                            alert("请登录")
                            hashHistory.push('/login')
                        }
                        
                    }else{
                        alert("验证码错误，请重试")
                    }
                }else{
                    alert("请输入验证码")
                }
               
            })
        })
        
        
    }
    render(){
        return(
            <div id="zgouwu">
                <div className="zhenav">
                    <span className="zh_y"><Link to="">旅行社</Link><span>></span><span>热门路线</span></span>
                    <span>游记攻略</span><span>私人订制</span>
                </div>
                {/* 结算 */}
                <div className="zsection">
                    <div className="zsection_left">
                        <div className="zsection_h">
                            <h2>
                                【{this.state.name}】
                            </h2>
                            <div>产品编号：{this.props.location.query.id}</div>
                        </div>
                        <ul className="zsection_ul">
                            <li><span>套餐预定:</span><b>1</b></li>
                            <li><span>预订方式:</span><b>全额预定</b></li>
                            <li><span>出发日期:</span><input type="text"/></li>
                            <li className="zsection_ta"><span className="ztb_span">价格明细:</span>
                                <table>
                                    <tr>
                                        <th>人群/补差</th>
                                        <th>单价</th>
                                        <th>数量</th>
                                        <th>小计</th>
                                    </tr>
                                    <tr>
                                        <th>成人</th>
                                        <th><span className="zdanjia">{this.state.price}</span></th>
                                        <th className="zhjj"><div><span className="zjia">-</span><input type="text" id="ztb_in"/><span className="zjian">+</span></div></th>
                                        <th className="zhjj1"><b>￥</b><span className="zxiaoji">{this.state.jing}</span></th>
                                    </tr>
                                </table>
                            </li>
                            
                        </ul>
                    </div>
                    {/* 结算侧边栏 */}
                    <div className="zaside">
                        <h2>结算信息</h2>
                        <div className="zaside_1">
                            <h4>预定明细</h4>
                            <ul className="zaside_2">
                                <li><span>预定方式</span><b>全额预定</b></li>
                                <li><span>预定时间</span><b>20180701</b></li>
                                <li><span>出发时间</span><b>20180701</b></li>
                                <li><span>预定套餐</span><b>1</b></li>
                                <li><span>成人</span><b>￥<a>{this.state.jing}</a></b></li>
                            </ul>
                        </div>
                        <div  className="zaside_3">
                            <div className="zaside_31">
                                <li>预定总额</li>
                                <li><b>￥</b><span>{this.state.jing}</span></li>
                            </div>
                            
                            <div className="zaside_32">
                                <li>应付总额</li>
                                <li><b>￥</b><span>{this.state.jing}</span></li>
                            </div>
                        </div>
                    </div>
                     {/* 旅客联系人 */}
                    <div className="zliaxi">
                        <h1>联系人信息</h1>
                        <div className="zlixia_1">
                            <div>
                                <span>姓名：</span><input type="text"/>
                            </div>
                            <div>
                                <span>手机：</span><input type="text"/>
                            </div>
                            <div>
                                <span>邮箱：</span><input type="text"/>
                            </div>
                            <div className="ztextarea">
                                <span>预定备注：</span>
                                <textarea>

                                </textarea>
                            </div>
                        </div>
                        
                    </div>
                    {/* 旅客信息 */}
                    <div className="zlvke_1">
                        <h2>旅客信息</h2>
                        <div className="zlvkea">
                            <div className="zlv_1">旅客1</div>
                            <div className="zlv_2"><span><b>*</b>旅客姓名：</span><input type="text"/></div>
                            <div className="zlv_3"><span><b>*</b>旅客性别：</span><input type="radio" name="aa" value="男"/><i>男</i><input type="radio" name="aa" value="女"/><i>女</i></div>
                            <div className="zlv_2"><span><b>*</b>手机号码：</span><input type="text"/></div>
                            <div className="zlv_4"><span><b>*</b>证件类型：</span>
                                <select>
                                    <option>身份证</option>
                                    <option>台胞证</option>
                                    <option>港澳通行证</option>
                                    <option>军官证</option>
                                    <option>护照</option>
                                </select>
                            </div>
                            <div className="zlv_2"><span><b>*</b>证件号码：</span><input type="text"/></div>
                            <div className="zlv_5"><input type="checkbox" id="zcucun"/><span>储存为常用联系人</span></div>
                            
                        </div>
                        <div className="zlvkea">
                            <div className="zlv_1">旅客2</div>
                            <div className="zlv_2"><span><b>*</b>旅客姓名：</span><input type="text"/></div>
                            <div className="zlv_3"><span><b>*</b>旅客性别：</span><input type="radio" name="aa" value="男"/><i>男</i><input type="radio" name="aa" value="女"/><i>女</i></div>
                            <div className="zlv_2"><span><b>*</b>手机号码：</span><input type="text"/></div>
                            <div className="zlv_4"><span><b>*</b>证件类型：</span>
                                <select>
                                    <option>身份证</option>
                                    <option>台胞证</option>
                                    <option>港澳通行证</option>
                                    <option>军官证</option>
                                    <option>护照</option>
                                </select>
                            </div>
                            <div className="zlv_2"><span><b>*</b>证件号码：</span><input type="text"/></div>
                            <div className="zlv_5"><input type="checkbox" id="zcucun"/><span>储存为常用联系人</span></div>
                            
                        </div>

                    </div>
                    <div className="zjie">
                        <div className="zjiesuan"><span>应付总金额：</span><b>￥<span>{this.state.jing}</span></b></div>
                        <div className="ztijiao">
                            <div>
                                <span className="zjiespan">验证码：</span><span id="zsuiji">{this.state.yan}</span><input type="text" id="zsuiji1" placeholder="请输入验证码"/>
                                <button className="ztijao_1">提交订单</button>
                            </div>
                            
                        </div>
                        <div></div>
                    </div>

                </div>
               
            </div>
        )
    }
}
// 侧边栏
$(function(){
    $(window).scroll(function(){
        var stop=$("html,body").scrollTop();
        // console.log(stop)
        if(stop>250){
           
            $('.zaside').css({"position":"absolute","top":stop-250});
            // console.log(stop)
        }else{
            $('.zaside').css({"position":"absolute","top":0});
        }
    })
})



export default Gouwuche;