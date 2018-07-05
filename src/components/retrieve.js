import React from 'react'
import bgimg from '../img/bg.jpg'
const homeimg={
    backgroundSize:'100% 100%',
    backgroundImage:'url('+bgimg+')'
}
// import { Steps} from 'antd'

// const Step = Steps.Step

class Retrieve extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='eve-big' style={homeimg}>
                <div className='center'>
                    <p>找回密码</p>
                    {/* <Steps size="small" current={1}>
                        <Step title="Finished" />
                        <Step title="In Progress" />
                        <Step title="Waiting" />
                    </Steps> */}
                    
                </div>
            </div>
        )
    }
}

export default Retrieve;