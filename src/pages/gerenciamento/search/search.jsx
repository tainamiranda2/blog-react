import { authFetchDocuments } from '../../../hooks/AuthFetchDocuments';
import {AuthQuery} from '../../../hooks/AuthQuery';

const Search=()=>{
    const query=AuthQuery()
    const search=query.get("q")
    return(
        <div>
            <h2>Search</h2>
<p>{search}</p>
        </div>
    )
}
export default Search 