import One_PA from "../Assets/home/One_PA.jpeg";
import hero_iphone_13__f194u1rdooeq_large from "../Assets/home/hero_iphone_13__f194u1rdooeq_large.jpeg";
import hero_watch__f05go333pz2i_large from "../Assets/home/hero_watch__f05go333pz2i_large.jpeg";
import promo_el_deafo__ge0lcfxsw3ue_large from "../Assets/home/promo_el_deafo__ge0lcfxsw3ue_large.jpeg";
import tile_airpods__fuv6vgn42y2q_large from "../Assets/home/tile_airpods__fuv6vgn42y2q_large.jpeg";
import tile_apple_card__cwonh0wb00om_large from "../Assets/home/tile_apple_card__cwonh0wb00om_large.jpeg";
import tile_applefitness__fdk8xvz0dvu6_large from "../Assets/home/tile_applefitness__fdk8xvz0dvu6_large.jpeg";
import tile_homepod_mini__b73w4z3ljymu_large from "../Assets/home/tile_homepod_mini__b73w4z3ljymu_large.jpeg";
import tile_macbookpro__cx0ur0qg9biq_large from "../Assets/home/tile_macbookpro__cx0ur0qg9biq_large.jpeg";

const Panel = (props) => {
  let links = [];
  if (props.links.length > 0) {
    for (let i = 0; i < props.links.length; i++) {
      links.push(
        <a key={i} className="link">
          {props.links[i]}
        </a>
      );
    }
  }
  return (
    <div className="Panel" id={props.identity}>
      <div className="InfoBox">
        <div className="Title">{props.Title}</div>
        <div className="Description">{props.Description}</div>
        <div className="LinksBox">{links}</div>
      </div>
      <img src={props.img} alt={props.img}></img>
    </div>
  );
};

const Apple = () => {
  return (
    <div className="Apple">
      <Panel
        identity="iPhonePro"
        Title="iPhone 13 Pro"
        Description="Oh. So. Pro."
        links={["Learn More {'>'}", "Buy"]}
        img={One_PA}
      ></Panel>
      <Panel
        identity="iPhone"
        Title="iPhone 13"
        Description="Your New Superpower."
        links={["Learn More {'>'}", "Buy"]}
        img={hero_iphone_13__f194u1rdooeq_large}
      ></Panel>
      <Panel
        identity="watch"
        Title="New WATCH SERIES 7"
        Description="Introducing our largest display yet."
        links={["Learn More {'>'}", "Buy"]}
        img={hero_watch__f05go333pz2i_large}
      ></Panel>
      <div className="TwoPanelsOneline">
        <Panel
          identity="fitness"
          Title="Fitness +"
          Description="More ways to move. Now with Time to Run and Collections."
          links={["Learn More {'>'}", "Try it free"]}
          img={tile_applefitness__fdk8xvz0dvu6_large}
        ></Panel>
        <Panel
          identity="macPro"
          Title="MacBook Pro"
          Description="Supercharged for Pros"
          links={["Learn More {'>'}", "Buy"]}
          img={tile_macbookpro__cx0ur0qg9biq_large}
        ></Panel>
      </div>
      <div className="TwoPanelsOneline">
        <Panel
          identity="airPods"
          Title="AirPods"
          Description="All new with spatial audio"
          links={["Learn More {'>'}", "Buy"]}
          img={tile_airpods__fuv6vgn42y2q_large}
        ></Panel>
        <Panel
          identity="homePods"
          Title="HomePods Mini"
          Description="You’ve never heard color like this."
          links={["Learn More {'>'}", "Buy"]}
          img={tile_homepod_mini__b73w4z3ljymu_large}
        ></Panel>
      </div>
      <div className="TwoPanelsOneline">
        <Panel
          identity="card"
          Title="Card"
          Description="Save 5% on Apple products with a new Apple Card through January 31."
          links={["Learn More {'>'}", "Apply now"]}
          img={tile_apple_card__cwonh0wb00om_large}
        ></Panel>
        <Panel
          identity="deafo"
          Title="El deafo"
          Description="Find your inner Hero."
          links={["Stream now"]}
          img={promo_el_deafo__ge0lcfxsw3ue_large}
        ></Panel>
      </div>
    </div>
  );
};

export default Apple;
