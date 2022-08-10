import Earbuds from "./Assets/earbuds.png"
import "./NavBar.css"


const NavBar = (props) => {
    return(
        <div className="navbar">
            <h1 className="title">
                <div className="headertext">
                    MusicLibrary
                </div>
            <img className="Logo" src={Earbuds} alt='Logo' />
            </h1>
            
        </div>
    );
}
export default NavBar;