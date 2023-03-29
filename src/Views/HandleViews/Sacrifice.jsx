import React, { useContext } from 'react'
import { UseApiContext } from '../../Context/UseFirebaseContext'

function Sacrifice() {

  const { info } = useContext(UseApiContext);

  return (
    <div className='div-handle-info-general'>
    <h4>Sacrificio</h4>
    <div>
      {info.id !== 0 && info.map((inf, i) => {
        return(
          <div className='div-handle-info-specific' key={i}>
            <p>{inf.sacrifice}</p>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default Sacrifice