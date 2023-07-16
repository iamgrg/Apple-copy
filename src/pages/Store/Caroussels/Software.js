import Card from "./CardGen";
import Caroussel from "./Caroussel";
import Join from "../../../Assets/Store/store-card-50-todayatapple-202108.jpeg";
import Six from "../../../Assets/Store/store-card-50-subscriptions-202108_GEO_US.jpeg";
import Pay from "../../../Assets/Store/store-card-50-applepay-202110.jpeg";
import Home from "../../../Assets/Store/store-card-50-homekit-202110_GEO_US.jpeg";

const Software = () => {
  let Cards = [
    <Card
      type="SmallCard"
      key="0"
      width="480"
      img={Join}
      height="500"
      texte="Join a Today at Apple virtual session. "
    ></Card>,
    <Card
      type="SmallCard"
      key="1"
      width="480"
      img={Six}
      height="500"
      texte="Six Apple services. One easy subscription. "
    ></Card>,
    <Card
      type="SmallCard"
      key="2"
      width="480"
      img={Pay}
      height="500"
      texte="Discover all the ways to use Apple Pay. "
    ></Card>,
    <Card
      type="SmallCard"
      key="3"
      width="480"
      img={Home}
      height="500"
      texte="See how one app can control your entire home."
    ></Card>,
  ];
  const title = [
    "Do more with Apple products. ",
    "Here’s where the fun begins.",
  ];
  return <Caroussel title={title} Cards={Cards} />;
};

export default Software;
