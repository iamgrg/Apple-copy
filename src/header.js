import {
    Link
  } from "react-router-dom";
import bag from "./Assets/bag.svg"
import apple from "./Assets/apple.svg"


const Header = () => {
    return <header className="Header">
        <Link to="/apple"><img src={apple} className="logoApple" alt="apple"></img></Link>
        <Link to="/Store">Store</Link>
        <Link to="/Mac">Mac</Link>
        <Link to="/iPad">iPad</Link>
        <Link to="/iPhone">iPhone</Link>
        <Link to="/About">About</Link>
        <Link to="/Panier"><img src={bag} alt="bag"></img></Link>
    </header>
}

export default Header