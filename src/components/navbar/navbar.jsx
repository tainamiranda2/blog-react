import React from 'react';
import './Modulo.css';
import { NavLink } from 'react-router-dom';
import {Auth} from '../../hooks/Auth';
import {useAuthValue} from '../../context/AuthContext'
const Navbar = () => {
    
const {user} =useAuthValue()
const {logout}=Auth()
    return (
              
        <nav className='navbar'>
                
                   
                <NavLink className='brand' to="/">
                    Mini <span>Blog</span>
                </NavLink>
            
           <ul className='links_list'>
            <li >
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Homi
                    </NavLink>    
                </li> 
                {!user &&(
                    <>
                    <li>
                    <NavLink to="/Login" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Entrar
                    </NavLink>    
                </li>
                <li>
                    <NavLink to="/Register" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Cadastro
                    </NavLink>    
                    </li>
                    </>
                )}
                
                {user && (
                 <>
                 <li>
                 <NavLink to="/Posts/Create" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Novo post
                 </NavLink>    
             </li>
             <li>
                 <NavLink to="/Dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
                     Dashboard
                 </NavLink>    
                 </li>
                 </>
             )}
            
                    <li>
                    <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : '')}>
                        About
                    </NavLink>    
                    </li>
                    {user && (
                        <li>
                            <button onClick={logout}>Sair</button>
                        </li>
                    )}

                </ul>
           </nav>
     
         
    )
}

export default Navbar;