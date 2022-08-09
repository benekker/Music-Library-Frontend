import LibraryIcon from "./Assets/MusicLibraryicon.png"
import "./NavBar.css"


const NavBar = (props) => {
    return(
        <div className="navbar">
            <h1 className="title">
                MusicLibrary
            </h1>
            <img className="LibraryIcon" src={LibraryIcon} alt='Library Icon' />
        </div>
    );
}
export default NavBar;