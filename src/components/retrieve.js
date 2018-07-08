import React from 'react'
import bgimg from '../img/bg.jpg'
const homeimg={
    backgroundSize:'100% 100%',
    backgroundImage:'url('+bgimg+')'
}
class Retrieve extends React.Component{
    constructor(props){
        super(props)
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
                </div>
            </div>
        )
    }
}

export default Retrieve;