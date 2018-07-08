import React from 'react';
import {Link} from 'react-router'
import $ from 'jquery'
import '../data/listsj'
class List extends React.Component{
    constructor(props){
        super(props)    
        this.state={
            add:['国内游','国外游','家里游'],
            mdd:[]
        }
    }
    componentDidMount(){
        let _this = this
       $.ajax({
           url:'http://www.list.com/api',
           type:'get',
           dataType:'json',
           async:true,
           success:function(data){
               _this.setState({
                   mdd:data.togou
               })
               console.log(data.togou[0])
           }
       })
    }
    render(){
        return(
            <div id='g-list-wrap'>
                 <div id='g-List'>
                    <div id='g-list-content'>
                        <div className='g-guild'>
                            <span>旅行社</span><i>&gt;</i>
                            <span>热门路线</span><i>&gt;</i>
                            <span>{this.state.add[0]}</span>
                        </div>
                        <div id='gL-rm'>
                            <i className="icon iconfont icon-shou"></i>
                            <span>热门路线</span>
                        </div>
                        <div id='gL-choose'>
                            <div className='gL-choose-content'>
                                <div className='gL-choose-content-left'>
                                    <span>目的地:</span>
                                </div>
                                <div className='gL-choose-content-right'>
                                    <span>
                                        {/* {
                                            this.state.mdd[0].list.map(function(item,i){
                                                return(
                                                    <Link to={'/about/'+i}>{item}</Link>
                                                )
                                            })
                                        } */}
                                        
                                    </span>                                   
                                </div>

                            </div>
                            <div className='gL-choose-content'>
                                <div className='gL-choose-content-left'>
                                    <span>旅行方式:</span>
                                </div>
                                <div className='gL-choose-content-right'>
                                    <span>
                                         <Link to='/about'>北京</Link>
                                    </span>                                   
                                </div>

                            </div>
                            <div className='gL-choose-content'>
                                <div className='gL-choose-content-left'>
                                    <span>交通选择:</span>
                                </div>
                                <div className='gL-choose-content-right'>
                                    <span>
                                         <Link to='/about'>北京</Link>
                                    </span>                                   
                                </div>

                            </div>
                             <div className='gL-choose-content'>
                                <div className='gL-choose-content-left'>
                                    <span>节日特惠:</span>
                                </div>
                                <div className='gL-choose-content-right'>
                                    <span>
                                         <Link to='/about'>北京</Link>
                                    </span>                                   
                                </div>

                            </div>
                            <div className='gL-choose-content'>
                                <div className='gL-choose-content-left'>
                                    <span>旅游主题:</span>
                                </div>
                                <div className='gL-choose-content-right'>
                                    <span>
                                         <Link to='/about'>北京</Link>
                                    </span>                                   
                                </div>

                            </div>
                        </div>
                        {/* 排序 */}
                        <div id='gList-sort'>
                            <span>综合排序</span>
                            <span>价格</span>
                            <span>销量</span>
                            <select name="price" id="gList-price" className='g-select'>
                                <option value="1">价格区间</option>
                                <option value="2">$2000-$3000</option>
                                <option value="3">$3000-$4000</option>
                                <option value="4">$4000-$5000</option>
                            
                            </select>
                            <select name="price" id="gList-time"
                            className='g-select'>
                                <option value="1">出发天数</option>
                                <option value="2">2天</option>
                                <option value="3">4天</option>
                                <option value="4">6天</option>
                            
                            </select>
                            <select name="price" id="gList-city"
                            className='g-select'>
                                <option value="1">出发城市</option>
                                <option value="2">日本</option>
                                <option value="3">印度</option>
                                <option value="4">德国</option>
                            
                            </select>
                        </div>
                        {/* 旅游项目 */}

                        <div id='gList-list-con'>
                            <div>
                                <img src="http://www.aozhoutrip.com/uploads/2018/0329/f6bb269e4ccc967c508312043f16a56b.jpg" alt=""/>
                                <div>
                                    <p>【惊喜芽庄五天四万】</p>
                                    <div>
                                        <p>  <i className="icon iconfont icon-importedlayers"></i>郑州出发</p>
                                        <p>团期 : <span>电讯</span></p>
                                        <p>行程 : <span>4天</span></p>
                                    </div>
                                </div>
                                <em>
                                    <p>
                                        电讯
                                    </p>
                                    <div>
                                        <span>满意度</span>
                                        <strong>
                                            <i>100</i>人已购买
                                            <i>0</i>人已购买
                                        </strong>
                                    </div>
                                </em>
                            </div>
                            <div>
                                <img src="http://www.aozhoutrip.com/uploads/2018/0329/f6bb269e4ccc967c508312043f16a56b.jpg" alt=""/>
                                <div>
                                    <p>【惊喜芽庄五天四万】</p>
                                    <div>
                                        <p>  <i className="icon iconfont icon-importedlayers"></i>郑州出发</p>
                                        <p>团期 : <span>电讯</span></p>
                                        <p>行程 : <span>4天</span></p>
                                    </div>
                                </div>
                                <em>
                                    <p>
                                        电讯
                                    </p>
                                    <div>
                                        <span>满意度</span>
                                        <strong>
                                            <i>100</i>人已购买
                                            <i>0</i>人已购买
                                        </strong>
                                    </div>
                                </em>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           
        )
    }
}
export default List;