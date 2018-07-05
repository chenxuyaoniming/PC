import React, { Component } from 'react';

import { Link } from 'react-router';
import './font/iconfont.css';
class App extends Component {
  render() {
    return (
      <div className="Zapp">
        <div className="Zheader">
          <div className="zheader_p">
            <span>您好！欢迎光临河南康辉国际旅行社有限责任公司</span>
          </div>
          <div className="zheader_s">
               <span><Link to=''>登陆</Link></span><span><Link to=''>免费注册</Link></span><span><Link to=''><i className="icon iconfont icon-dingdan">订单查询</i></Link></span><span><Link to=''><i className="icon iconfont icon-fenqu">网站导航</i></Link></span>
          </div>
        </div>
        </div> 
        )
      }

  }
      
      export default App;
