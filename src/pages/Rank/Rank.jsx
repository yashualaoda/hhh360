import React, { Component } from 'react';
import {Header} from '../../component'

// 这里几个页面级组件的结构都一样,改类名就行
class Rank extends Component {
    render () {
        return (
            <div>
                <Header/>
                Rank
            </div>
        )
    }
}

export default Rank