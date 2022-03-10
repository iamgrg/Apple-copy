import './header.css'
import { Link } from "react-router-dom";
import bag from "../Assets/bag.svg";
import apple from "../Assets/apple.svg";
import Panier from "./Panier";
import { useState } from "react";

const Header = () => {

  const [style, setStyle] = useState({visibility : "hidden"})


  const toogleView = () => {
    if(style.visibility === "visible"){
      setStyle({
        visibility : "hidden"
      })
    }
    else{
      setStyle({
        visibility : "visible"
    })
    }
  }
  return (
    <header className="">
      <Link to="/apple">
        <img src={apple} className="" alt="apple"></img>
      </Link>
      <Link to="/Store">Store</Link>
      <Link to="/Mac">Mac</Link>
      <Link to="/iPad">iPad</Link>
      <Link to="/iPhone">iPhone</Link>
      <Link to="/About">About</Link>
      <button style={{display : "hide"}}onClick={toogleView}>
        <img src={bag} alt="bag"></img>
        <div className="" style={style}></div>
        </button>
      <Panier style={style}></Panier>
    </header>
  );
};

export default Header;
