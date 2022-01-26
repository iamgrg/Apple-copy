import Card from "./CardGen";
import Caroussel from "./Caroussel";

const Sounds = () => {
  let Cards = [
    <Card
      type="SmallCard"
      key="0"
      width="400"
      height="500"
      texte="Get 6 months of Apple Music free. // Included with purchase of select AirPods and Beats products, and HomePod mini.**"
    ></Card>,
    <Card
      type="SmallCard"
      key="1"
      width="313"
      height="500"
      texte="AirPods (3rd generation)"
    ></Card>,
    <Card
      type="SmallCard"
      key="2"
      width="313"
      height="500"
      texte="Beats Fit Pro True Wireless Earbuds — Stone Purple"
    ></Card>,
    <Card
      type="SmallCard"
      key="3"
      width="313"
      height="500"
      texte="AirPods Pro"
    ></Card>,
    <Card
      type="SmallCard"
      key="4"
      width="313"
      height="500"
      texte="HomePod mini - White"
    ></Card>,
    <Card
      type="SmallCard"
      key="5"
      width="313"
      height="500"
      texte="AirPods Max - Pink"
    ></Card>,
  ];
  const title = [
    "Loud and clear. ",
    "Unparalleled choices for rich, high-quality sound.",
  ];
  return <Caroussel title={title} Cards={Cards} />;
};

export default Sounds;
