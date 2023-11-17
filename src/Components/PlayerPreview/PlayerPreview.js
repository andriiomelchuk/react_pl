const PlayerPreview = ({avatar, userName}) => {

    return (
        <>
            <div className='column'>
                <img className='avatar' src={avatar} alt="Avatar"/>
                <h2 className='username'>{userName}</h2>
            </div>
        </>
    )

}

export default PlayerPreview