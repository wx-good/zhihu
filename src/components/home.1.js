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
        hot: [],
        history: [],
        day: 1
    }

    render() {
        return (
            <div className="home">


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
                                    src={val.image.replace('pic3','pic1')}
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
                                    <img src={val.images[0].replace('pic3','pic1')} alt="" key={i + 2} />
                                </div>
                            </li>
                        ))}

                    </ul>


                    <ul style={{ paddingLeft: 0 }}>

                        {JSON.parse(sessionStorage.getItem('history')) == null ? null : JSON.parse(sessionStorage.getItem('history')).map((val, i) => (
                        

                            val.map((v, ind) => (
                                    
                                <li>
                                    <div className="fl">
                                        <p onClick={this.chang.bind(this, v.id)} key={i} >{v.title}</p>
                                    </div>
                                    <div className="fr">
                                        <img src={v.images[0].replace('pic3','pic1')} alt="" key={i + 2} />
                                    </div>
                                </li>
                            ))


                        ))}


                    

                    </ul>
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
        window.addEventListener('scroll', this.handleScroll.bind(this));

        axios.get('/api/4/news/latest').then((res) => {
            // console.log(res.data)
            this.setState({
                top_stories: res.data.top_stories,
                hot: res.data.stories
            })
        })

    }

    // 加载更多
    handleScroll(e) {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            function getDay(num, str) {
                var today = new Date();
                var nowTime = today.getTime();
                var ms = 24 * 3600 * 1000 * num;
                today.setTime(parseInt(nowTime + ms));
                var oYear = today.getFullYear();
                var oMoth = (today.getMonth() + 1).toString();
                if (oMoth.length <= 1) oMoth = '0' + oMoth;
                var oDay = today.getDate().toString();
                if (oDay.length <= 1) oDay = '0' + oDay;
                return oYear + str + oMoth + str + oDay;
            }
            var day = this.state.day - 1
            this.setState({
                day: day
            })

            var yesterday = getDay(this.state.day, '');		//    -1 代表前一天，-2前两天...
            // console.log(yesterday);

            axios.get('/api/4/news/before/' + yesterday + '').then((res) => {
                // console.log(JSON.stringify(res.data.stories) )

                // console.log(JSON.parse(storage.getItem('history')) );

                var msg = JSON.parse(sessionStorage.getItem('history') || '[]')
                msg.push(JSON.parse(JSON.stringify(res.data.stories)))
                // console.log(msg);

                window.sessionStorage.setItem('history', JSON.stringify(msg));


                // console.log(JSON.parse(sessionStorage.getItem('history')));

            })

        }

    }



}

export default Home
