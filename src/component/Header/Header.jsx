import React, { Component } from 'react';
// NavLinK作为跳转路由标签,如常用的侧边栏跳转高亮效果就可以使用这个标签
import { NavLink } from 'react-router-dom';
import { SearchBar,Tabs, WhiteSpace, Badge } from 'antd-mobile';
import './Header.scss'

// 声明跳转路由时,当前跳转对象的背景色及颜色,以作高亮区分
const selectedStyle = {
    // backgroundColor: 'red',
    // color: 'slategray'
}

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            searchValue:''
        }
    }
    static defaultProps ={
        tabs:[
            { title: <Badge text={'3'}>推荐</Badge> },
            { title: <Badge text={'今日(20)'}>排行</Badge> },
            { title: <Badge dot>分类</Badge> },
            { title: <Badge dot>我的</Badge> },
        ]
    }
    componentDidMount(){
        this.autoFocusInst.focus();
    }
    render () {
        let {tabs} = this.props;
        return (
            <div  className='header'>
                 <SearchBar
                    value={this.state.searchValue}
                    placeholder="Search"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    showCancelButton
                    onChange={this.onChange}
                    ref={ref => this.autoFocusInst = ref}

            />
            <nav>
                {/* <NavLink to = '/Recommend' activeStyle = { selectedStyle }> 推荐 </NavLink>
                <NavLink to = '/Rank' activeStyle = { selectedStyle }> 排行 </NavLink>
                <NavLink to = '/Love' activeStyle = { selectedStyle }> 分类 </NavLink>
                <NavLink to = '/NewBooks' activeStyle = { selectedStyle }> 我的 </NavLink> */}
            </nav>
            <Tabs tabs={tabs}
                initialPage={1}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of first tab
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of second tab
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of third tab
                </div>
            </Tabs>
            </div>
        )
    }

}

// 最后要将Header暴露出来
export default Header
