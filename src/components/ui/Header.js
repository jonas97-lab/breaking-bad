import React from 'react'
import Logo from '../../img/logo.png'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <header className='center'>
            <Link to='/'>
            <img src={Logo} alt="breaking-bad-logo"/>
            </Link>
        </header>
    )
}
