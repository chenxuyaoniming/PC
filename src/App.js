import React, { Component } from 'react';

import { Link } from 'react-router';
import './font/iconfont.css';
import {Button} from 'react-bootstrap';
import $ from 'jquery';
class App extends Component {
  render() {
    return (

      <div className="Zapp">
        <div className="Zapp1">
          <div className="Zheader">
            <div className="zheader_p">
              <span>您好！欢迎光临河南康辉国际旅行社有限责任公司</span>
            </div>
            <div className="zheader_s">
                <span><Link to='' className="zspan1">登陆</Link></span><span ><Link to=''className="zspan2">免费注册</Link></span><span><Link to=''><i className="icon iconfont icon-dingdan">订单查询</i></Link></span><span className="zspan3"><i className="icon iconfont icon-fenqu">网站导航</i><div id="zdao"><li>出国游</li><li>国内游</li><li>海岛游</li><li>私人订制</li><li>签证</li><li>游记攻略</li><li>景点</li><li>热门路线</li><li>嗨皮暑期档</li><li>周边游</li></div></span>
            </div>
          </div>
        </div>
        <div className="zheader">
          <div className="zheader1">
            <div className="zimg"><img src="http://www.aozhoutrip.com/uploads/2018/0316/4679481b40e34a6a15cc086ac007e1c8_298x85.jpg"/>
            </div>
            <div>
              <div className="zxia">
                <span>全部</span>
                <input type="text"/>
                <span>搜索</span>
              </div>
            </div>
          </div>
        </div>
      </div> 
        )
      }

  }
  $(function(){
    $('.zspan3').mouseover(function(){
      $('#zdao').stop().slideDown(200);
    })
    $('.zspan3').mouseout(function(){
      $('#zdao').stop().slideUp(300);
    })
    
  })
      export default App;
