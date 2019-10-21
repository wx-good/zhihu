import React from 'react'

import { NavLink } from 'react-router-dom'

class Three extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>three</h1>
                <ul>
                    <li> <NavLink to='/details'>电影</NavLink></li>
                </ul>
            </div>
        )
    }


}

export default Three