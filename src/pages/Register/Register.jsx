import React from 'react';
import './Modulo.css';
import { useEffect,useState } from 'react';
import { Auth } from '../../hooks/Auth';

const Register = () => {
    const [displayName,setDisplayName]=useState('')
    const [displayEmail,setDisplayEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setconfirmpassword]=useState('')
    const [error,seterror]=useState('')
//imptand   usr

    const   {createuser,error:auth,loading}=Auth()

    const handSubmit=async(e)=> {
        e.preventDefault()
        seterror('')
   
//criand user
const user={
    displayName,
    displayEmail,
    password
}

if(password!==confirmpassword){
    seterror('Snhas difrnts')
    return
}

const res=await createuser(user)
console.log(res)
}

    return (
        <div className='register'>
            <h1>Cadastra-se</h1>
            <p>Crie usúario e comartilhe suas histórias</p>
            <form onSubmit={handSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name='displayName'
                        required
                        placeholder='Nomme do usuário'
                        value={displayName}
                        onChange={(e)=>setDisplayName(e.target.value)}
                    />
                    
                </label>
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
                     <label>
                    <span>confime Password:</span>
                    <input
                         type="password"
                        name='confime'
                        required
                        placeholder='confirme Senha do usuário'
                        value={confirmpassword}
                        onChange={(e)=>setconfirmpassword(e.target.value)}
                    />
               </label>
                <button className='btn'>Cadastrar</button>
                {error &&<p className='error'>{error}</p>}

            </form>
        </div>
    )
}

export default Register;