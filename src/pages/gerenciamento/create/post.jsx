import { useState } from "react";
import { useAuthValue } from '../../../context/AuthContext';
import { AuthSetDocuments } from '../../../hooks/AuthSetDocuments';

//import styles from './Modulo.css';
const  Post = () =>{
    const [title, setTitle]=useState("")
    const [image, setImage]=useState("")
    const [bory, setBory]=useState("")
    const [tags, setTags]=useState([])
    const [formError, setFormError]=useState("")

    const {insertDocument, response}=AuthSetDocuments("posts")

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

        insertDocument({
            title,
            image,
            bory,
            tags,
            uid:user.uid,
            createdBy:user.displayName
        })

    }

    return(
        <div className="createpost">
        <h1>Posts</h1>
        <p>Escrvea o que quiser compartilhar</p>
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
                <label>
                    <span>Tags:</span>
                    <input

                        type="text"
                        name='tags'
                        required
                        placeholder='insira as tags por virgulas'
                        value={tags}
                        onChange={(e)=>setTags(e.target.value)}
                    />
                    
                </label>
            {!response.loading &&  <button className='btn'>Cadastrar</button>}
            {response.loading &&  <button className='btn' disabled>Aguarde</button>}
            {response.error &&<p className='error'>{response.error}</p>}
       
                </form>
        </div>
    )
}
export default Post;