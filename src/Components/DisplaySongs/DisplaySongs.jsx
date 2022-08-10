import "./DisplaySongs.css"


const DisplaySongs = (props) => {
    return(
        <div>
            {props.allSongs.map((song, index) => {
                return (
                    <table className="displaymusictable" key={index}>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Release Date</th>
                            <th>Genre</th>
                        </tr>
                        <tbody>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                        </tbody>           
                    </table>  
                )
            })}
        </div>
    )}
export default DisplaySongs