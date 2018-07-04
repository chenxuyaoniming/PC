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
            city:[]
        }
    }

    componentDidMount(){
        let _this = this;
        $.ajax({
            type:'get',
            url:'http://banner/api',
            async:true,
            dataType:'json',
            success:function(data){
                _this.setState({
                    banner:data.banner
                })
            }
        });
        $.ajax({
            type:'get',
            url:"http://bannerlist/api",
            async:true,
            dataType:'json',
            success:function(data){
                _this.setState({
                    city:data.list
                })
                _this.state.city.map(function(item){
                    var tit = `<p>${item.tit}</p>`;
                    var $oD = $('<div class="gBannerList"></div>')
                    var str1 = '';
                    item.city.map(function(a){
                        str1 += `<span>${a}</span>`
                    })
                    $oD.append(tit,str1)
                    $("#g-list-left").append($oD)
                })
            }
        })
    }

    

    render(){
        return(

            <div id="gBanner-wrap">
                {
                    this.state.banner.map(function(item){
                        return(
                            <Link to="/"><img src={item.img} className="gBannerImg"/></Link>
                        )
                    })
                }
                <div id="g-list">
                    <div id="g-list-left">

                        {/* <div id="g-list1" className=""></div> */}
                    </div>
                </div>
            </div>
        )
    }
}



export default Home;