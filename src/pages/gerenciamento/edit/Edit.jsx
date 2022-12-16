import { useState } from "react";
import { useAuthValue } from '../../../context/AuthContext';
import { AuthUpdateDocuments} from '../../../hooks/AuthUpdateDocuments';
import { authFetchDocument } from '../../../hooks/AuthFetchDocument';
import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import  './post.css';
const Edit = () =>{
    const {id}= useParams()

    const {document: post} =authFetchDocument("posts", id)
   
    const [title, setTitle]=useState("")
    const [image, setImage]=useState("")
    const [bory, setBory]=useState("")
    const [tags, setTags]=useState([])
    const [formError, setFormError]=useState("")

    useEffect(()=>{
        if(post){
            setBory(post.title)
            setTitle(post.title)
            setImage(post.image)
        }
//const textTags=post.tags.join(",")
//setTags(textTags)
    },[post])
      //  console.log(post)
    
    const {updateDocument, response}=AuthUpdateDocuments("posts")

    const {user}=useAuthValue()

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormError("")
        //validadno  imagens
        try{
            new URL(image)
        }catch(error){
            setFormError("A imagem precis aer uma URL")

        }
        if(formError){
            return;
        }

        const data={
            title,
            image,
            bory,
            tags,
            uid:user.uid,
            createdBy:user.displayName
        }
        updateDocument(id, data)
        Navigate("/Dashboard")
    }

    return(
        <div className="createpost">
        <h1>Posts</h1>
        <p>Editando o que quiser compartilhar</p>
        <form onSubmit={handleSubmit}>
        <label>
                    <span>Titúlo:</span>
                    <input
                        type="text"
                        name='title'
                        required
                        placeholder='pense em um bom titulo'
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    
                </label>
                <label>
                    <span>Image:</span>
                    <input
                        type="url"
                        name='image'
                        required
                        placeholder='pense em uma boa imagem'
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
                    />
                    
                </label>
                <img src={image}/>
                <label>
                    <span>Bory:</span>
                    <textarea
                      
                        name='bory'
                        required
                        placeholder='pense em no corpo do post'
                        value={bory}
                        onChange={(e)=>setBory(e.target.value)}
                    />
                    
                </label>
               
            {!response.loading &&  <button className='btn'>Editar</button>}
            {response.loading &&  <button className='btn' disabled>Aguarde</button>}
            {response.error &&<p className='error'>{response.error}</p>}
       
                </form>
        </div>
    )
}
export default Edit;