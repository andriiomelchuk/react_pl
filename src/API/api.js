import axios from "axios";

const handleError = (error) => console.error(error)

const getProfile = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}`)
        .then(user => user.data)
        .catch(handleError)
}

const getRepos = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}/repos`)
        .then(repos => repos.data)
        .catch(handleError)
}

const getStarCount = (repos) => {
    return repos.reduce((acc, repo) =>  acc + repo.stargazers_count, 0)
}

const calculateStore = (profile, repos) => {
    const followers = profile.followers;
    const totalStars = getStarCount(repos);
    return followers + totalStars;
}

const getUserData = (userName) => {
    return Promise.all([
        getProfile(userName),
        getRepos(userName)
    ])
        .then(([profile, repos]) => {
            return {
                profile,
                score: calculateStore(profile, repos)
            }
        })
}

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score);

export const makeBattle = (players) => {
    return Promise.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError)
}

getUserData('bob');

export const fetchPopularRepos = (language) => {
    const encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

    return axios.get(encodeURI)
        .then(response => response.data.items)
        .catch(handleError)
}