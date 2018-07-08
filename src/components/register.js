import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router';
import bgimg from '../img/bg1.jpg'  
import { hashHistory } from 'react-router'
// import GVerify from './gVerify.js'
const homeimg={
    backgroundSize:'100% 100%',
    backgroundImage:'url('+bgimg+')'
}
class Register extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     telError:null,
        //     passError:null
        // }
    }

    //判断手机号
    // telCheck(event){
    //     this.tel=event.target.value
    //     console.log(this.tel)
    //     var reg=/^1[34578]\d{9}$/
    //     if(reg.test(this.tel)==false){
    //         this.setState({
    //             telError:'请输入正确的手机号'
    //         })
    //     }else{
    //         this.setState({
    //             telError:''
    //         })
    //     }
    // }
   

    //判断密码
    // passCheck(event){
    //     this.pass=event.target.value
    //     var reg=/^\w{6,20}$/;
    //     if(reg.test(this.pass)==false){
    //         this.setState({
    //             passError:'密码为6-20位数字字母下划线'
    //         })
    //     }else{
    //         this.setState({
    //             passError:''
    //         })
    //     }
    // }
    register(){
        var id=$(this).attr('data-id')
        console.log(id)
        if(id==1){
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
                            hashHistory.push('/login')
                        }else if(data==2){
                            alert('手机验证码错误')
                        }else{
                            alert('该手机号已被注册过！请直接登录')
                        }
                    }
                })
            }
        }else{
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
                                <button onClick={this.register.bind(this)} data-id='1' className='register'>立即注册</button>
                            </div>
                            <div className='email'>
                                <div className='div1'><span className='bt-left'>登录账号</span><input type='text' ref='email' placeholder='请输入邮箱账号' /></div>
                                <div className='div2'><span className='bt-left'>验证码</span><input type='text' className='code_input' /><span id='v_conta' className='yzmm'></span></div>
                                <div className='div4'><span className='bt-left'>密码</span><input type='text'ref='emailpass' placeholder='请输入登录密码' /></div>
                                <div className='div5'><span className='bt-left'>确认密码</span><input type='text' ref='emailpass1' placeholder='请再次输入登录密码' /></div>
                                <button data-id='2' onClick={this.register.bind(this)} className='register'>立即注册</button>
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
            // var verifyCode = new GVerify('v_container');            
            // var emailCode = new GVerify('v_conta');            
            // $('.register').click(function(){
            //     var res=verifyCode.validate(document.getElementsByClassName('code_input').value);
            //     if(res){
            //         alert('验证正确')
            //     }else{
            //         alert('不行')
            //     }
                // console.log($(this).attr('data-id'))
                // var id=$(this).attr('data-id')
                // if(id==1){
                //     var res=verifyCode.validate(document.getElementsByClassName('code_input').value);
                //  if(res){
                //     alert('图形验证正确')
                //     }else{
                //      alert('图形验证码错误')
                //  }
                 
                // // }else{
                // //     var req=emailCode.validate($('.code_input').val);
                // //     if(req){
                // //         alert('图形验证正确')
                // //     }else{
                // //         alert('图形验证码错误')
                // //     }
                // // }
            // })

        })
    }
}
export default Register;
