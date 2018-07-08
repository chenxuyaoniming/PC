import React from 'react'

class Geren extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='geren-box'>
                <div className='user-side'>
                    <ul>
                        <li>我的订单</li>
                        <li>我的游记</li>
                        <li>我的咨询</li>
                        <li>我的积分</li>
                        <li>我的钱包</li>
                        <li>个人中心</li>
                        <li>常用信息</li>
                        <li>我的消息</li>
                    </ul>
                </div>
                <div className='user-order'></div>
            </div>

        )
    }
}



export default Geren;