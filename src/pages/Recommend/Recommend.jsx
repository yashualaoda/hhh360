import React, { Component } from 'react';
// import {Header} from '../../component';
import { VideoComp } from '@/component';
import './Recommend.less';
import { queryRecommendVideo } from '@/libs/axiosList.js';
import { SearchBar, Tabs, Badge } from 'antd-mobile';
import { connect } from 'react-redux';
import { updateAppLoading } from '@/store/action.js';
class Recommend extends Component {
  constructor(props) {
    super();
    this.state = {
      recommendVideos: [],
      searchValue: ''
    };
  }
  static defaultProps = {
    tabs: [
      { title: <Badge text={'3'}>推荐</Badge> },
      { title: <Badge text={'今日(20)'}>排行</Badge> },
      { title: <Badge dot>分类</Badge> },
      { title: <Badge dot>我的</Badge> }
    ]
  };
  componentDidMount() {
    this.autoFocusInst.focus();
    this.props.dispatch(updateAppLoading('loadding'));
    queryRecommendVideo({
      name: 1
    }).then(res => {
      this.setState({
        recommendVideos: res.recommendVideos
      });
    });
  }
  render() {
    let { recommendVideos, searchValue } = this.state,
      { tabs } = this.props;
    return (
      <div className="recommend">
        <div className="header">
          <SearchBar
            value={searchValue}
            placeholder="Search"
            onSubmit={value => console.log(value, 'onSubmit')}
            onClear={value => console.log(value, 'onClear')}
            onFocus={() => console.log('onFocus')}
            onBlur={() => console.log('onBlur')}
            onCancel={() => console.log('onCancel')}
            showCancelButton
            onChange={this.onChange}
            ref={ref => (this.autoFocusInst = ref)}
          />
          <Tabs
            tabs={tabs}
            initialPage={0}
            onChange={(tab, index) => {
              console.log('onChange', index, tab);
            }}
            onTabClick={(tab, index) => {
              console.log('onTabClick', index, tab);
            }}
          >
            <div className="recommend-content">
              {recommendVideos.length
                ? recommendVideos.map((item, idx) => {
                    return (
                      <VideoComp
                        videoInfo={item}
                        key={`recommendVideo${idx}`}
                      />
                    );
                  })
                : null}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '150px',
                backgroundColor: '#fff'
              }}
            >
              Content of second tab
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '150px',
                backgroundColor: '#fff'
              }}
            >
              Content of third tab
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '150px',
                backgroundColor: '#fff'
              }}
            >
              Content of third tab
            </div>
          </Tabs>
        </div>
        <div className="recommend-content">
          推荐视频
          <br />
          {/* <Button type='primary'>sdfhgkjhds</Button> */}
        </div>
      </div>
    );
  }
}

export default connect(function mapStatetoProps(state) {
  let { appLoading } = state;
  return {
    appLoading
  };
})(Recommend);
