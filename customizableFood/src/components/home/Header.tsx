import { ReactElement } from "react";
import {NavLink} from 'react-router-dom'
import logo from '../../assets/Logo.png'

export const Header = () :ReactElement =>{
    return(
        <>
        <div id="logoContainer" >
            <img src={logo} alt={logo} />
        </div>
        <header id="Header-Home">
            <h1>Ok , so what are we up to today ? </h1>
            <nav>
                <NavLink id="Pizza-link" className='nav-link' to='/pizza'>Let's go for a pizza ! </NavLink>
                <NavLink id="Hamburger-link" className='nav-link' to='/hamburger'>Just give me the ham !</NavLink>
                <NavLink id="Pancake-link" className='nav-link' to='/pancake'>Let it be sweet !</NavLink>
            </nav>
        </header>
        </>
    )
}