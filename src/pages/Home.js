import React from 'react'

import img_home_car from '../img/img_home_car.jpg'
import carro1 from '../img/carro1.jpeg'
import carro2 from '../img/carro2.jpeg'
import carro3 from '../img/carro3.jpeg'
import carro4 from '../img/carro4.jpeg'




export const Home = () => {
  return (
    <div className="bg-gray-900 ">
      <img src={img_home_car} alt="imagem Pavorô" />
      <div className='text-center py-[2.5rem] '>
        <h2 className='font-fira-sans font-bold text-green-500 text-center text-5xl'>Celebridades apoiam</h2>
        <h2 className="font-fira-sans font-bold text-white text-center text-5xl">Só falta você!</h2>
      </div>
      <div>
        <div ><iframe width="728" height="410" src="https://www.youtube.com/embed/X20V-u5MDCY" title="Pavorô do programa do ratinho irá te ajudar a realizar o seu sonho" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='mx-auto'></iframe></div>
      </div>
      <h4 className='font-fira-sans font-bold text-white text-center text-lg py-[1rem] border-b h-20'>Milene Pavorô</h4>
      <div className='bg-white'>
        <h2 className='font-fira-sans font-bold text-gray-900 text-center text-5xl py-[3rem]'>Últimos Ganhadores</h2>
        <div className="max-w-full " >
          <iframe width="538" height="302" src="https://www.youtube.com/embed/-xNQ9jwh69s" title="Sorteio ao vivo do Portal de Prêmios Dia 24/03/23 edição 0007" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="max-w-lg mx-auto"></iframe>
          <div className='max-w-lg mx-auto text-gray-900'>
            <h6 className='py-4'>7º Edição 24/03/2023 (UM PIX DE 100 MIL OU UMA COROLLA 0KM)</h6>
            <p>Cartela: 532632</p>
            <p>Telefone: (38) 9****-2689</p>
            <p>Cidade/UF: Paracatu/MG</p>
          </div>
        </div>
        <h2 className='font-fira-sans font-bold text-gray-900 text-center text-5xl py-[3rem]'>Imagens do Prêmio</h2>
        <div className='bg-white pb-16'>
          <div class="max-w-[60%] mx-auto">
            <div className="carousel w-full ">
              <div id="slide1" className="carousel-item relative w-full ">
                <img src={carro1} className="w-full " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 transition duration-800">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={carro2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img src={carro3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img src={carro4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
