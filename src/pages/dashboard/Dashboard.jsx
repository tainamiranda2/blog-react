import { Link } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { authFetchDocuments } from '../../hooks/AuthFetchDocuments';
import './dashboard.css';
const  Dashboard = () =>{
const {user}= useAuthValue()
const uid=user.uid
const {documents: posts}=authFetchDocuments("posts", null, uid)
//post do usuario
const deleteDocument=()=>{

}
    return(
        <div className='dashboard'>
        <h1>Dashboard</h1> 
        <p>Gerencie seus post</p> 
        {posts && posts.length=== 0 ?(
            <div className='nopostss'>
<p>Não foram encontraados posts</p>
<Link to="posts/create">Criar post</Link>
            </div>
        ):(
            <>
            <div className='post_header'>
                <span>Título</span>
                <span>Ações</span>
             </div>

             <div className='post_row'>   
                {posts && posts.map((post)=>
                 <div>

 <p>{post.title}</p>
     <Link className='btn btn-outline' to={`/posts/${post.id}`}>
        Ver
    </Link>       
           <Link  className='btn btn-outline' to={`/posts/edit/${post.id}`}>
           Editar
           </Link>
           <button  className='btn btn-danger' onClick={()=>deleteDocument(post.id)}>
            Excluir
           </button>
            </div>

                )}
            </div>
            </>
        )}
       
      
        </div>
    )
}
export default  Dashboard ;