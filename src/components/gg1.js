import React from 'react'
import $ from 'jquery'

class G1 extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(

            <div id='gg1'>
                <span id='g1-res'>X</span>
                <div id='welcom'>
                    <p>郑州康辉国际旅行社欢迎您</p>
                    <p>您的咨询</p>
                    <p>咨询热线：13333333333</p>
                </div>
                <a href="#">稍后再说</a>
                <a href="#">现在咨询</a>
            </div>
        )

    }
}
$(function(){
    function toShow(){
        $('#gg1').show()
    }
    $('#g1-res').click(function(){
        $("#gg1").hide()
        setTimeout(function(){
            toShow()
        },60000)
    })

})

export default G1 ;