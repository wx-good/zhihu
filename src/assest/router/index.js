

import Details from '../../components/details'
import Index from '../../components/index'
import Longcomments from '../../components/Longcomments'
import Sellect from '../../components/sellect'

    const AA =[
        {
            path:'/index',
            component:Index
        },
        {
            path:'/details',
            component:Details
        },
        {
            path:'/Longcomments',
            component:Longcomments
        },
        {
            path:'/sellect',
            component:Sellect
        },
        {
            path:'*',
            Redirect:'/index'
        },
    ]
   

export default AA