import Card from "./CardGen";
import Caroussel from "./Caroussel";
import Mac from "../../../Assets/Store/caroussel/store-card-mac-nav-202110.png";
import iPad from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/store-card-13-ipad-nav-202108.png";
import iPhone from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/store-card-13-iphone-nav-202109_GEO_US.png";
import Watch from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/store-card-13-watch-nav-202110.png";
import Airpods from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/store-card-13-airpods-nav-202110.png";
import AirTag from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/store-card-13-airtags-nav-202108.png";
import TV from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/store-card-13-appletv-nav-202108.png";
import homePods from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/store-card-13-homepod-nav-202110.png";
import Accessories from "../../../Assets/Store/caroussel/store-card-13-accessories-nav-202109.png";
import iCard from "../../../Assets/Store/caroussel/store-card-13-holiday-giftcards-asit-agc-nav-202111.png";

const FirstProducts = () => {
  let Cards = [
    <Card
      type="SmallCard"
      key="0"
      img={Mac}
      width="136"
      height="148"
      texte="Mac"
    ></Card>,
    <Card
      type="SmallCard"
      key="1"
      img={iPhone}
      width="136"
      height="148"
      texte="iPhone"
    ></Card>,
    <Card
      type="SmallCard"
      key="2"
      img={iPad}
      width="136"
      height="148"
      texte="iPad"
    ></Card>,
    <Card
      type="SmallCard"
      key="3"
      img={Watch}
      width="136"
      height="148"
      texte="Apple Watch"
    ></Card>,
    <Card
      type="SmallCard"
      key="4"
      img={Airpods}
      width="136"
      height="148"
      texte="Airpods"
    ></Card>,
    <Card
      type="SmallCard"
      key="5"
      img={AirTag}
      width="136"
      height="148"
      texte="AirTag"
    ></Card>,
    <Card
      type="SmallCard"
      key="6"
      img={TV}
      width="136"
      height="148"
      texte="Apple TV"
    ></Card>,
    <Card
      type="SmallCard"
      key="7"
      img={homePods}
      width="136"
      height="148"
      texte="HomePod mini"
    ></Card>,
    <Card
      type="SmallCard"
      key="8"
      img={Accessories}
      width="136"
      height="148"
      texte="Accessories"
    ></Card>,
    <Card
      type="SmallCard"
      key="9"
      img={iCard}
      width="136"
      height="148"
      texte="Apple Gift Card"
    ></Card>,
  ];
  console.log(Cards);
  return <Caroussel title="" Cards={Cards} />;
};

export default FirstProducts;
