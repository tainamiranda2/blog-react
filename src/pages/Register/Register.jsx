import React from 'react';
import './Modulo.css';
import { useEffect,useState } from 'react';
import { Auth } from '../../hooks/Auth';

const Register = () => {
    const [displayName,setDisplayName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setconfirmpassword]=useState('')
    const [error,seterror]=useState('')
//imptand   usr

    const   {createuser,error:autherror,loading}=Auth()

    const handSubmit=async(e)=> {
        e.preventDefault()
        seterror('')
   
//criand user
const user={
    displayName,
    email,
    password
}

if(password!==confirmpassword){
    seterror('Senhas diferentes')
    return
}

const res=await createuser(user)
//console.log(user)
//console.log(displayEmail)
//console.log(displayName)
//console.log(password)

}

useEffect(()=> {
if(autherror){
    seterror(autherror)
}

},[autherror])

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
                        name='email'
                        required
                        placeholder='Email do usuário'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
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
               {!loading &&  <button className='btn'>Cadastrar</button>}
               {loading &&  <button className='btn' disabled>Aguarde</button>}
                {error &&<p className='error'>{error}</p>}

            </form>
        </div>
    )
}

export default Register;