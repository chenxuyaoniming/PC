import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router';
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            telError:null,
            passError:null
        }
    }
    //判断手机号
    telCheck(event){
        this.tel=event.target.value
        console.log(this.tel)
        var reg=/^1[34578]\d{9}$/
        if(reg.test(this.tel)==false){
            this.setState({
                telError:'请输入正确的手机号'
            })
        }else{
            this.setState({
                telError:''
            })
        }
    }
    //判断密码
    passCheck(event){
        this.pass=event.target.value
        var reg=/^\w{6,20}$/;
        if(reg.test(this.pass)==false){
            this.setState({
                passError:'密码为6-20位数字字母下划线'
            })
        }else{
            this.setState({
                passError:''
            })
        }
    }
    render(){
        return(
            <div className='Register-big'>
                <div className='M-box'>
                    <div className='M-box-left'>
                        <div className='box-left-top'>
                            <span className='left-top-1'>手机注册</span>
                            <i></i>
                            <span className='left-top-2'>邮箱注册</span>
                        </div>
                            <div className='phone'>
                                <div className='div1'><span className='bt-left'>登录账号</span><input type='text' placeholder='请输入手机号' onBlur={(event)=>this.telCheck(event)} /></div>
                                <div className='div2'><span className='bt-left'>验证码</span><input type='text' /><span className='yzmm'></span><span className='replace'>换一张</span></div>
                                <div className='div3'><span className='bt-left'>动态密码</span><input type='text'/><span className='yzmm'>获取验证码</span></div>
                                <div className='div4'><span className='bt-left'>密码</span><input type='text' placeholder='请输入登录密码' onBlur={(event)=>this.passCheck(event)} /></div>
                                <div className='div5'><span className='bt-left'>确认密码</span><input type='text' placeholder='请再次输入登录密码' /></div>
                                <button className='register'>立即注册</button>
                            </div>
                            <div className='email'>
                                <div className='div1'><span className='bt-left'>登录账号</span><input type='text' placeholder='请输入手机号' /></div>
                                <div className='div2'><span className='bt-left'>验证码</span><input type='text' /><span className='yzmm'></span><span className='replace'>换一张</span></div>
                                <div className='div4'><span className='bt-left'>密码</span><input type='text' placeholder='请输入登录密码' /></div>
                                <div className='div5'><span className='bt-left'>确认密码</span><input type='text' placeholder='请再次输入登录密码' /></div>
                                <button className='register'>立即注册</button>
                            </div>
                    </div>
                    <div className='M-box-right'>
                        <p className='right-p1'>已有账号,<Link to='/login'><a>立即登录</a></Link></p>
                        <p className='right-p2'>使用其他方式登录</p>
                    </div>

                </div>
            </div>    
        )
    }
}

$(function(){
    $('.left-top-1').click(function(){
        $('.left-top-1').css({'color':'red','border-bottom':'2px solid red'})
        $('.left-top-2').css({'color':'black','border-bottom':'none'})
        $('.phone').css('display','block')
        $('.email').css('display','none')
    })
    $('.left-top-2').click(function(){
        $('.left-top-1').css({'color':'black','border-bottom':'none'})
        $('.left-top-2').css({'color':'red','border-bottom':'2px solid red'})
        $('.phone').css('display','none')
        $('.email').css('display','block')
    })
})
export default Register;
