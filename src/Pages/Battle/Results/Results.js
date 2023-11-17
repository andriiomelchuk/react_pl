import {useEffect} from "react";
import { useLocation } from 'react-router-dom';

const Results = () =>{

    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        console.log(searchParams.get('playerOneName'), searchParams.get('playerTwoName'))

    }, [])
    return(
        <div>hi</div>
    )
}

export default Results