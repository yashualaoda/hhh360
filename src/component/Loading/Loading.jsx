/*视频组件，一行2个，宽度50%*/
import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
// NavLinK作为跳转路由标签,如常用的侧边栏跳转高亮效果就可以使用这个标签
// import { NavLink } from 'react-router-dom';

import './Loading.less';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <Icon type="loading" />
      </div>
    );
  }
}

export default Loading;
