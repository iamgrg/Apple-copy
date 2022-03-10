import ItemCardGen from "./ItemCardGen";

const CheckOut = (props) => {
  let Intro = [];
  let cards = [];
  let price = 0;
  console.log(props.items)
  if(props.items.length === 0){
    Intro = ["Your bag is empty.",
     "Sign in to see if you have any saved items. Or continue shopping."]
  }
  else{
    Intro = ["Review your bag.", 
    "Free delivery and free returns."]
    for(let i=0; i<props.items.length; i++){
      cards[i] = ItemCardGen(props.items[i], "remove")
      price = price + props.items[i].Price
    }

  }


  return (
    <div className="">
      <div className="">
        <h1>{Intro[0]}</h1>
        <h2>{Intro[1]}</h2>
      </div>
      {cards}
      <div className="">
        <div className=""></div>
        <div className="">
          <div className=""></div>
          <div className="">
            <div>Total</div>
            <div>${price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
