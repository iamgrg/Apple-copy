const Card = (props) => {
    return <div className="Card">
        <div className="Cardtext">{props.text}</div>
        <img alt="aa" src={props.img}></img>
    </div>
}



const Caroussel = (props) => {
    return <div className="Caroussel">
        <button className="leftBtn"></button>
        {props.items}
        <button className="rightBtn"></button>
    </div>
}

export default Card 