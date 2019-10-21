import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'


const Router = (props)=>{

    return(
        <div>
            <Switch>
                {
                props.routes.map((val,ind)=>{
                    if (val.path ==='*'){
                      return  <Redirect key={ind} to={val.Redirect}/>
                    }else{
                      return  <Route key={ind} path ={val.path} component= {val.component}/>

                    }

                })
            }
            </Switch>
        </div>
    )
}
export default Router