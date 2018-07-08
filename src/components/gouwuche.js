import React, { Component } from 'react';
import { Link } from 'react-router';

import $ from 'jquery';

class Gouwuche extends Component{
    constructor(porps){
        super(porps)
        this.state={
            jing:''
        }
    }
    componentDidMount(){
        
        var _this=this;
        var jg=$('.zdanjia').html()
        _this.setState({jing:jg})
        $(function(){
            var i=1;
            var arr='';
            $('#ztb_in').val(i)
            $('.zjian').click(function(){
                
                i++;
                $('#ztb_in').val(i)
                $('.zxiaoji').html($('.zdanjia').html()*i)
                arr=$('.zxiaoji').html()
                // console.log(arr)
                _this.setState({jing:arr})
            })
            $('.zjia').click(function(){
                if(i>1){
                    i--;
                    $('#ztb_in').val(i)
                    $('.zxiaoji').html($('.zdanjia').html()*i)
                    arr=$('.zxiaoji').html()
                    
                    _this.setState({jing:arr})
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
                                【圆梦-丝路小环线】青海+甘肃高铁往返7日游无购物无自费
                            </h2>
                            <div>产品编号：11150</div>
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
                                        <th><span className="zdanjia">4380</span></th>
                                        <th className="zhjj"><div><span className="zjia">-</span><input type="text" id="ztb_in"/><span className="zjian">+</span></div></th>
                                        <th className="zhjj1"><b>￥</b><span className="zxiaoji">4380</span></th>
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
                                <li><span>成人</span><b>￥<a>4380</a></b></li>
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
// 加减结算
// $(function(){
//     var i=1;
//     $('#ztb_in').val(i)
//     $('.zjian').click(function(){
        
//         i++;
//         $('#ztb_in').val(i)
//         $('.zxiaoji').html($('.zdanjia').html()*i)
//     })
//     $('.zjia').click(function(){
//         if(i>1){
//             i--;
//             $('#ztb_in').val(i)
//             $('.zxiaoji').html($('.zdanjia').html()*i)
//         }
//     })
    
//     console.log($('.zxiaoji').html())
    
// })

export default Gouwuche;