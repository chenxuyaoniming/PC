import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery'
import '../data/banner'
import '../data/gblist'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            banner:[],
            city:[],
            city2:[]
        }
    }

    componentDidMount(){
        let _this = this;
        $.ajax({
            type:'post',
            url:"http://bannerlist/api",
            data:{id:1},
            async:true,
            dataType:'json',
            success:function(data){
                _this.setState({
                    city:data.list
                })
                _this.state.city.map(function(item){
                    var tit = `<p>${item.tit}</p>`;
                    var oI = `<i>1</i>`
                    var $oD = $('<div class="gBannerList"></div>')
                    var str1 = '';
                    item.city.map(function(a){
                        str1 += `<span>${a}</span>`
                    })
                    $oD.append(tit,oI,str1)
                    $("#g-list-left").append($oD)
                })
            }
        });
        $.ajax({
            type:'post',
            url:"http://bannerlist/api",
            data:{id:2},
            async:true,
            dataType:'json',
            success:function(data){
                _this.setState({
                    city2:data.list
                })
                console.log(data.list)
                _this.state.city2.map(function(item){
                    var tit = item.city.tit
                   var oD = $(`<div class="gListBox"><p>${tit}</p></div>`)
                   var sec = item.city.second
                   var str = '';
                   console.log(sec)
                   sec.map(function(item){
                        str += `<span>${item}</span>`
                   })
                   oD.append(str)
                   $("#g-list").append(oD)
                })
            }
        })
    }

    
    

    render(){
        return(

            <div id="gBanner-wrap">
            <Link to="/"><img src="http://www.aozhoutrip.com/uploads/2018/0316/f8dda50e1e258891487c843d04007e39_1920x420.jpg" className="gBannerImg"/></Link>
            <Link to="/"><img src="http://www.aozhoutrip.com/uploads/2018/0415/d84066c742ca387ab49f0d6322c45076_1920x420.jpg" className="gBannerImg"/></Link>


                <div id="g-list">
                    <div id="g-list-left" ref='gListLeft'>
                    </div>
                </div>
            </div>
        )
    }

}



export default Home;