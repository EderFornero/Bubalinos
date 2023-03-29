import React from 'react'
import { Link } from 'react-router-dom'
import Blogo from '../assets/images/b-logo.png'

function Navbar() {
    return (
        <div>
            <div className='div-navbar-main'>
                <div className='div-navbar-logo'>
                    <Link
                    to="/"
                    >
                    <img src={Blogo} alt="Logo" />
                    </Link>
                </div>
                <div className='div-navbar-navegation'>
                    <div className='div-init-nav'>
                        <Link
                            style={{ color: '#000', textDecoration: 'none' }}
                            to='/home'
                        >
                            Inicio
                        </Link>
                    </div>
                    <div className='div-handle-nav'>
                        <Link
                            style={{ color: '#000', textDecoration: 'none' }}
                            to='/handle'
                        >
                            Manejo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar