import { useState } from 'react';
//import { useDispatch } from 'react-redux';//to manually dispatch
//import { actionCreators } from '../state';
import { useActions } from '../hooks/useActions';
//import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';

const ReposList: React.FC = () => {
    const [term, setTerm] = useState('');
    //const dispatch = useDispatch();
    const { searchRepos } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.repos);
    //console.log(data);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); //avoid page refresh
        //Works, but too long. Simplify via a new hook.
        //dispatch(actionCreators.searchRepos(term) as any);
        searchRepos(term);
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)} />
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
}

export default ReposList;