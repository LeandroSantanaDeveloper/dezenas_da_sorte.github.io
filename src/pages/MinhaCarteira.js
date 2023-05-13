import React from 'react'

import carteira from '../img/carteira.avif'

export const MinhaCarteira = () => {
  return (
    <div className='font-fira-sans font-bold text-green-500 text-center text-5xl '>
      <h1 className='text-center py-[2.5rem]'>Minha carteira</h1>
      <img src={carteira} alt="" className='mx-auto pb-32' />
    </div>
  )
}
