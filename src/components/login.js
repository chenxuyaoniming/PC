import React from 'react';
import '../font/iconfont.css'
import { Link } from 'react-router';
import bgimg from '../img/bg1.jpg'
const homeimg={
    backgroundSize:'100% 100%',
    backgroundImage:'url('+bgimg+')'
}
class Login extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='warp' style={homeimg}>
                <div className='box'>
                    <div className='user'>
                        <i className='icon iconfont icon-ren'></i>
                        <input type='text' ref='username' placeholder='请输入手机号或邮箱' />
                    </div>
                    <div className='pass'>
                        <i className='icon iconfont icon-z-password'></i>
                        <input type='text' ref='password' placeholder='请输入密码' />
                    </div>
                    <Link to='/retrieve'><span className='forget'>忘记密码？</span></Link>
                    <button className='login'>登录</button>
                    <p className='p1'>您还没有账号？<Link to='/register'><em>立即注册</em></Link></p>
                    <p className='p2'>使用其他方式登录<em></em></p>
                </div>
            </div>
        )
    }
}


export default Login;