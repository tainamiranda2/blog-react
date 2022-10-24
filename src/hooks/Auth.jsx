import  {db} from '../firebase/config'
import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile

}   from 'firebase/auth';

import React, { useEffect, useState } from 'react'

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
    try{
        const {user}= await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        )

await updateProfile(user,{
    displayName:data.displayName
    })
    return  user;

    }catch(error){
        console.log(error.message)
        console.log(typeof  error.message)

    }
setLoading(false)
}

useEffect(()=>{
    return  ()=>setCancel(true)
},[])

return{
    auth,
    createuser,
    error,
    loading
}
}