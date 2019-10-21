
import Router from '../assest/router/public'
import BB from '../assest/router/home-route'
import React from 'react'
import axios from 'axios'
import Store from '../store/index'
import '../download/font_1302146_9h5nfionpr/iconfont.css'
import { NavLink } from 'react-router-dom'  
import { Carousel, WingBlank } from 'antd-mobile';
import { NavBar, Icon } from 'antd-mobile';
import '../../node_modules/antd-mobile/dist/antd-mobile.css'
import '../assest/index.css'
import $ from 'jquery'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="home">

                <NavBar
                    mode="dark"
                    leftContent={<span onClick={this.me.bind(this)} className="iconfont  icon-Group-"> </span>}
                    className="navbar"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >首页</NavBar>

                <Router routes={BB}></Router>

                <div className="wo">
                    <div className="wo-top">
                        <div className="user">
                            <span></span>
                            <span>Mr-w</span>
                        </div>

                        <p>
                        <NavLink to='/index/sellect'> <span onClick={this.collect.bind(this)}>  <span style={{ fontSize: 0.1 + 'rem' }} className="iconfont icon-shiwujiaoxing"></span> 我的收藏</span></NavLink>
                           


                            <span>  <span className="iconfont icon-xiazai"></span> 离线下载</span>
                        </p>

                    </div>

                    <div className="wo-btm">
                    <NavLink to='/index/home.1'> <span onClick={this.me1.bind(this)}>首页</span></NavLink>
                    </div>
                </div>
                <div onClick={this.me1.bind(this)} className="wo1">

                </div>
            </div>
        )
    }

    me() {
        $('.wo').animate({ "left": 0 })
        $(".wo1").css("display", 'block')
        $('.wo1').animate({ "opacity": 0.3 })


    }
    me1() {
        $('.wo').animate({ "left": -9 + 'rem' })
        $('.wo1').animate({ "opacity": 0 })
        $(".wo1").css("display", 'none')

    }
    collect() {
        $('.wo').animate({ "left": -9 + 'rem' })
        $('.wo1').animate({ "opacity": 0 })
        $(".wo1").css("display", 'none')
        // $('.navbar').text('我的收藏')

    }


}

export default Index