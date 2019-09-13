import React, { Component } from 'react';
import {Header} from '../../component';
// import {Header} from '@/component';
import './Recommend.scss'
import {queryRecommendVideo} from '@/libs/axiosList.js'
class Recommend extends Component {
    componentDidMount(){
        queryRecommendVideo({
        })
    }
    render () {
        return (
            <div className='recommend'>
                <Header></Header>  
                <div className='recommend-content'>
                    推荐视频
                </div>
            </div>
        )
    }
}

export default Recommend