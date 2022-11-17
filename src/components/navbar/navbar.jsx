import React from 'react';
import './Modulo.css';
import { Link } from 'react-router-dom';
import {Auth} from '../../hooks/Auth';
import {useAuthValue} from '../../context/AuthContext'
const Navbar = () => {
    
const {user} =useAuthValue()
const {logout}=Auth()
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
                
                {user && (
                 <>
                 <li>
                 <Link to="/Posts/Create" className={({ isActive }) => (isActive ? 'active' : '')}>
                    Novo post
                 </Link>    
             </li>
             <li>
                 <Link to="/Dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
                     Dashboard
                 </Link>    
                 </li>
                 </>
             )}
            
                    <li>
                    <Link to="/About" className={({ isActive }) => (isActive ? 'active' : '')}>
                        About
                    </Link>    
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