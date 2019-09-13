import React, { Component } from 'react';
// NavLinK作为跳转路由标签,如常用的侧边栏跳转高亮效果就可以使用这个标签
import { NavLink } from 'react-router-dom';

import './Header.scss'

// 声明跳转路由时,当前跳转对象的背景色及颜色,以作高亮区分
const selectedStyle = {
    backgroundColor: 'red',
    color: 'slategray'
}

class Header extends Component {
    render () {
        return (
            <nav className='header'>
                <NavLink to = '/Recommend' activeStyle = { selectedStyle }> 推荐 </NavLink>
                <NavLink to = '/Rank' activeStyle = { selectedStyle }> 排行 </NavLink>
                <NavLink to = '/Love' activeStyle = { selectedStyle }> 分类 </NavLink>
                <NavLink to = '/NewBooks' activeStyle = { selectedStyle }> 我的 </NavLink>
            </nav>
        )
    }

}

// 最后要将Header暴露出来
export default Header
