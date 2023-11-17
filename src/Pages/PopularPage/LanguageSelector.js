
const LanguageSelector = ({languages, selectedLanguageIndex, setSelectedLanguageIndex, setLoading}) => {

    return (
        <ul className='languages'>
            {languages.map((language, index) => (
                <li key={index}
                    style={{color: index === selectedLanguageIndex ? '#d0021b' : '#000000'}}
                    onClick={() => {setSelectedLanguageIndex(index); setLoading(true)}}
                >
                    {language}
                </li>
            ))}
        </ul>
    )
}

export default LanguageSelector