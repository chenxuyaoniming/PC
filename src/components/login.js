import React from 'react';



class Login extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='warp'>
                <div className='box'>
                    <div className='user'>
                        <i></i>
                        <input type='text' ref='ipt' placeholder='请输入手机号或邮箱' />
                    </div>
                    <div className='pass'>
                        <i></i>
                        <input type='text' ref='ipt1' placeholder='请输入密码' />
                    </div>
                    <span>忘记密码？</span>
                    <button className='login'>登录</button>
                    <p className='p1'>您还没有账号？<em>立即注册</em></p>
                    <p className='p2'>使用其他方式登录<em></em></p>
                </div>
            </div>
        )
    }
}
export default Login;