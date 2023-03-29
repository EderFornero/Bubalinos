import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Handle() {
    return (
        <div className='div-handle-bg'>
            <div className='div-handle-main'>
                <div className='div-handle-handlings'>
                    <div className='div-navlink'>
                        <NavLink
                            className='navlink-hover'
                            style={{ color: 'black', textDecoration: 'none' }}
                            to="/handle/facilities"
                        >
                            <h4>Instalaciones de embarque</h4>
                        </NavLink>
                    </div>
                    <div className='div-navlink'>
                        <NavLink
                            className='navlink-hover'
                            style={{ color: 'black', textDecoration: 'none' }}
                            to="/handle/shipment"
                        >
                            <h4>Manejo de embarque</h4>
                        </NavLink>
                    </div>
                    <div className='div-navlink'>
                        <NavLink
                            className='navlink-hover'
                            style={{ color: 'black', textDecoration: 'none' }}
                            to="/handle/reception"
                        >
                            <h4>Manejo de recepción</h4>
                        </NavLink>
                    </div>
                    <div className='div-navlink'>
                        <NavLink
                            className='navlink-hover'
                            style={{ color: 'black', textDecoration: 'none' }}
                            to="/handle/alleys"
                        >
                            <h4>Callejones</h4>
                        </NavLink>
                    </div>
                    <div className='div-navlink'>
                        <NavLink
                            className='navlink-hover'
                            style={{ color: 'black', textDecoration: 'none' }}
                            to="/handle/sleeve"
                        >
                            <h4>Manejo en la manga</h4>
                        </NavLink>
                    </div>
                    <div className='div-navlink'>
                        <NavLink
                            className='navlink-hover'
                            style={{ color: 'black', textDecoration: 'none' }}
                            to="/handle/caravan"
                        >
                            <h4>Implementación de caravana</h4>
                        </NavLink>
                    </div>
                    <div className='div-navlink'>
                        <NavLink
                            className='navlink-hover'
                            style={{ color: 'black', textDecoration: 'none' }}
                            to="/handle/sacrifice"
                        >
                            <h4>Manejo antes del sacrificio</h4>
                        </NavLink>
                    </div>
                    <div className='div-navlink'>
                        <NavLink
                            className='navlink-hover'
                            style={{ color: 'black', textDecoration: 'none' }}
                            to="/handle/vacc"
                        >
                            <h4>Vacunación</h4>
                        </NavLink>
                    </div>
                    <div className='div-navlink' style={{ border: 'none' }}></div>
                </div>
            </div>
            <div className='div-outlet'>
                <Outlet />
            </div>
        </div>
    )
}

export default Handle