import { authFetchDocuments } from '../../../hooks/AuthFetchDocuments';
import {AuthQuery} from '../../../hooks/AuthQuery';
import PostDetail from '../../../components/postdetail/postdetail';
import { Link } from 'react-router-dom';

const Search=()=>{

    const query=AuthQuery()
    const search=query.get("q")
    const {documents: posts}=authFetchDocuments("posts", search)
 
    return(
        <div> 
            <h2>Search</h2>
<div>
    {posts && posts.length===0 &&(
        <>
        <p>Não foram encontrados posts a partir da sua busca ...</p>
        <Link to="/" className='bt btn-dark' >Voltar</Link>
        </>
    )}
    {posts && posts.map((post)=>(
        <PostDetail
        key={post.id}
        post={post}
        />
    ))}
</div>
        </div>
    )
}
export default Search 