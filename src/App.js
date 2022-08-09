import NavBar from "./Components/NavBar/NavBar";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/song/');
    setSongs(response.data);
    console.log(response.data)
    } catch (ex) {
      console.log('Error in getAllSongs API call')
    }
    
  }
  return (
    <div className="App">
      <NavBar />
      <DisplaySongs allSongs={songs} />
    </div>
  );
}

export default App;
