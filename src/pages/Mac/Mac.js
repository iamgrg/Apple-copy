import {AppCaroussel,ProAppsCaroussel} from "./caroussels"
import superCharged from '/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/hero_macbook_pro_14_16__0y2t2v3g4hu2_large.jpeg'
import maxPro from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/compare_icon_m1_pro_max__d1toavnfl1m6_large.png"
import mOne from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/compare_icon_m1__dsskrswqk7wy_large.png"
import memory from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/compare_icon_unified_memory__emykppauav2a_large.png"
import touchId from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/compare_icon_touchid__fanxgkqe1xei_large.png"
import touchBar from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/compare_icon_touch_id_touch_bar__e6rwp5pfboae_large.png"
import camera from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/compare_icon_camera__dlxow9r3leie_large.png"
import baterry from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Mac/compare_icon_battery__fk0ughiyc3am_large.png"
const Mac = () => {
  return <div className="Mac">
      <div className="superCharged">
        <img src={superCharged} alt="macbook"></img>
      </div>
      <div className="topGridMac"></div>
      <div className="gridMac">
          <img src={mOne} alt ="macIcon" className="cellGridMac"></img>
          <img src={mOne} alt ="macIcon" className="cellGridMac"></img>
          <img src={maxPro} alt ="macIcon" className="cellGridMac"></img>
          <div className="cellGridMac">8-core</div>
          <div className="cellGridMac">8-core</div>
          <div className="cellGridMac">10-core</div>
          <div className="cellGridMac">8-core</div>
          <div className="cellGridMac">8-core</div>
          <div className="cellGridMac">32-core</div>
          <img src={memory} alt ="macIcon" className="cellGridMac"></img>
          <img src={memory} alt ="macIcon" className="cellGridMac"></img>
          <img src={memory} alt ="macIcon" className="cellGridMac"></img>
          <div className="cellGridMac">2TB</div>
          <div className="cellGridMac">2TB</div>
          <div className="cellGridMac">8TB</div>
          <div className="cellGridMac">13.3"</div>
          <div className="cellGridMac">13.3"</div>
          <div className="cellGridMac">14.2 or 16.2"</div>
          <img src={baterry} alt ="macIcon" className="cellGridMac"></img>
          <img src={baterry} alt ="macIcon" className="cellGridMac"></img>
          <img src={baterry} alt ="macIcon" className="cellGridMac"></img>
          <img src={camera} alt ="macIcon" className="cellGridMac"></img>
          <img src={camera} alt ="macIcon" className="cellGridMac"></img>
          <img src={camera} alt ="macIcon" className="cellGridMac"></img>
          <div className="cellGridMac">2.8 lb.</div>
          <div className="cellGridMac">3.0 lb.</div>
          <div className="cellGridMac">3.5 lb. or 4.7lb..</div>
          <img src={touchId} alt ="macIcon" className="cellGridMac"></img>
          <img src={touchBar} alt ="macIcon" className="cellGridMac"></img>
          <img src={touchId} alt ="macIcon" className="cellGridMac"></img>
      </div>
      <div className="cardDiscount">

      </div>
      <div className="accessAndCred">
        <div className="macAccessories"></div>
        <div className="creditMac"></div>
      </div>
      <div className="freeCashHelp">
        <div className="freeDelivery"></div>
        <div className="cashBack"></div>
        <div className="helpBuy"></div>
      </div>
      <h2 className="WhatisMac">What makes a Mac a Mac?</h2>
      <div className="powerAndEcosystem">
        <div className="power"></div>
        <div className="Ecosystem"></div>
      </div>
      <div className="macOS"></div>
      <div className="apps"><h2>Built-in Apps</h2></div>
      <AppCaroussel/>
      <ProAppsCaroussel/>
      <h2 className="moreOfMac">Get more out of Mac</h2>
      <div className="virtualDiv">
        <div className="virtualSession"></div>
        <div className="virtualSessionImg"></div>
      </div>
      <div className="one">
        <div className="iOne"></div>
        <div className="iOneImg"></div>
      </div>
      <div className="bundleServices">
        <div className="TV"></div>
        <div className="pay"></div>
        <div className="arcade"></div>
        <div className="news"></div>
      </div>
        <div className="giftCard"></div>
        <div className="work"></div>
        <div className="education"></div>
  </div>;
};

export default Mac;
