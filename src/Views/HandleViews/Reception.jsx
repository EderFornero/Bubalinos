import React, { useContext } from 'react'
import { UseApiContext } from '../../Context/UseFirebaseContext'

function Reception() {

  const { info } = useContext(UseApiContext);

  return (
    <div className='div-handle-info-general'>
    <h4>Manejo de recepción</h4>
    <div>
      {info.id !== 0 && info.map((inf, i) => {
        return(
          <div className='div-handle-info-specific' key={i}>
            <p>{inf.reception}</p>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default Reception