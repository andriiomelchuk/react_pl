import {useEffect, useState} from "react";
import {fetchPopularRepos} from '../../API/api'
import LanguageSelector from './LanguageSelector'
import PopularList from "./PopularList";
import {useSelector} from "react-redux";

const languages = ['All', 'JavaScript', 'Java', 'Ruby', 'CSS', 'Python'];

const Index = () => {

    const selectedLanguageIndex = useSelector(state => state.popular.selectedLanguageIndex);

    const [loading, setLoading] = useState(true);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchPopularRepos(languages[selectedLanguageIndex])
            .then(repos => setRepos(repos))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [selectedLanguageIndex])

    console.log(selectedLanguageIndex, 'selected')

    return (
        <div>
            <LanguageSelector setLoading={setLoading}  languages={languages} selectedLanguageIndex={selectedLanguageIndex} />
            <PopularList repos={repos} loading={loading} error={error}/>
        </div>
    )
}

export default Index;