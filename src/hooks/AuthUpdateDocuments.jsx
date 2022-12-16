
import {db} from '../firebase/config'
import {updateDoc, doc} from 'firebase/firestore'
import { useReducer,useEffect,useState  } from 'react'



const initialState={
    loading:null,
    error:null
}
const updateReducer=(state,action)=>{
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

export const AuthUpdateDocuments=(docCollection)=>{
    const [response,dispatch]=useReducer(updateReducer, initialState)

const [calcel, setCalcel]=useState(false)

const checkCancelBeforeDispatch=(action)=>{
    if(!calcel){
        dispatch(action)
    }
}
const updateDocument=async(id, data)=>{
    checkCancelBeforeDispatch({
        type:"LOADING"
        //payload:insertedDocument
        })
    try{
     const docREf=await doc(db, docCollection,id)

     const updatedDocument=await updateDoc(docREf, data)

    checkCancelBeforeDispatch({
    type:"UPDATED_DOC",
    payload:updatedDocument
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
return {updateDocument, response}
}