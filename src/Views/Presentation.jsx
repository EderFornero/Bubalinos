import React from 'react'
import { Link } from 'react-router-dom'
import PresentationImage from '../assets/images/presentation.jpg'


function Presentation() {
    return (
        <>
            <div className='div-presentation-text'>
                <div className='div-presentation-text-p'>
                    <div className='div-production'>
                        <Link
                        style={{color: 'black'}}
                        to="/home"
                        >
                        <button className='production'>PRODUCCIÓN DE LECHE BUBALINA</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right arrowSvg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                        </Link>
                    </div>
                    <p className='project'>*Proyecto escolar de 7º año</p>
                </div>
            </div>
            <div className='div-presentation-img'>
                <img src={PresentationImage} alt="Presentation" />
            </div>
        </>
    )
}

export default Presentation