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
                {/* <Steps current={1} progressDot={customDot}>
                    <Step title="Finished" description="You can hover on the dot." />
                    <Step title="In Progress" description="You can hover on the dot." />
                    <Step title="Waiting" description="You can hover on the dot." />
                    <Step title="Waiting" description="You can hover on the dot." />
                </Steps>, */}
                </div>
            </div>
        )
    }
}

export default Retrieve;