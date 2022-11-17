import React from 'react';
//import styles from './Modulo.css';
import { useEffect,useState } from 'react';
import { Auth } from '../../hooks/Auth';

const Login = () => {
    
    const [displayEmail,setDisplayEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const [error,seterror]=useState()
//imptand   usr
const   {login,error:autherror,loading}=Auth()


    const handSubmit=async(e)=> {
        e.preventDefault()
        seterror('')
   
//criand user

const user={displayEmail,password}
const res=await login(user)

}

useEffect(()=> {
if(autherror){
    seterror(autherror)
}

},[autherror])
    return (
        <>
           <h1>Entrar</h1>
           <p>Faça o login para utlizar o sistema</p>
            <form onSubmit={handSubmit}>
               
               
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name='displayEmail'
                        required
                        placeholder='Email do usuário'
                        value={displayEmail}
                        onChange={(e)=>setDisplayEmail(e.target.value)}
                    />
                    
                </label>
                <label>
                    <span>Password:</span>
                    <input
                        type="password"
                        name='password'
                        required
                        placeholder='Senha do usuário'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                     </label>
                    
               {!loading &&  <button className='btn'>Entrar</button>}
               {loading &&  <button className='btn' disabled>Aguarde</button>}
                {error &&<p className='error'>{error}</p>}

            </form>
        </>
    )
}

export default Login;