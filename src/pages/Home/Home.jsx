import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authFetchDocuments } from '../../hooks/AuthFetchDocuments';
import './Modulo.css';

//components
import PostDetail from '../../components/postdetail/postdetail';

const Home = () => {
const [query,setQuery]=useState("")
const {documents:posts, loading}=authFetchDocuments("posts")

const navigate=useNavigate()
const handleSubmit=(e)=>{
    e.preventDefault()
    if(query){
        return navigate(`search?q=${query}`)
    }
}
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
               {loading && <p>Carrregando ...</p>}
                {posts && posts.map((post)=>{
                    <PostDetail key={post.id} post={post} />
                })}
                {posts && posts.length===0 &&(
                    <div className='noposts'>
                        <p>Não foram encontrados posts</p>

                    <Link className='btn' to="/posts/create">
                        Criar primeiro post
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;