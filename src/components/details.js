import React, { createContext } from 'react';
import axios from 'axios'

import '../assest/index.css'
import '../assest/details.css'
import '../download/font_1302146_9h5nfionpr/iconfont.css'
import Store from '../store/index'
import $ from 'jquery'
import '../../node_modules/antd-mobile/dist/antd-mobile.css'


class Sets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: Store.state.name,
            new: '',
            news: '',
            extra: '',
        }
    }

    render(props) {
        return (
            <div className='details'>


                <div className="top">
                    <span onClick={this.ret.bind(this)} className="iconfont icon-zhixiangzuozuojiantou"></span>
                    <div className="top-r">
                        <span onClick={this.share.bind(this)} className="iconfont icon-fenxiang"></span>
                        <span onClick={this.addfav.bind(this)} className="iconfont icon-shiwujiaoxing"></span>
                        <span onClick={this.long.bind(this)} className="iconfont icon-Group-"> <i>{this.state.extra.comments}</i></span>
                        <span className="iconfont icon-zan"> <i>{this.state.extra.popularity}</i> </span>
                    </div>

                   



                </div>
                <div className="banner1">
                    <img width='100%' src={this.state.new.image} alt="" />

                </div>
                <div className='center' dangerouslySetInnerHTML={{ __html: this.state.new.body }} />


                <div onClick={this.yc.bind(this)} className="share1">

                </div>
                <div className="share">
                    <img src={require('../assest/images/1_03.jpg')} alt="" />
                </div>

            </div>

        )
    }

    componentDidMount() {

        if (this.state.name.length != 0) {
            axios.get('/api/4/news/' + this.state.name + '').then((res) => {
                console.log(res.data)
                this.setState({
                    // top_stories: res.data.top_stories,
                    new: res.data
                })
            })
        } else {
            axios.get('/api/4/news/' + sessionStorage.getItem('name') + '').then((res) => {
                console.log(res.data)
                this.setState({
                    // top_stories: res.data.top_stories,
                    new: res.data
                })
            })
        }
        // 新闻额外信息
        if (this.state.name.length != 0) {
            axios.get('/api/4/story-extra/' + this.state.name + '').then((res) => {
                // console.log(res.data)
                this.setState({
                    // top_stories: res.data.top_stories,
                    extra: res.data
                })
            })
        } else {
            axios.get('/api/4/story-extra/' + sessionStorage.getItem('name') + '').then((res) => {
                // console.log(res.data)
               
                this.setState({
                    // top_stories: res.data.top_stories,
                    extra: res.data
                })
            })
        }
      


    }
    ret() {
        this.props.history.go(-1)
    }
    long() {
        this.props.history.push('/Longcomments')
    }
    share() {
        $('.share').css('display', 'block')
        $('.share1').css('display', 'block')

    }
    yc() {
        $('.share').css('display', 'none')
        $('.share1').css('display', 'none')

    }

    addfav() {
        if ($('.top-r span').eq(1).css('color') == 'rgb(255, 255, 255)') {
            $('.top-r span').eq(1).css('color', 'yellow')

            var collect = { title: this.state.new.title, img: this.state.new.image, id: this.state.new.id }
            var car = JSON.parse(localStorage.getItem('key') || '[]')
            var flag = false
            car.map(item => {
                if (item.id == collect.id) {
                    flag = true
                    return true
                }
            })
            if (flag == false) {
                car.push(collect)
                localStorage.setItem('key', JSON.stringify(car))
            }

        } else {
            $('.top-r span').eq(1).css('color', 'white')
        
           
           
        }
    }



}
export default Sets
