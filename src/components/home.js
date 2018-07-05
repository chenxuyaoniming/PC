import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery'
import '../data/banner'
import '../data/gblist'
import '../font/iconfont.css'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            banner: [],
            city: [],
            city2: []
        }
    }
    componentDidMount() {
        let _this = this;
        $.ajax({
            type: 'post',
            url: "http://bannerlist/api",
            data: { id: 1 },
            async: true,
            dataType: 'json',
            success: function (data) {
                _this.setState({
                    city: data.list
                })
                _this.state.city.map(function (item) {
                    var tit = `<p>${item.tit}</p>`;
                    var oI = `<i>1</i>`
                    var ob = `<b class="icon iconfont icon-fenqu"></b>`
                    var $oD = $('<div class="gBannerList"></div>')
                    var str1 = '';
                    item.city.map(function (a) {
                        str1 += `<span>${a}</span>`
                    })
                    $oD.append(tit, ob,oI, str1)
                    $("#g-list-left").append($oD)
                })
            }
        });
        $.ajax({
            type: 'post',
            url: "http://bannerlist/api",
            data: { id: 2 },
            async: true,
            dataType: 'json',
            success: function (data) {
                _this.setState({
                    city2: data.list
                })
                _this.state.city2.map(function (item) {
                    var tit = item.city.tit
                    var oD = $(`<div class="gListBox"><p>${tit}</p></div>`)
                    var sec = item.city.second
                    var str = '';
                    sec.map(function (item) {
                        str += `<span>${item}</span>`
                    })
                    oD.append(str)
                    $("#g-list").append(oD)
                })
            }
        })
    }
    move(e) {
        console.log(e.target)
    }
    render() {
        return (
            <div>
                <div id="gBanner-wrap">
                    <Link to="/" className='gBannerL'><img src="http://www.aozhoutrip.com/uploads/2018/0316/f8dda50e1e258891487c843d04007e39_1920x420.jpg" className="gBannerImg" /></Link>
                    <Link to="/" className='gBannerL'><img src="http://www.aozhoutrip.com/uploads/2018/0415/d84066c742ca387ab49f0d6322c45076_1920x420.jpg" className="gBannerImg" /></Link>

                    <div id='gd'>
                        <span ></span>
                        <span className='bgcolor'></span>
                    </div>
                    <div id="g-list">
                        <div id="g-list-left" ref='gList'>
                        </div>
                    </div>
                </div>
                <div id='gContent-wrap'>
                    <div id='gContent'>
                        <h2>热门推荐</h2>
                        <div className="gContentlist">
                        
                        </div>
                        <Link to='/list'>
                            查看更多产品
                        </Link>
                    </div>
                </div>
                <div id="gMore-wrap">
                    <div id='gMore'>
                    
                    </div>
                </div>

            </div>


        )
    }

}

$(function () {
    $('#g-list-left').mousemove(function (e) {
        var dom = e.target
        if (dom.className === 'gBannerList') {
            let index = $('.gBannerList').index(dom)
            $(".gListBox").hide()
            $(".gListBox").eq(index).show()
        }
    })
    $('#g-list-left').mouseleave(function () {
        $(".gListBox").hide()
    })

    ////////////////轮播//////////////////////
    let count = 1
 
    function banner(){
       
        $("#gd").find('span').eq(count).addClass("bgcolor").siblings().removeClass("bgcolor")
        $(".gBannerL").stop().fadeOut(500)
        $(".gBannerL").eq(count).stop().fadeIn(500)
    }
    setInterval(function(){
        count++
        if(count>=2){
            count = 0
        }
        banner(count)
     },5000)
    $("#gd").find('span').click(function(){
        let index = $("#gd").find('span').index(this)
        count = index
        banner(count)
    })

})




export default Home;