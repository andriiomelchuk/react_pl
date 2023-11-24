import {useDispatch} from "react-redux";

import {setSelectedLanguage} from "../../store/popular/popular.action";


const LanguageSelector = ({languages, selectedLanguageIndex}) => {
    const dispatch = useDispatch();
    return (
        <ul className='languages'>
            {languages.map((language, index) => (
                <li key={index}
                    style={{color: index === selectedLanguageIndex ? '#d0021b' : '#000000'}}
                    onClick={() => dispatch(setSelectedLanguage(index))}
                >
                    {language}
                </li>
            ))}
        </ul>
    )
}

export default LanguageSelector