import { makeBattle } from '../../API/api'
import CircularIndeterminate from "../../Components/Loader/Loader";
import {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import Player from "./Player";


const Results = () =>{

    const location = useLocation();

    const [loading, setLoading] = useState(true);
    const [winner, setWinner] = useState(null);
    const [loser, setLoser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        makeBattle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')])
            .then(([winner, loser]) => {
                setWinner(winner);
                setLoser(loser);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false))

    }, []);

    if (loading) {
        return <CircularIndeterminate />
    }

    if (error) {
        return <p>Error</p>
    }

    return(
        <div className='row'>
            <Player
                label='Winner'
                score={winner.score}
                profile={winner.profile}
            />
            <Player
                label='Loser'
                score={loser.score}
                profile={loser.profile}
            />
        </div>
    )
}

export default Results