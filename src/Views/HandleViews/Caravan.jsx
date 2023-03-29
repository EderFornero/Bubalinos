import React, { useContext } from 'react'
import { UseApiContext } from '../../Context/UseFirebaseContext'

function Caravan() {

  const { info } = useContext(UseApiContext);

  return (
    <div className='div-handle-info-general'>
      <h4>Implementación de caravana</h4>
      <div>
        {info.id !== 0 && info.map((inf, i) => {
          return (
            <div className='div-handle-info-specific' key={i}>
              <p>{inf.caravan_implementation}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Caravan