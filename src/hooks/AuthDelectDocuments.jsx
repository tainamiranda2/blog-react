
import {db} from '../firebase/config'
import {doc, deleteDoc} from 'firebase/firestore'
import { useReducer,useEffect,useState  } from 'react'



const initialState={
    loading:null,
    error:null
}
const deleteReducer=(state,action)=>{
switch(action.type){
    case "LOADING":
        return {loading:true, error:null}
    case "DELECTED_DOC":
        return {loading:false, error:null}
    case "ERROR":
        return {loading:false, error:action.payload}
        default:
            return state
}
}

export const AuthDelectDocuments=(docCollection)=>{
    const [response,dispatch]=useReducer(deleteReducer, initialState)

const [calcel, setCalcel]=useState(false)

const checkCancelBeforeDispatch=(action)=>{
    if(!calcel){
        dispatch(action)
    }
}
const delectDocument=async(id)=>{
    checkCancelBeforeDispatch({
        type:"LOADING"
        //payload:insertedDocument
        })
    try{
       const deletedDocuments=await deleteDoc(doc(db,docCollection, id))


    checkCancelBeforeDispatch({
    type:"DELECTED_DOC",
    payload:deletedDocuments
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
return {delectDocument, response}
}