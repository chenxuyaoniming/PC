import React from 'react'


class Register extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='M-box'>
                <div className='M-box-left'>
                    <div className='box-left-top'>
                        <span>手机注册</span>
                        <span>邮箱注册</span>
                    </div>
                <div><span>登录账号</span><input type='text' placeholder='请输入手机号' /></div>
                <div><span>验证码</span><input type='text' /><span></span><span>换一张</span></div>
                <div><span>动态密码</span><input type='text'/><span>获取验证码</span></div>
                <div><span>密码</span><input type='text' placeholder='请输入登录密码' /></div>
                <div><span>确认密码</span><input type='text' placeholder='请再次输入登录密码' /></div>
                <button className='register'>立即注册</button>
                </div>
                <div className='M-box-right'></div>
            </div>
        )
    }
}



export default Register;
