import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router';
import bgimg from '../img/bg1.jpg'  
import { hashHistory } from 'react-router'
import action from '../redux/action'
import store from '../redux/store'
// import GVerify from './gVerify.js'
const homeimg={
    backgroundSize:'100% 100%',
    backgroundImage:'url('+bgimg+')'
}
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:store.getState()
        }
        this.onchanges=this.onchanges.bind(this)
    }
    onchanges(){
		this.setState({arr:store.getState()})
	}
	componentDidMount(){
//		监听
		store.subscribe(this.onchanges)
	}
    register(){
            var phoneNumber=this.refs.phoneNumber.value;
            var yzmm=this.refs.yzmm.value;
            var yzm=this.refs.yzm.value;
            var pass=this.refs.pass.value;
            var pass1=this.refs.pass1.value;
            var reg=/^1[34578]\d{9}$/
            if(reg.test(phoneNumber)==false){
                alert('请输入正确的手机号')
            }else if(pass!=pass1){
                alert('两次密码不一致')
            }else{
                $.ajax({
                    type:'post',
                    url:'http://localhost:9000/register',
                    async:true,
                    data:{phonenum:phoneNumber,id:'2',pass:pass,yzm:yzm},
                    success:function(data){
                        console.log(data)
                        if(data==1){
                            alert('注册成功')
                            hashHistory.push('/home')
                            store.dispatch(action(phoneNumber))
                            console.log(store.getState())
                        }else if(data==2){
                            alert('手机验证码错误')
                        }else{
                            alert('该手机号已被注册过！请直接登录')
                        }
                    }
                })
            }
        
    }
    email(){
            var email=this.refs.email.value
            var emailpass = this.refs.emailpass.value
            var emailpass1=this.refs.emailpass1.value
            var emailreg=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
            if(emailreg.test(email)==false){
                alert('邮箱格式错误')
            }else{
                $.ajax({
                    type:'post',
                    url:'http://localhost:9000/register-email',
                    data:{email:email,emailpass:emailpass},
                    success:function(data){
                        if(data==3){
                            alert('该邮箱已被注册过！请直接登录')
                        }else{
                            alert('注册成功')
                            hashHistory.push('/home')
                        }
                    }
                })
            }
    }
    send(){
        var reg=/^1[34578]\d{9}$/
        var phoneNumber=this.refs.phoneNumber.value;
        var pass=this.refs.pass.value;
        if(reg.test(phoneNumber)==false){
            alert('请输入正确的手机号')
         }else{
            $.ajax({
                type:'post',
                url:'http://localhost:9000/register',
                async:true,
                data:{phonenum:phoneNumber,id:'1',pass:pass},
                success:function(data){
                    console.log(data)
                }

            })
            alert('验证码已发送')
         }
    }

    render(){
        return(
            <div className='Register-big' style={homeimg}>
            <div className='M-box'>
                    <div className='M-box-left'>
                        <div className='box-left-top'>
                            <span className='left-top-1'>手机注册</span>
                            <i></i>
                            <span className='left-top-2'>邮箱注册</span>
                        </div>
                            <div className='phone'>
                                <div className='div1'><span className='bt-left'>登录账号</span><input ref='phoneNumber' type='text' placeholder='请输入手机号' /></div>
                                <div className='div2'><span className='bt-left'>验证码</span><input ref='yzmm' type='text' className='code_input' /><span id='v_container' className='yzmm'></span></div>
                                <div className='div3'><span className='bt-left'>动态密码</span><input ref='yzm' type='text'/><span onClick={this.send.bind(this)} className='yzmm'>获取验证码</span></div>
                                <div className='div4'><span className='bt-left'>密码</span><input ref='pass' type='text' placeholder='请输入登录密码' /></div>
                                <div className='div5'><span className='bt-left'>确认密码</span><input ref='pass1' type='text' placeholder='请再次输入登录密码' /></div>
                                <button onClick={this.register.bind(this)} className='register'>立即注册</button>
                            </div>
                            <div className='email'>
                                <div className='div1'><span className='bt-left'>登录账号</span><input type='text' ref='email' placeholder='请输入邮箱账号' /></div>
                                <div className='div2'><span className='bt-left'>验证码</span><input type='text' className='code_input' /><span id='v_conta' className='yzmm'></span></div>
                                <div className='div4'><span className='bt-left'>密码</span><input type='text'ref='emailpass' placeholder='请输入登录密码' /></div>
                                <div className='div5'><span className='bt-left'>确认密码</span><input type='text' ref='emailpass1' placeholder='请再次输入登录密码' /></div>
                                <button onClick={this.email.bind(this)} className='register'>立即注册</button>
                            </div>
                    </div>
                    <div className='M-box-right'>
                        <p className='right-p1'>已有账号,<Link to='/login'><em>立即登录</em></Link></p>
                        <p className='right-p2'>使用其他方式登录</p>
                    </div>
                </div>
            </div>    
        )
    }
componentDidMount(){
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
    }
}
export default Register;
