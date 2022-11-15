import React from 'react';
import './Modulo.css';
import { Link } from 'react-router-dom';
import {Auth} from '../../hooks/Auth';
import {useAuthValue} from '../../context/AuthContext'
const Navbar = () => {
    
const {user} =useAuthValue()
    return (
              
        <nav className='navbar'>
                
                   
                <Link className='brand' to="/">
                    Mini <span>Blog</span>
                </Link>
            
           <ul className='links_list'>
            <li >
                    <Link to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Homi
                    </Link>    
                </li> 
                {!user &&(
                    <>
                    <li>
                    <Link to="/Login" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Entrar
                    </Link>    
                </li>
                <li>
                    <Link to="/Register" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Cadastro
                    </Link>    
                    </li>
                    </>
                )}
                
                    <li>
                    <Link to="/About" className={({ isActive }) => (isActive ? 'active' : '')}>
                        About
                    </Link>    
                    </li>
                </ul>
           </nav>
     
         
    )
}

export default Navbar;