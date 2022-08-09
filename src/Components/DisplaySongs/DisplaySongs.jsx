


const DisplaySongs = (props) => {
    return(
        <div>
            {props.allSongs.map((song, index) => {
                return (
                    <div className="displaymusic" key={index}>
                        <p>
                            {song.title}
                            {song.artist}
                            {song.album}
                            {song.release_date}
                            {song.genre}
                        </p>
                    </div>  
                )
            })}
        </div>
    )}
export default DisplaySongs