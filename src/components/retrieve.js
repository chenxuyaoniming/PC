import React from 'react'
import bgimg from '../img/bg.jpg'
import $ from 'jquery'
import '../font/iconfont.css'
import {hashHistory} from 'react-router'
const homeimg={
    backgroundSize:'100% 100%',
    backgroundImage:'url('+bgimg+')'
}
class Retrieve extends React.Component{
    constructor(props){
        super(props)
    }
    next3(){
        hashHistory.push('/login')
    }
    render(){
        return(
            <div className='eve-big' style={homeimg}>
                <div className='center'>
                    <p>找回密码</p>
                    <div className='step'>
                        <div className='step1'>
                            <span className='step1-1'>
                                <i>1</i>
                                <em>验证身份</em>
                            </span>
                        </div>
                        <div className='step2'>
                            <span className='step2-1'>
                                <i>2</i>
                                <em>重置密码</em>
                            </span>
                        </div>
                        <div className='step3'>
                            <span className='step3-1'>
                                <i>3</i>
                                <em>完成</em>
                            </span>
                        </div>
                    </div>
                    <div className='main-box1'>
                        <div className='div1'><span className='bt-left'>登录账号:</span><input ref='phoneNumber' type='text' placeholder='请输入手机号' /></div>
                        <div className='div2'><span className='bt-left'>验证码:</span><input ref='yzmm' type='text' className='code_input' /><span id='v_container' className='yzmm'></span></div>
                        <button className='next'>下一步</button>
                    </div>
                    <div className='main-box2'>
                        <div className='div1'><span className='bt-left'>账号:</span><div className='main-box2-1'></div></div>
                        <div className='div3'><span className='bt-left'>动态验证码:</span><input ref='yzm' type='text'/><span className='yzmm'>获取验证码</span></div>
                        <div className='div4'><span className='bt-left'>设置新密码:</span><input ref='pass' type='text' placeholder='请输入登录密码' /></div>
                        <div className='div5'><span className='bt-left'>确认新密码:</span><input ref='pass1' type='text' placeholder='请再次输入登录密码' /></div>
                        <button className='next2'>下一步</button>
                    </div>
                    <div className='main-box3'>
                        <div>
                            <i className='icon iconfont'>&#xe650;</i>
                        </div>
                        <span>修改成功</span>
                        <button onClick={this.next3.bind(this)} className='next3'>去登陆</button>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        $(function(){
            $('.next').click(function(){
                $('.main-box1').css('display','none')
                $('.main-box2').css('display','block')
                $('.step2').css('background','deepskyblue')
                $('.step2-1').find('i').css('background','deepskyblue')
                $('.step2-1').find('em').css('display','block')
            })
            $('.next2').click(function(){
                $('.main-box2').css('display','none')
                $('.main-box3').css('display','block')
                $('.step3').css('background','deepskyblue')
                $('.step3-1').find('i').css('background','deepskyblue')
                $('.step3-1').find('em').css('display','block')
            })
        })
    }


}

export default Retrieve;