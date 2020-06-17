import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import './Header.scss'

const Header=(props)=>{
    return(
        <div>
            <div className='navbar'>
                    <NavLink to='/home' className='navlink'>Home</NavLink>
                    <NavLink to='/weather' className='navlink'>Weather</NavLink>
                    <NavLink to='/signin' className='navlink'>Logout</NavLink>
            </div>
        </div>
    )
}

export default withRouter(Header)