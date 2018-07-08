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
            city2: [],
            con:[],
            oldman:[],
            ym:[]
        }
    }





    render() {
        return (
            <div>
 
                <div id="gBanner-wrap">
                    <Link to="/" className='gBannerL'><img src="http://www.aozhoutrip.com/uploads/2018/0316/f8dda50e1e258891487c843d04007e39_1920x420.jpg" className="gBannerImg" /></Link>
                    <Link to="/" className='gBannerL'><img src="http://www.aozhoutrip.com/uploads/2018/0415/d84066c742ca387ab49f0d6322c45076_1920x420.jpg" className="gBannerImg" /></Link>
                  
                    
                    <div id="g-list">
                        <div className="box">
                            <div id="g-list-left" ref='gList'>
                            </div>
                            <div id='gd'>
                                <span ></span>
                                <span className='bgcolor'></span>
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
                <div id='gContent-wrap'>
                    <div id='gContent'>
                        <h2>热门推荐</h2>
                        <div className="gContentlist">
                            {
                                 this.state.con.map(function(item){
                                    return(<div className='goodspr' key={item.id}>
                                                <Link to={"/about/"+item.id}>
                                                    <div>
                                                        <img src={item.img} />
                                                    </div>
                                                    <h3>{item.address}</h3>
                                                </Link>
                                                <p>
                                                    <span>￥<b>{item.price}</b>起</span>
                                                    <em>满意度<i>{item.good}</i>%</em>
                                                </p>
                                            </div>
                                        )    
                                })
                            }
                        </div>
                        <Link to='/list'>
                            查看更多产品
                        </Link>
                    </div>
                </div>
                <div id="gMore-wrap">
                    <div id='gMore'>
                        <h2>国内游</h2>
                        <div id='gMore-list'>
                            <span className='gscolor'>精选</span>
                            <span>夕阳红老人团</span>
                            <span>当季热门</span>
                        </div>
                        <div id='gMore-content'>
                            <div className='gMore-con'>
                                {
                                    this.state.oldman[0].list.map(function(item,i){
                                        return(
                                            <div className='goodspr' key={i}>
                                                <Link to={"/about/"+item.id}>
                                                    <div>
                                                        <img src={item.img} />
                                                    </div>
                                                    
                                                    <h3>{item.address}</h3>
                                                </Link>
                                                <p>
                                                    <span>￥<b>{item.price}</b>起</span>
                                                    <em>满意度<i>{item.good}</i>%</em>
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='gMore-con Block'>
                            {
                                    this.state.oldman[1].list.map(function(item,i){
                                        return(
                                            <div className='goodspr ' key={i}>
                                                <Link to={"/about/"+item.id}>
                                                    <div>
                                                        <img src={item.img} />
                                                    </div>
                                                    <h3>{item.address}</h3>
                                                </Link>
                                                <p>
                                                    <span>￥<b>{item.price}</b>起</span>
                                                    <em>满意度<i>{item.good}</i>%</em>
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='gMore-con Block'>
                                 {
                                    this.state.oldman[2].list.map(function(item,i){
                                        return(
                                            <div className='goodspr' key={i}>
                                                <Link to={"/about/"+item.id}>
                                                    <div>
                                                        <img src={item.img} />
                                                    </div>
                                                    <h3>{item.address}</h3>
                                                </Link>
                                                <p>
                                                    <span>￥<b>{item.price}</b>起</span>
                                                    <em>满意度<i>{item.good}</i>%</em>
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <Link to='/list'>
                                查看更多内容
                        </Link>
                    </div>
                </div>
                <div id='g-ym-wrap'>
                    <div id='g-ym'>
                        <header>
                            <div id='g-ym-h-left'>
                                <span>签证服务</span>
                                <em>像当地人一样吃喝玩乐，嘻嘻嘻</em>
                            </div>
                            <div id='g-ym-h-right'>
                                {
                                    this.state.ym.map(function(item,i){
                                        return(
                                            <span key={i}>{item}</span>
                                        )
                                    })
                                }
                            </div>
                        </header>
                        <section>
                            <div className='g-se-list'>
                                    <Link to='/list/1'>
                                        <div>
                                            <img src="http://www.aozhoutrip.com/uploads/2017/1103/23f7c27f41337b4667a60a871f513727_285x154.jpg" />
                                        </div>
                                      
                                        <h3>
                                            <p>【北海】</p>
                                            <span><i>￥</i>1299<em>起</em></span>
                                        </h3>
                                    </Link>
                            </div>
                        </section>
                        <Link to='/list'>
                                查看更多内容
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
    componentWillMount() {
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
                $('.gBannerList').hover(function(){
                    $(this).addClass('BannerList')
                        .siblings().removeClass('BannerList')
                    var index = $(this).index()
                    $('.gListBox').eq(index).stop().show()
                          .siblings().not('.box').stop().hide()
                })
                $('#g-list-left').mouseleave(function () {
                    $(".gListBox").hide()
                    $('.gBannerList').removeClass('BannerList')
                })
            }
        })
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
                console.log(data.list)
                _this.state.city2.map(function (item) {
                    var arr = item.city
                   
                    var oD = $(`<div class="gListBox"></div>`)
                    arr.map(function(key,i){
                        var obb = $("<div></div>")
                        var tit = key.tit
                        var str = "";
                        var op = $(`<p>${tit}</p>`)
                        key.second.map(function(item){
                            str += `<span>${item}</span>`
                        })
                        obb.append(op,str)
                        oD.append(obb)
                    })
                    $("#g-list").append(oD)
                })
                $('.gListBox').mouseenter(function(e){
                    $(this).show()
                    var index = $(this).index()
                    $('.gBannerList').eq(index-1).addClass('BannerList')
                })
                $('.gListBox').mouseleave(function(e){
                    $(this).hide()
                    var index = $(this).index()
                    $('.gBannerList').eq(index-1).removeClass('BannerList')
                })
            }
        })
        $.ajax({
            type: 'post',
            url: "http://bannerlist/api",
            data: { id: 3 },
            async: false,
            dataType: 'json',
            success: function (data) {
                _this.setState({
                    con: data.product
                })
            }
        })
        $.ajax({
            type: 'post',
            url: "http://bannerlist/api",
            data: { id: 4 },
            async: false,
            dataType: 'json',
            success: function (data) {
                _this.setState({
                    oldman: data.oldman
                })
            }
        })
        $.ajax({
            type: 'post',
            url: "http://bannerlist/api",
            data: { id: 5},
            async: false,
            dataType: 'json',
            success: function (data) {
                _this.setState({
                    ym: data.add
                })
            }
        })
        $(function () {
    

        
          
        
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
            ////////////////点击变色换图///////////////////
            $("#gMore-list").find('span').mouseenter(function(){
                $(this).addClass("gscolor")
                    .siblings().removeClass('gscolor')
                var index = $(this).index()
                console.log( $('.gMore-con'))
                 $('.gMore-con').eq(index).removeClass('Block')
                    .siblings().addClass('Block')  
            })
        
        })
    }

}



export default Home;