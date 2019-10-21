import {Dispatcher} from 'flux'

import EventEmitter from 'events'


// 创建数据
class State extends EventEmitter{
    name=''
}
var state = new State()
// var state = {
//     name:'wahaha'
// }
// 规定执行的任务

// 实例化派发器
var dispatcher = new Dispatcher()

// 注册派发器
dispatcher.register((action)=>{
    switch(action.actionType){
        case 'changName':
        state.name=action.actionParams;
        state.emit('chang')
        break
    }
})

export default {
    state,
    dispatcher,
}
