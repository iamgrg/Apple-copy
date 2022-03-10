
import Card from "./CardGen";
import Caroussel from "./Caroussel";
import Education from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-edu-202108.jpeg";
import Business from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-small-business-202108.jpeg";
import Government from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-gov-202108.jpeg";
import Veterans from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-50-homekit-202110_GEO_US.jpeg";
import Refurbished from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-refurb-202108.jpeg";

const Groups = () => {
  let Cards = [
    <Card
      type="SmallCard"
      key="0"
      img={Education}
      width="400"
      height="500"
      texte="Save on Mac or iPad with education pricing."
    ></Card>,
    <Card
      type="SmallCard"
      key="1"
      img={Business}
      width="400"
      height="500"
      texte="From enterprise to small business, we’ll work with you."
    ></Card>,
    <Card
      type="SmallCard"
      key="2"
      img={Government}
      width="400"
      height="500"
      texte="Special pricing is available for state, local, and federal agencies."
    ></Card>,
    <Card
      type="SmallCard"
      key="3"
      img={Veterans}
      width="400"
      height="500"
      texte="Active and veteran members may be eligible for exclusive savings."
    ></Card>,
    <Card
      type="SmallCard"
      key="4"
      img={Refurbished}
      width="400"
      height="500"
      texte="Shop like-new products backed by a one-year warranty. "
    ></Card>,
  ];
  const title = [
    "Shop by group. ",
    "Get special pricing for students, businesses, and more.",
  ];
  return <Caroussel title={title} Cards={Cards} />;
};

export default Groups;
