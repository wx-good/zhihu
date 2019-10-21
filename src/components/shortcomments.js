import React from 'react';
import axios from 'axios'

import '../assest/index.css'
import '../assest/details.css'
import '../download/font_1302146_9h5nfionpr/iconfont.css'
import Store from '../store/index'

class Short extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: Store.state.name,
            new: [],

        }
    }
    render(props) {
        return (
            <div className='Longcomments'>
                <div className="top">
                    <span onClick={this.ret.bind(this)} className="iconfont icon-zhixiangzuozuojiantou"></span>
                    <i>66 条评论</i>
                    <span className="iconfont icon-yidongappxiexiaoxi">  </span>


                </div>
                <h2>{this.state.new.length} 条长评</h2>
                <ul style={{paddingLeft:'0.4rem'}}>
                    {this.state.new.map((val, i) => (
                        <li>
                            <div className="l-fl">
                                <img src={val.avatar} alt="" key={i}/>
                            </div>
                            <div className="l-fr">
                                <h3>{val.author} <span className="fr"><span style={{ color: '#999', fontSize: '0.2' }} className="iconfont icon-zan"></span> &nbsp;<i>2</i> </span></h3>

                                <p>{val.content} </p>
                                <div className="small">
                                    {/* <h3>{ val.reply_to.author=false?'':val.reply_to.author}: </h3> */}
                                    <span>
                                        {/* {val.reply_to.content} */}
                                    </span>
                                </div>
                                <div className="btm">
                                    <span>时间</span>
                                    <span>展开</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }

    componentDidMount() {
        if (this.state.name.length != 0) {
            axios.get('api/4/story/' + Store.state.name + '/long-comments').then((res) => {
                console.log(res.data.comments)
                this.setState({
                    new: res.data.comments
                })
            })
        } else {
            axios.get('api/4/story/' + sessionStorage.getItem('name') + '/long-comments').then((res) => {
                console.log(res.data.comments)
                this.setState({
                    new: res.data.comments
                })
            })
        }

    }
    ret() {
        this.props.history.go(-1)
    }



}
export default Short
