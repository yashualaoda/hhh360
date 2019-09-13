import React, { Component } from 'react';
// import {Header} from '../../component';
import {Header,VideoComp} from '@/component';
import './Recommend.scss'
import {queryRecommendVideo} from '@/libs/axiosList.js'
class Recommend extends Component {
    constructor(props){
        super();
        this.state={
            recommendVideos:[]
        }

    }
    componentDidMount(){
        queryRecommendVideo(
            {
                name:1
            }
        )
        .then(res=>{
            this.setState({
                recommendVideos:res.recommendVideos
            })
        })
    }
    render () {
        let {recommendVideos} = this.state;
        return (
            <div className='recommend'>
                <Header></Header>  
                <div className='recommend-content'>
                    推荐视频
                    {
                        recommendVideos.length ?recommendVideos.map((item,idx)=>{
                            return (
                                <VideoComp videoInfo={item} key={`recommendVideo${idx}`}/>
                            )
                        }): null
                    }
                </div>
            </div>
        )
    }
}

export default Recommend