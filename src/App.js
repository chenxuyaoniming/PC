import React, { Component } from 'react';
import { Link } from 'react-router';
import './font/iconfont.css';
import $ from 'jquery';
import G1 from './components/gg1';
import Aside from './components/aside'
import Store from './redux/store.js'
import Action from './redux/action.js'
import {hashHistory} from 'react-router'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      goods:[],
      user:Store.getState()
    }
  }
  change(a){
    this.setState({user:Store.getState()})
  }
  componentWillMount(){
    Store.subscribe(this.change.bind(this))
  }

  reset(){
    Store.dispatch(Action(''))
  }
  ret(){
    console.log(1111)
    if(this.state.user){
      return (  
                <span>
                       <span>欢迎您：<b>{this.state.user}</b></span>
                       <span onClick={this.reset.bind(this)}><Link to="/login">退出</Link></span>
                </span>
             
              
              )
    }else{
      return (  
               <span>
                    <span>
                      <Link to='/login' className="zspan1">登陆
                      </Link>
                    </span>
                    <span>
                      <Link to='/register'className="zspan2">免费注册
                      </Link>
                    </span>
               </span>
              
              )
        }
  }

  render() {
    return (

      <div className="Zapp">
          <G1 />

          <Aside />

        <div className="Zapp1">
          <div className="Zheader">
            <div className="zheader_p">
              <span>您好！欢迎光临河南康辉国际旅行社有限责任公司</span>
            </div>
            <div className="zheader_s">
                {
                  this.ret()
                }
                
                <span>
                  <Link to=''>
                    <i className="icon iconfont icon-dingdan">
                    订单查询
                    </i>
                  </Link>
                </span>
                <span className="zspan3">
                    <i className="icon iconfont icon-fenqu">
                    网站导航
                    </i>
                  <div id="zdao">
                    <li>出国游</li>
                    <li>国内游</li>
                    <li>海岛游</li>
                    <li>私人订制</li>
                    <li>签证</li>
                    <li>游记攻略</li>
                    <li>景点</li>
                    <li>热门路线</li>
                    <li>嗨皮暑期档</li>
                    <li>周边游</li>
                  </div>
                </span>
            </div>
          </div>
        </div>
        {/* 搜索 */}
        <div className="zheader">
          <div className="zheader1">
            <div className="zimg">
              <Link to="/home">
                   <img         src="http://www.aozhoutrip.com/uploads/2018/0316/4679481b40e34a6a15cc086ac007e1c8_298x85.jpg"/>
              </Link>
             
            </div>
            <div className="zsou">
              <div className="zxia">
                <span className="zxiaspan">全部<div className="zsli"><li>热门路线</li><li>签证</li><li>景点</li></div></span>
                <input type="text" placeholder="输入目的地，酒店，攻略" id='search'/>
                <span className="zxiaspan1">搜索</span>
                <div></div>
              </div>
              <ul id='app-list'>
                {
                  this.state.goods.map(function(item,i){
                    return(
                      <li key={i}>{item.goods_name
                      } </li>
                    )
                  })
                }
              </ul>
              <div className="zrensou">
                <span className="zres1">热门搜索：</span>
                <span className="zres2">九寨沟旅游</span>
                <span className="zres3">峨眉山二日游</span>
              </div>
            </div>
            <div className="zkefu">
              <div>24小时客服电话：</div>
              <div className="zkefu_1">0371-61280106</div>
            </div>
          </div>
        </div>
        {/* 导航 */}
        <div className="znav_z">
          <div id="znav">
            <div className="global_tit">全部旅游产品分类</div>
            <ul className="znul">
              <li><Link className="znav_a zleft" to="/list/45">旅行社</Link></li>
              <li><Link className="znav_a"  to="/list/62">出境游</Link></li>
              <li><Link className="znav_a"  to="/list/45">国内游</Link></li>
              <li><Link className="znav_a jian"  to="/list/62">海岛游<i className="jian_1">荐</i></Link></li>
              <li><Link className="znav_a"  to="/list/45">暑期嗨皮档</Link></li>
              <li><Link className="znav_a"  to="/list/45">热门路线</Link></li>
              <li><Link className="znav_a jian_a"  to="/list/45">签证<i className="jian_2">热</i></Link></li>
              <li><Link className="znav_a"  to="/list/45">周边游</Link></li>
            </ul>
          </div>
        </div>





      
      {
          this.props.children
        }











        {/* footer上面 */}
        <div className="zqi">
          <div className="zqi1">
            <div className="zqi2">
              <div className="ziconq">
                <i className="icon iconfont icon-flag"></i>
              </div>
              <div className="ziconp">
                <h3>选择更多</h3>
                <span>上千套餐任您选，特色套餐日益新增</span>
              </div>
            </div>
            <div className="zqi2">
              <div className="ziconq1">
                <i className="icon iconfont icon-zuanshi"></i>
              </div>
              <div className="ziconp">
                <h3>品质更高</h3>
                <span>甄选全国优质供应商，定期实地质检</span>
              </div>
            </div>
            <div className="zqi2">
              <div className="ziconq2">
                <i className="icon iconfont icon-youhuiquan"></i>
              </div>
              <div className="ziconp">
                <h3>价格更优</h3>
                <span>套餐更便宜，现金券、点评返奖双优惠</span>
              </div>
            </div>
            <div className="zqi2">
              <div className="ziconq3">
                <i className="icon iconfont icon-shou"></i>
              </div>
              <div className="ziconp">
                <h3>朋友更好</h3>
                <span>会员关怀与特惠活动不间断</span>
              </div>
            </div>
            
          </div>
        </div>












        {/* 底部footer */}
        <div className="z_footer">
          <div className="zfooter">
            <div className="zfooter_a">
              <p className="zfooter_p"><Link className="zfooter_x" to="">预定常见问题</Link></p>
              <p><Link className="zfooter_s" to=""><span>如何获取发票？</span></Link></p>
              <p><Link className="zfooter_s" to=""><span>预定常见</span></Link></p>
            </div>
            <div className="zfooter_a">
              <p className="zfooter_p"><Link className="zfooter_x" to="">付快方式</Link></p>
              <p><Link className="zfooter_s" to=""><span>能不能脱团自己</span></Link></p>
              <p><Link className="zfooter_s" to=""><span>签订旅游合同</span></Link></p>
              <p><Link className="zfooter_s" to=""><span>纯玩是什么意思</span></Link></p>
            </div>
            <div className="zfooter_a">
              <p className="zfooter_p"><Link className="zfooter_x" to="">签订合同</Link></p>
              
            </div>
            <div className="zfooter_a">
              <p className="zfooter_p"><Link className="zfooter_x" to="">其他问题</Link></p>
              <p><Link className="zfooter_s" to=""><span>单房差是什么？</span></Link></p>
              
            </div>
            <div className="zfooter_span"><span>24小时全国服务热线</span></div>
          </div>
        </div>
        <div className="zdibuf">
          <div className="zdibuf1">
            <div className="zdb">
              <Link className="zdibu" to="">关于我们</Link>
              <Link className="zdibu zdibu1" to="">联系我们</Link>
              <Link className="zdibu" to="">服务条款</Link>
            </div>
            <div className="zdibuf2">
              <p>经营许可证号：L-HEN-CJ00011</p>
              <p>业务接待地址：河南省郑州市紫荆山路商城路金成国贸1311室</p>
              <p>版权所有：河南康辉国际旅行社有限责任公司郑州商城路营业部</p>
              <p>豫ICP备17043274号​</p>
              <p><Link className="zwang" to="">网站备案编号：豫ICP备17043274号-1​</Link></p>
            </div>
            <div className="zdibuf3">
              <span>友情链接：</span>
              <Link className="zwangs" to="">雁途旅游网</Link>
              <Link className="zwangs" to="">旅游网</Link>
              <Link className="zwangs" to="">河南旅游网</Link>
            </div>
          </div>
        </div>
        
        <Xiaoguang></Xiaoguang>
      </div> 
      
        )
      }
      componentDidMount(){
        let _this = this
        $(function(){
          $('.zspan3').mouseover(function(){
            $('#zdao').stop().show();
          })
          $('.zspan3').mouseout(function(){
            $('#zdao').stop().hide();
          })
          $('.zxiaspan').mousemove(function(){
            $('.zsli').stop().show();
          })
          $('.zxiaspan').mouseout(function(){
            $('.zsli').stop().hide();
          })
      
          /////////搜索/////////////////////
          $('#search').bind('blur',function(){
            $(this).val("")
             $('#app-list').hide()
          })
          $('#search').bind('input',function(){
              $('#app-list').show()
              var txt = $(this).val()
              if(txt === ''){
                $('#app-list').hide()
              }
              $.ajax({
                url:'http://h6.duchengjiu.top/shop/api_goods.php',
                type:'get',
                data:{'search_text':txt},
                async:false,
                success:function(data){
                  var data2 = [{'goods_name':'抱歉未找到商品'}]
                  if(data.data.length>0){
                    _this.setState({
                      goods:data.data
                    })
                    console.log(data)
                  }else{
                    _this.setState({
                      goods:data2
                    })
                  }
                
                }
              })
          })
        })
      }

  }

class Xiaoguang extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="zer">
        <div className="zxr">
          <div>
            <p>在线质询</p>
            <span>Online inquiry</span>
          </div>
        </div>
        <div className="zxr1">
          <div className="zxr2"> <i className="icon iconfont icon-dianhua"></i>旅游顾问1号</div>
          <div className="zxr2"> <i className="icon iconfont icon-dianhua"></i>旅游顾问2号</div>
          <div className="zxr2"> <i className="icon iconfont icon-dianhua"></i>旅游顾问3号</div>
        </div>
      </div>
    )
  }
}
      export default App;
