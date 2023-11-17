import {useState} from "react";
import PlayerInput from "../Components/PlayerInput/PlayerInput";
import PlayerPreview from "../Components/PlayerPreview/PlayerPreview";
import {Link} from "@mui/material";

const Battle = () => {



    const [playerData, setPlayerData] = useState({
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    })

    const handleSubmit = (id, userName) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: userName,
            [`${id}Image`]: `https://github.com/${userName}.png?size200`
        }))
    }

    return (
        <div>
            <div className="row">
                {playerData.playerOneImage ? <PlayerPreview avatar={playerData.playerOneImage} userName={playerData.playerOneName}/> :
                    <PlayerInput
                        label='Player 1'
                        id='playerOne'
                        onSubmit={handleSubmit}
                    />
                }
                {playerData.playerTwoImage ? <PlayerPreview avatar={playerData.playerTwoImage} userName={playerData.playerTwoName}/> :
                    <PlayerInput
                        label='Player 2'
                        id='playerTwo'
                        onSubmit={handleSubmit}
                    />
                }
            </div>
            {playerData.playerOneImage && playerData.playerTwoImage ? <Link top='/' className='button'>Battle</Link> : null}
        </div>
    )
}

export default Battle;