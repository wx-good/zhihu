

import Store from '../store/index'

import React from 'react'
import '../assest/index.css'
class Sellect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="sellect">
                {<ul style={{ paddingLeft: 0 }}>
                        {JSON.parse(localStorage.getItem('key')) == null?'': JSON.parse(localStorage.getItem('key')).map((val, i) => (
                        <li>
                                <div className="fl">
                                    <p onClick={this.chang.bind(this, val.id)} key={i} >{val.title}</p>
                                </div>
                                <div className="fr">
                                    <img src={val.img} alt="" key={i + 2} />
                                </div>
                            </li> 
                        ))} 

                    </ul>}
            </div>
        )
    }
    chang(x){
        this.props.history.push('/details')

        Store.dispatcher.dispatch({
            actionType: 'changName',
            actionParams: x
        })
        var storage = window.sessionStorage;
        storage.setItem('name', x);
    }

}

export default Sellect