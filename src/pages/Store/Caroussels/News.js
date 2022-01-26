import Card from "./CardGen";
import Caroussel from "./Caroussel";
import Valentine from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-vdayfeature-202201_GEO_US.jpeg";
import Limited from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-applecard-202112.png";
import Airpods from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-airpodsmagsafe-202110.jpeg";
import iPad from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-ipad-202109_GEO_US.jpeg";
import homePods from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-homepodmini-202110.jpeg";
import iPhonePro from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-pro-202109.jpeg";
import MacPro from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-mac-202110_GEO_US.jpeg";
import iPhone from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-iphone-202109.jpeg";
import iPadMini from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-ipadmini-202109.jpeg";
import watch from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-watch-s7-202109.jpeg";

const News = () => {
  let Cards = [
    <Card
      type="SmallCard"
      key="0"
      width="400"
      img={Valentine}
      texte="Say it with a gift from Apple."
    ></Card>,
    <Card
      type="SmallCard"
      key="1"
      width="400"
      img={Limited}
      texte="Save 5% on Apple products with the new Apple Card."
    ></Card>,
    <Card
      type="SmallCard"
      key="2"
      width="400"
      img={Airpods}
      texte="It's magic, remastered."
    ></Card>,
    <Card
      type="SmallCard"
      key="3"
      width="400"
      img={iPad}
      texte="Deligthfully capable. Surprisingly affortable."
    ></Card>,
    <Card
      type="SmallCard"
      key="4"
      width="400"
      img={homePods}
      texte="You've never heard color like this."
    ></Card>,
    <Card
      type="SmallCard"
      key="5"
      width="400"
      img={iPhonePro}
      texte="Oh. So. Pro."
    ></Card>,
    <Card
      type="SmallCard"
      key="6"
      width="400"
      img={MacPro}
      texte="Supercharged for pros."
    ></Card>,
    <Card
      type="SmallCard"
      key="7"
      width="400"
      img={iPhone}
      texte="Your new Superpower"
    ></Card>,
    <Card
      type="SmallCard"
      key="8"
      width="400"
      img={iPadMini}
      texte="Mega Power. Mini Sized"
    ></Card>,
    <Card
      type="SmallCard"
      key="9"
      width="400"
      img={watch}
      texte="Full Screen ahead"
    ></Card>,
  ];
  const title = ["The latest. ", "Take a look at what’s new, right now."];
  return <Caroussel title={title} Cards={Cards} />;
};

export default News;
