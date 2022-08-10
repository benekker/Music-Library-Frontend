import Earbuds from "./Assets/earbuds.png"
import "./NavBar.css"
import spotifylogo from "./Assets/spotifylogo.png"

const NavBar = (props) => {
    return(
        <div className="navbar">
            <h1 className="title">
                <div className="headertext">
                    MusicLibrary
                </div>
            <img className="Logo" src={Earbuds} alt='Logo' />
            </h1>
            <img className="spotifylogo" src={spotifylogo} alt='spotifylogo' />
        </div>
    );
}
export default NavBar;