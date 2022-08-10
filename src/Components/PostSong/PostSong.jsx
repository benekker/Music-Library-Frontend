import React, { useState, useEffect } from 'react';
import axios from "axios";

const PostSong = (props) => {
    const [newTitle, setTitle] = useState("");
    const [newArtist, setArtist] = useState("");
    const [newAlbum, setAlbum] = useState("");
    const [newReleaseDate, setReleaseDate] = useState("");
    const [newGenre, setGenre] = useState("");

    async function handleSubmit(event) {
        let newSong = {
            title: newTitle,
            artist: newArtist,
            album: newAlbum,
            release_date: newReleaseDate,
            genre: newGenre,
        }
        await axios.post("http://127.0.0.1:8000/song/", newSong);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className='add-song-container'>
                <label className='add-song-label'>
                    Title
                    <input className='input-container' type="text" value={newTitle} onChange={(event) => setTitle(event.target.value)} />
                </label>
                <label className='add-song-label'>
                    Artist
                    <input className='input-container' type="text" value={newArtist} onChange={(event) => setArtist(event.target.value)} />
                </label>
                <label className='add-song-label'>
                    Album
                    <input className='input-container' type="text" value={newAlbum} onChange={(event) => setAlbum(event.target.value)} />
                </label>
                <label className='add-song-label'>
                    Release Date
                    <input className='input-container' type="date" value={newReleaseDate} onChange={(event) => setReleaseDate(event.target.value)} />
                </label>
                <label className='add-song-label'>
                <input className='input-container' type="text" value={newGenre} onChange={(event) => setGenre(event.target.value)} />
                </label>
            </div>
        </form>
    )
}

export default PostSong