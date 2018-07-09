import React from 'react';
import '../font/iconfont.css'
import { Link } from 'react-router';
import bgimg from '../img/bg1.jpg'//引入要使用的背景图 通过声明homeing来保存图片属性 虽然不知道为什么这样写 但他就是对了
import {hashHistory} from 'react-router'
import $ from 'jquery'
import action from '../redux/action'
import store from '../redux/store'
/////////添加背景图片///////////////
const homeimg={
    backgroundSize:'100% 100%',
    backgroundImage:'url('+bgimg+')'
}
class Login extends React.Component{
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
/////////////////登录/////////////////////
    login(){
        var phonenum=this.refs.username.value
        var pass=this.refs.password.value
        $.ajax({
            type:'get',
            url:'http://localhost:9000/login',
            async:true,
            data:{phonenum:phonenum,pass:pass},
            success:function(data){
                if(data==1){
                    alert('登录成功')
                    sessionStorage.setItem('user',phonenum)
                    store.dispatch(action(phonenum))
                    console.log(store.getState())
                    hashHistory.push('/home')
                }else{
                    alert('用户名不存在或密码错误')
                }
            }
        })
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
                    <button onClick={this.login.bind(this)} className='login'>登录</button>
                    <p className='p1'>您还没有账号？<Link to='/register'><em>立即注册</em></Link></p>
                    <p className='p2'>使用其他方式登录<em></em></p>
                </div>
            </div>
        )
    }
}


export default Login;