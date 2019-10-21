import React from 'react'
import Store from '../../store/index'


import '../../../node_modules/antd-mobile/dist/antd-mobile.css'

class One extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:Store.state.name
        }
    }

    render() {
        return (
            <div>
                <h1>one</h1>
                <p>store:{Store.state.name}</p>
                <button onClick={this.chang.bind(this)}>按钮</button>
                <button onClick={this.chang1.bind(this,'dfd')}>改变</button>
                
            </div>
        )
    }
    chang(){

        Store.state.on('chang',()=>{
            this.setState({
                name:Store.state.name

            })
        })
        console.log(Store.state.name);

        Store.dispatcher.dispatch({
            actionType:'changName',
            actionParams:'让你变'
        })
    }

    chang1(){
        Store.dispatcher.dispatch({
            actionType:'changName',
            actionParams:'让你再变'
        })
       
        console.log(Store.state.name);
        
    }

   
}

export default One