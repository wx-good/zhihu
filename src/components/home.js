import React from 'react';
import axios from 'axios'
import Store from '../store/index'
import '../download/font_1302146_9h5nfionpr/iconfont.css'

import { Carousel, WingBlank } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
// import { NavLink } from 'react-router-dom'  
// import Router from '../assest/router/public'
// import BB from '../assest/router/home-route'
import '../../node_modules/antd-mobile/dist/antd-mobile.css'
import '../assest/index.css'
import $ from 'jquery'




class Home extends React.Component {
    state = {
        top_stories: [],
        hot: []
    }

    render() {
        return (
            <div className="home">

                <NavBar
                    mode="dark"
                    leftContent={<span onClick={this.me.bind(this)} className="iconfont  icon-Group-"></span>}
                    className="navbar"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >首页</NavBar>


                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite={true}
                        className="banner"
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.top_stories.map(val => (
                            <a
                                key={val}
                                href={val.url}
                                style={{ display: 'inline-block', width: '100%', }}
                            >

                                <img
                                    src={val.image}
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>

                <div className="dayhot">
                    <h1>今日热文</h1>
                    <ul style={{ paddingLeft: 0 }}>
                        {this.state.hot.map((val, i) => (
                            <li>
                                <div className="fl">
                                    <p onClick={this.chang.bind(this, val.id)} key={i} >{val.title}</p>
                                </div>
                                <div className="fr">
                                    <img src={val.images[0]} alt="" key={i + 2} />
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>

                <div className="wo">
                            <div className="wo-top">
                                <div className="user">
                                <span></span>
                                <span>Mr-w</span>
                                </div>
                             
                            <p>
                                
                                <span onClick={this.collect.bind(this)}> <span style={{fontSize:0.1+'rem'}} className="iconfont icon-shiwujiaoxing"></span> 我的收藏</span>
                               

                                <span>  <span className="iconfont icon-xiazai"></span> 离线下载</span>
                            </p>

                            </div>

                            <div className="wo-btm">
                                 <span>首页</span>
                            </div>
                </div>
                <div onClick={this.me1.bind(this)} className="wo1">

                </div>

            </div>


        );
    }

    chang(x) {


        this.props.history.push('/details')

        Store.dispatcher.dispatch({
            actionType: 'changName',
            actionParams: x
        })
        var storage = window.sessionStorage;
        storage.setItem('name', x);

    }

    componentDidMount() {
        axios.get('/api/4/news/latest').then((res) => {
            console.log(res.data)
            this.setState({
                top_stories: res.data.top_stories,
                hot: res.data.stories
            })
        })

    }
    me() {
        $('.wo').animate({ "left": 0 })
        $(".wo1").css("display",'block')
        $('.wo1').animate({ "opacity": 0.3 })


    }
    me1() {
        $('.wo').animate({ "left": -9+'rem' })
        $('.wo1').animate({ "opacity": 0 })
        $(".wo1").css("display",'none')

    }
    collect() {
        $('.wo').animate({ "left": -9+'rem' })
        $('.wo1').animate({ "opacity": 0 })
        $(".wo1").css("display",'none')

        this.props.history.push('/sellect')
    }


}

export default Home
