
import Card from "./CardGen";
import Caroussel from "./Caroussel";
import perfect from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/Valentine/store-card-40-vdaygift-202201_GEO_US.jpeg";
import iphonePink from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/Valentine/MM283.jpeg";
import loop from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/Valentine/ML673ref.jpeg";
import wallet from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/Valentine/MM0Q3.jpeg";
import homePods from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/Valentine/homepod-mini-select-blue-202110.jpeg";
import iphoneBlue from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/Valentine/MM0H3.jpeg";
import iphonegreen from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/Valentine/MM1Q3.jpeg";
import accesories from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/caroussel/Valentine/store-card-40-vdayaccessories-202201.jpeg";

const StVal = () => {
  let Cards = [
    <Card
      type="SmallCard"
      key="0"
      width="400"
      img={perfect}
      height="500"
      texte="Find the perfect gift for anyone. "
    ></Card>,
    <Card
      type="SmallCard"
      key="1"
      width="313"
      img={iphonePink}
      height="500"
      texte="iPhone 13 Silicone Case with MagSafe - Chalk Pink"
    ></Card>,
    <Card
      type="SmallCard"
      key="2"
      width="313"
      img={loop}
      height="500"
      texte="45mm English Lavender Braided Solo Loop - Size 4"
    ></Card>,
    <Card
      type="SmallCard"
      key="3"
      width="313"
      img={wallet}
      height="500"
      texte="iPhone Leather Wallet with MagSafe - Golden Brown"
    ></Card>,
    <Card
      type="SmallCard"
      key="4"
      width="313"
      img={homePods}
      height="500"
      texte="HomePod mini - Blue"
    ></Card>,
    <Card
      type="SmallCard"
      key="4"
      width="313"
      img={iphoneBlue}
      height="500"
      texte="iPhone 13 mini Leather Case with MagSafe - Wisteria"
    ></Card>,
    <Card
      type="SmallCard"
      key="4"
      width="313"
      img={iphonegreen}
      height="500"
      texte="iPhone 13 Pro Max Leather Case with MagSafe - Sequoia Green"
    ></Card>,
    <Card
      type="SmallCard"
      key="5"
      width="400"
      img={accesories}
      height="500"
      texte="Explore all accessories. "
    ></Card>,
  ];
  const title = ["Valentine’s Day gifts. ", "Say it from the heart."];
  return <Caroussel title={title} Cards={Cards} />;
};

export default StVal;
