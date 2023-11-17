import CircularIndeterminate from "../../Components/Loader/Loader";

const PopularList = ({repos, loading, error}) => {

    if(loading) {
        return (
            <CircularIndeterminate />
        )
    }

    if(error) {
        return <p>{error}</p>
    }

    return (
        <ul className='popular-list'>
            {repos.map((repo, index) => {
                return (
                    <li key={repo.id} className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul className='space-list-items'>
                            <li className='space-list-items'>
                                <img className='avatar' src={repo.owner.avatar_url} alt="Avatar"/>
                            </li>
                            <li>
                                <a href={repo.html_url} target='_blank' rel="noreferrer">{repo.name}</a>
                            </li>
                            <li>@{repo.owner.login} </li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

export default PopularList