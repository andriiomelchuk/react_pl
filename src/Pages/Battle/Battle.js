
import PlayerInput from "../../Components/PlayerInput/PlayerInput";
import PlayerPreview from "../../Components/PlayerPreview/PlayerPreview";
import {useCallback, useState} from "react";
import {Link} from "react-router-dom";



const Battle = () => {


    const [playerData, setPlayerData] = useState({
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    })

    const handleSubmit = useCallback((id, userName) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: userName,
            [`${id}Image`]: `https://github.com/${userName}.png?size200`
        }))
    }, [])

    const handleReset = (id) => {
        setPlayerData((prevState) => ({
            ...prevState,
            [`${id}Name`]: '',
            [`${id}Image`]: null
        }))
    }

    return (
        <div>
            <div className="row">
                {playerData.playerOneImage ?
                    <PlayerPreview
                        avatar={playerData.playerOneImage}
                        userName={playerData.playerOneName}
                    >
                        <button className='reset' onClick={() => handleReset('playerOne')}>reset</button>
                    </PlayerPreview> :
                    <PlayerInput
                        label='Player 1'
                        id='playerOne'
                        onSubmit={handleSubmit}
                    />
                }
                {playerData.playerTwoImage ?
                    <PlayerPreview
                        avatar={playerData.playerTwoImage}
                        userName={playerData.playerTwoName}
                    >
                        <button className='reset' onClick={() => handleReset('playerTwo')}>reset</button>
                    </PlayerPreview> :
                    <PlayerInput
                        label='Player 2'
                        id='playerTwo'
                        onSubmit={handleSubmit}
                    />
                }
            </div>
            <div className='row'>
            {
                playerData.playerOneImage && playerData.playerTwoImage ?
                <Link to={{
                    pathname: 'results',
                    search: `?playerOneName=${playerData.playerOneName}&playerTwoName=${playerData.playerTwoName}`
                }}
                      className='button'>Battle</Link> :
                    null
            }
            </div>
        </div>
    )
}

export default Battle;