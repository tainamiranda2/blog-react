import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authFetchDocuments } from '../../hooks/AuthFetchDocuments';
import './Modulo.css';

//components
import PostDetail from '../../components/postdetail/postdetail';

const Home = () => {
const [query,setQuery]=useState("")
const {documents:posts}=authFetchDocuments("posts")
//console.log("aou a home",posts.length)

const navigate=useNavigate()
const handleSubmit=(e)=>{
    e.preventDefault()
    if(query){
        return navigate(`search?q=${query}`)
    }
}
//console.log(loading)
    return (
        <div className='home'>
          
            <h1>Veja os postes mais recentes</h1>
            <form className='search_form' onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Ou busque por tags"
                onChange={(e)=>setQuery(e.target.value)}
                />
                <button className='btn btn-dark'>
                    Pesquisar
                    </button>
            </form>
            <div>
             
            { posts? (

 <>
 {posts.map((testes)=>(
<div className='post_detail'>
<img src={testes.image} alt={testes.title}/>
<h2>{testes.title}</h2>
<p classname="">{testes.createdBy}</p>
<div classname="tags">
    <p>
              <span>{testes.tags}</span>  
              </p>
            </div>
            <Link to={`/posts/${testes.id}`} className="btn btn-outline">Ler</Link>
</div>
               
 ))}

 </>

            ):(
                <>
               Não tem post ainda
                </>
            )}
  
            </div>
        </div>
    )
}

export default Home;