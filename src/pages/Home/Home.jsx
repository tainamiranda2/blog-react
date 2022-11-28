import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { authFetchDocuments } from '../../hooks/AuthFetchDocuments';
import './Modulo.css';
const Home = () => {
const [query,setQuery]=useState("")
const {documents:posts, loading}=authFetchDocuments("posts")


const handleSubmit=(e)=>{
    e.preventDefault()
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
                <h1>Post ...</h1>
                {posts && posts.map((post)=>{
                    <h3>{post.title}</h3>
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