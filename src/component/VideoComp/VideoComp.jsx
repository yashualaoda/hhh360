/*视频组件，一行2个，宽度50%*/
import React, { Component } from 'react';
// NavLinK作为跳转路由标签,如常用的侧边栏跳转高亮效果就可以使用这个标签
// import { NavLink } from 'react-router-dom';

import './VideoComp.scss'

// 声明跳转路由时,当前跳转对象的背景色及颜色,以作高亮区分
const selectedStyle = {
    // backgroundColor: 'red',
    // color: 'slategray'
}

class VideoComp extends Component {
    render () {
        let {videoInfo} = this.props;
        return (
            <div className='video-comp'>
                <div className='video-image'
                    style={{backgroundImage:`url(${videoInfo.videoImage})`}}
                >
                    
                </div>
                <div className='video-info'>
                    <p className='video-title'>{videoInfo.title}</p>
                </div>
               
            </div>
        )
    }

}

// 最后要将Header暴露出来
export default VideoComp
