import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile

}   from 'firebase/auth';

import React, { useEffect, useState } from 'react'

export const Auth=()=>{
    const [msg, setMsg]=useState(null);
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
const crateuser=async(data)=>{
    checkfisCancel()

    setLoading(true)
    try{
        const{user}= await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        )

await updateProfile(user,{
    displayName:data.displayName
    })
    return  user;

    }catch(msg){
        console.log(msg)
    }
setLoading(false)
}

useEffect(()=>{
    return  ()=>setCancel(true)
},[])


}