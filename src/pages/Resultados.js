import React from 'react'

import resultados from '../img/resultados.jpg'
export const Resultados = () => {
  return (
    <div>
      <div className='font-fira-sans font-bold text-green-500 text-center text-5xl '>
        <h1 className='text-center py-[2.5rem]'>Resultados</h1>
        <img src={resultados} alt="" className='mx-auto pb-32' />
      </div>
    </div>
  )
}
