import React, { useContext } from 'react'
import { UseApiContext } from '../Context/UseFirebaseContext'

function Description() {

    const { info } = useContext(UseApiContext);

    return (
        <div className='div-description'>
            <div className='div-description-main'>
                <div className='div-description-content'>
                    {info.id !== 0 && info.map((info, i) => {
                        return (
                            <>
                                <div className='div-description-p' key={i}>
                                    <h3>DESCRIPCIÓN</h3>
                                    <p className='p-info-description'>{info.description}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className='div-description-objetives-main'>
                <div className='div-description-objetives'>
                    <div className='div-description-objetives-h4'>
                        <h4>Objetivos</h4>
                    </div>
                    <div className='div-description-objetives-ul'>
                        <ul className='ul-description-objetives'>
                            <li>Aumentar su producción</li>
                            <li>Trasladar la producción de leche de búfala a la zona</li>
                            <li>Conocer más sobre la especie</li>
                            <li>Producir una excelente calidad de leche</li>
                            <li>Adquirir buena fuente de ingresos</li>
                            <li>Aumentar la fertilidad del rodeo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description