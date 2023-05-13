import React, { useState } from 'react'

import logo from '../img/logo8.png'
import { NavLink } from 'react-router-dom';

export const Navbar2 = () => {

    const [menu, setMenu] = useState('hidden md:hidden');

    const handleclick = () => {
        menu === 'hidden md:hidden' ? setMenu('md:hidden') : setMenu('hidden md:hidden');
    }


    return (
        <nav >
            <div className="max-w-7x1 mx-auto border-t-8 border-solid border-green-500" >
                <div className="flesx items-center justify-between bg-gray-900">
                    <div className="flex items-center justify-between p-4 px-14">
                        <li className="flex-shrink-0 ">
                            <NavLink to="/"><img className="h-16 w-16 rounded-full" src={logo} alt="Logo Dezenas da Sorte" /></NavLink>
                        </li>
                        <div className='hidden md:block '>
                            <ul className='ml-1 flex items-center space-x-4'>
                                <NavLink to="/"><li className="hover:bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-medium transition duration-300 ease-in-out ">Home</li></NavLink>
                                <NavLink to="/resultados"><li className="hover:bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-medium transition duration-300 ease-in-out " >Conferir Resultados</li></NavLink>
                                <NavLink to="/quem_somos"><li className="hover:bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-medium transition duration-300 ease-in-out ">Quem Somos</li></NavLink>
                                <NavLink to="/minha_cartela"><li className="hover:bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-medium transition duration-300 ease-in-out ">Consultar Minha Cartelas</li></NavLink>
                                <a href="https://www.instagram.com/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram" color="green"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
                                <a href="https://www.youtube.com/"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube" color="green"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
                                <a href="https://pt-br.facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook" color="green" ><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                                <a href="https://twitter.com/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter" color="green"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
                            </ul>
                        </div>
                        <div className='-mr-2 flex md:hidden'>
                            <button id='botao' type='button' className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-300 ease-in-out' aria-label='Menu' aria-expanded="false" onClick={handleclick}>
                                <svg className='h-8 w-8' stroke="currentColor" fill="none" viewBox="0 0 24 24"   >
                                    <path strokeLinecap='round' strokeLinejoin='round' stroke-wigth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>

                    </div>

                </div>
            </div>

            <div id='menu' className={menu}>
                <ul className='px-2 pt-2 pd-3 sm:px-3  bg-gray-900 pb-[1rem]'>
                    <NavLink to="/"><li className="hover:bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-medium transition duration-300 ease-in-out ">Home</li></NavLink>
                    <NavLink to="/resultados"><li className="hover:bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-medium transition duration-300 ease-in-out " >Conferir Resultados</li></NavLink>
                    <NavLink to="/quem_somos"><li className="hover:bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-medium transition duration-300 ease-in-out ">Quem Somos</li></NavLink>
                    <NavLink to="/minha_cartela"><li className="hover:bg-gray-700 text-white px-2 py-1 rounded-md text-sm font-medium transition duration-300 ease-in-out ">Consultar Minha Cartelas</li></NavLink>
                </ul>

            </div>
        </nav>

    )
}
