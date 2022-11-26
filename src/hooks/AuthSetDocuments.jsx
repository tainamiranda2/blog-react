
import {db} from '../firebase/config'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
import { useReducer } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const initialState={
    loading:null,
    error:null
}
const insertReducer=(state,action)=>{
switch(action.type){
    case "LOADING":
        return {loading:true, error:null}
    case "INSERTED_DOC":
        return {loading:false, error:null}
    case "ERROR":
        return {loading:false, error:action.payload}
        default:
            return state
}
}

export const AuthSetDocuments=(docCollection)=>{
    const [response,dispatch]=useReducer(insertReducer, initialState)

const [calcel, setCalcel]=useState(false)

const checkCancelBeforeDispatch=(action)=>{
    if(!calcel){
        dispatch(action)
    }
}
const insertDocument=async(document)=>{
    checkCancelBeforeDispatch({
        type:"LOADING"
        //payload:insertedDocument
        })
    try{
        const newDocument={...document, createdAt: Timestamp.now()}
    const insertedDocument=await addDoc(
        collection(db, docCollection),
        newDocument
    )
    checkCancelBeforeDispatch({
    type:"INSERTED_DOC",
    payload:insertedDocument
    })

    }catch(error){
        checkCancelBeforeDispatch({
            type:"ERROR",
            payload:error.message
            })
    }
}
useEffect(()=>{
    return()=>setCalcel(true)
},[])
return {insertDocument, response}
}