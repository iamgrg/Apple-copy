import Card from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/pages/Store/Caroussels/CardGen.js";
import genius from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-50-specialist-202108.jpeg";
import Session from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-25-apps-202108.jpeg";
import Bar from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-25-genius-202108.jpeg";

const Help = () => {
  return (
    <div className="Help">
      <div className="title">
        <strong>Help is here.</strong> Whenever and however you need it.
      </div>
      <div className="Imgs">
        <Card
          type="SmallCard"
          key="0"
          img={genius}
          width="480"
          height="500"
          texte="Shop one on one with a Specialist. Online or in store."
        ></Card>
        <div className="twoCards">
          <Card
            type="SmallCard"
            key="0"
            img={Session}
            width="480"
            height="240"
            texte="Get to know your new device with a free Personal Session."
          ></Card>
          <Card
            type="SmallCard"
            key="0"
            img={Bar}
            width="480"
            height="240"
            texte="Get expert service and support at the Genius Bar. "
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Help;
