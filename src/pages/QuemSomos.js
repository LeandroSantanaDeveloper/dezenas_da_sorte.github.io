import React from 'react'

import quem_somos from '../img/quem_somos.png'

export const QuemSomos = () => {
  return (
    <div>
      <div className='font-fira-sans font-bold text-green-500 text-center text-5xl '>
        <h1 className='text-center py-[2.5rem]'>Quem Somos</h1>
        <img src={quem_somos} alt="" className='mx-auto' />
      </div>
    </div>
  )
}
