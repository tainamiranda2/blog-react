import { useState } from "react";

//import styles from './Modulo.css';
const  Post = () =>{
    const [title, setTitle]=useState("")
    const [image, setImage]=useState("")
    const [bory, setBory]=useState("")
    const [tags, setTags]=useState([])
    const [formError, setFormError]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
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

                        type="url"
                        name='tags'
                        required
                        placeholder='insira as tags por virgulas'
                        value={tags}
                        onChange={(e)=>setTags(e.target.value)}
                    />
                    
                </label>
                <button className='btn'>Cadastrar</button>
           {/**    {!loading &&  <button className='btn'>Cadastrar</button>}
               {loading &&  <button className='btn' disabled>Aguarde</button>}
                {error &&<p className='error'>{error}</p>}
       */}  
                </form>
        </div>
    )
}
export default Post;