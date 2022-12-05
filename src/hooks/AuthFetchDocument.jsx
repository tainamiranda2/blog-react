import {db} from '../firebase/config'

import { doc, getDoc} from 'firebase/firestore'
import { useState,useEffect } from 'react'

export const authFetchDocument=(docCollection,id)=>{
const [document, setDocument]=useState(null)
const [error, setError]=useState(null)
//const [loading, setLoading]=useState(null)


const [calcel, setCalcel]=useState(false)

useEffect(()=>{
async function lodDocument(){
    if(calcel) {
        return
}
//setLoading(true)
try{
    const docRef=await doc(db, docCollection, id)
    const docSnap=await getDoc(docRef)
    setDocument(docSnap.data())

}catch(erro){
setError(erro)
console.log(erro)
}
   
    //setLoading(false)
}
lodDocument()

},[docCollection,search,uid, calcel])
console.log(document)

useEffect(()=>{
    return()=>setCalcel(true)
},[])

return {document,  error};
}