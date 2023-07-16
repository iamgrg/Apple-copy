
import Bag from "../Assets/Panier/bag.svg"
import Orders from "../Assets/Panier/orders.svg"
import SavedItems from "../Assets/Panier/savedbyyou.svg"
import Account from "../Assets/Panier/account.svg"
import SignIn from "../Assets/Panier/signIn.svg"
import { Link } from "react-router-dom";

const Panier = (props) => {

    const text = "14‑inch MacBook Pro - Space Gray"
    const divItem = <div className="divItem">
        <div className="info">
            <div className="img"></div>
            <div className="text">{text}</div>
        </div>
        <button className="CheckOut">
            <Link className="Link" to="/CheckOut">Check out</Link>
        </button>
              {/* <Link to="/Panier">
        <img src={bag} alt="bag"></img>
      </Link> */}
    </div>

    return <div className="Panier" style={props.style}>
        {divItem}
        <div className="Bag"><img alt="Bag" src={Bag}/>Bag</div>
        <div className="SavedItems"><img alt="SavedItems" src={SavedItems}/>Saved Items</div>
        <div className="Orders"><img alt="Bag" src={Orders}/>Orders</div>
        <div className="Account"><img alt="Account" src={Account}/>Account</div>
        <div className="SignIn"><img alt="SignIn" src={SignIn}/>Sign in</div>
    </div>
}

export default Panier