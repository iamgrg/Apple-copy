const Card = (props) => {
  const style = {
    backgroundImage: `url(${props.img})`,
    height: `${props.height}px`,
    width: `${props.width}px`,
  };
  return (
    <div className={props.type} style={style}>
      {props.texte}
    </div>
  );
};

export default Card;
