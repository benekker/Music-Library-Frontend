import { useState } from "react"
import "./DisplaySongs.css"


const DisplaySongs = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    return(
        <div className="display-music-wrap">
            <input
            className="search-input"
                type="text"
                placeholder="Search..."
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
            />
            {props.allSongs.filter((song) => {
                if(searchTerm == ""){
                    return song
                } else if (song.title.includes(searchTerm)){
                    return song
                } else if (song.artist.includes(searchTerm)){
                    return song
                } else if (song.album.includes(searchTerm)){
                    return song
                } else if(song.release_date.includes(searchTerm)){
                    return song
                } else if(song.genre.includes(searchTerm)){
                    return song
                }
            }).map((song, index) => {
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