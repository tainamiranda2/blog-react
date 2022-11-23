import React, { useEffect, useState } from 'react'
import  {db} from '../firebase/config'
import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile

}   from 'firebase/auth';


export const Auth=()=>{
    const [error,seterror]=useState(null);
    const [loading, setLoading]=useState(null);


//sem resquicio de funções
const [cancel,setCancel]=useState(false)

const auth =getAuth();
function checkfisCancel(){
    if(cancel){
        return
    }
}

//criad usr
const createuser=async(data)=>{
    checkfisCancel()

    setLoading(true)
    seterror(null)
    try{
        const {user}= await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        )

await updateProfile(user,{
    displayName:data.displayName
    })
    setLoading(false)
    return  user;

    }catch(error){
        console.log(error.message)
        console.log(typeof error.message)

        let systemerrorMessage;

        if(error.message.includes('Password')){
            systemerrorMessage="A senha precisa ter 6 caracters"
        
        }else  if(error.message.includes('email-already')){
            systemerrorMessage="email já cadastrado"

        }else{
            systemerrorMessage="ocorreu um erro, por favor tente mais tarde"

        }
        setLoading(false)
        seterror(systemerrorMessage)
    }


}
//logoun
const  logout=()=>{
checkfisCancel();
signOut(auth)
}
//login
const login=async(data)=>{
    checkfisCancel()
    setLoading(true)
    seterror(false)
    try{
await signInWithEmailAndPassword(auth, data.email, data.password)

setLoading(false)
}catch(error){
    let systemerrorMessage;

    if(error.message.includes('user-not-found')){
       systemerrorMessage="Usuário não encontrado"
    }else if(error.message.includes('wrong-password')){
        systemerrorMessage="Senha não encontrado"
    }else{
        systemerrorMessage="Ocorreu um erro, por favor tente mais tarde"
    }
    seterror(systemerrorMessage)
    }
}
useEffect(()=>{
    return  ()=>setCancel(true)
},[])

return{
    auth,
    createuser,
    error,
    loading,
    logout,
    login
}
}