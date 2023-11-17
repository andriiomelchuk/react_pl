import {useEffect, useState} from "react";
import {fetchPopularRepos} from '../../API/api'
import LanguageSelector from './LanguageSelector'
import PopularList from "./PopularList";

const languages = ['All', 'JavaScript', 'Java', 'Ruby', 'CSS', 'Python'];

const Index = () => {
    const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchPopularRepos(languages[selectedLanguageIndex])
            .then(repos => setRepos(repos))
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    }, [selectedLanguageIndex])


    return (
        <div>
            <LanguageSelector setLoading={setLoading}  languages={languages} selectedLanguageIndex={selectedLanguageIndex} setSelectedLanguageIndex={setSelectedLanguageIndex}/>
            <PopularList repos={repos} loading={loading} error={error}/>
        </div>
    )
}

export default Index;