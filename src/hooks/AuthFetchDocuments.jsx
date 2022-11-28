import {db} from '../firebase/config'

import { collection, query, orderBy, onSnapshot, where, QuerySnapshot } from 'firebase/firestore'
import { useState,useEffect } from 'react'

export const authFetchDocuments=(doCollection, search=null, uid=null)=>{
const [documents, setDocuments]=useState(null)
const [error, setError]=useState(null)
const [loading, setLoading]=useState(null)


const [calcel, setCalcel]=useState(false)

useEffect(()=>{
async function lodData(){
    if(calcel) return
    setLoading(true)
    const collectionRef=await collection(db, doCollection)
    try{
        let q;
        //busca

        //dashbard
    q=await query(collection, orderBy("createAt", "desc"))
    await onSnapshot(q,(querySnapshot)=>{
        setDocuments(
            querySnapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }))
        )
    })
    setLoading(false)
    }catch(error){
        console.log(error)
        setError(error.message)
        setLoading(false)
    }
}

},[doCollection,search,uid, calcel])
useEffect(()=>{
    return()=>setCalcel(true)
},[])
return {documents, loading, error};
}