

import Home from '../../components/home.1'
import Sellect from '../../components/sellect'


    const BB =[
        {
            path:'/index/home.1',
            component:Home
        },
        {
            path:'/index/sellect',
            component:Sellect
        },
       
        {
            path:'*',
            Redirect:'/index/home.1'
        },
    ]
   

export default BB