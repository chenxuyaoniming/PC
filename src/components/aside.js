import React from 'react'
import '../font/iconfont.css'

import $ from 'jquery'
class Aside extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id='aside'>
                <div id='g-phone'>
                    联系我们
                </div>
                <i className="icon iconfont icon-weibo"></i>
                <i className="icon iconfont icon-weixin1"></i>
                <p id='aside-top'>
                    TOP
                </p>
                <span className="icon iconfont icon-x" id='aside-close'></span>
                <strong className="icon iconfont icon-fuli" id='aside-open'></strong>
            </div>
        )
    }
}
$(function(){
    $("#aside-close").click(function(){
        $('#aside').stop().animate({
            left: -34
        },400)
        $('#aside-open').stop().animate({
            left:34
        },400)
    })
    $('#aside-open').click(function(){
        $(this).stop().animate({
            left:-50
        },400)
        $('#aside').stop().animate({
            left:0
        },400)
    })
    $('#aside-top').click(function(e){
        $('html,body').stop().animate({
            scrollTop:0
        },400)

    })
})


export default Aside;