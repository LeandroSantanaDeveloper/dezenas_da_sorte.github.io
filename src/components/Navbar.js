import { NavLink } from "react-router-dom";

import logo from '../img/logo.png'


export const Navbar = () => {
    return (
        <nav className="bg-gray-900 flex justify-around border-t-8 border-solid border-green-500">
            <NavLink to="/">
                <img src={logo} alt="" className="max-w-[13rem] pt-1" />
            </NavLink>
            <ul className="flex items-center">
                <li className="m-8"><NavLink to="/">Home</NavLink></li>
                <li className="m-8" ><NavLink to="/resultados">Conferir Resultados</NavLink></li>
                <li className="m-8"><NavLink to="/quem_somos">Quem Somos</NavLink></li>
                <li className="m-8"><NavLink to="/minha_cartela">Consultar Minha Cartelas</NavLink></li>



            </ul>
        </nav>

    )
}
