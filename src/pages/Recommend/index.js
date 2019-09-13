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
                recommendVideos:res
            })
        })
    }
    render () {
        let {recommendVideos} = this.state;
        console.log(recommendVideos.length)
        return (
            <div className='recommend'>
                <Header></Header>  
                <div className='recommend-content'>
                    推荐视频{recommendVideos.length}
                    {
                        recommendVideos.length ?recommendVideos.map((item,idx)=>{
                            return (
                                // <VideoComp videoInfo={item} key={`recommendVideo${idx}`}/>
                                <div videoInfo={item} key={`recommendVideo${idx}`} >11111</div>
                            )
                        }): null
                    }
                    <p>ggggggggggg</p>
                    <VideoComp/>
                </div>
            </div>
        )
    }
}

export default Recommend