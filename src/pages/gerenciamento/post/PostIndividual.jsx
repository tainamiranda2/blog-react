import React from 'react'
import { useParams } from 'react-router-dom'
import { authFetchDocument } from '../../../hooks/AuthFetchDocument';

export const Postindividual=()=>{

    const {id}= useParams();
const {document:post}=  authFetchDocument("posts",id)
    return(
        <div>

            <h1>Post individual {id}</h1>

        </div>
    )
}