import {AppCaroussel,ProAppsCaroussel} from "./caroussels"
import Banner from "./bannerP"
import superCharged from '../../Assets/Mac/hero_macbook_pro_14_16__0y2t2v3g4hu2_large.jpeg'
import maxPro from "../../Assets/Mac/compare_icon_m1_pro_max__d1toavnfl1m6_large.png"
import mOne from "../../Assets/Mac/compare_icon_m1__dsskrswqk7wy_large.png"
import memory from "../../Assets/Mac/compare_icon_unified_memory__emykppauav2a_large.png"
import touchId from "../../Assets/Mac/compare_icon_touchid__fanxgkqe1xei_large.png"
import touchBar from "../../Assets/Mac/compare_icon_touch_id_touch_bar__e6rwp5pfboae_large.png"
import camera from "../../Assets/Mac/compare_icon_camera__dlxow9r3leie_large.png"
import baterry from "../../Assets/Mac/compare_icon_battery__fk0ughiyc3am_large.png"
import macAccess from "../../Assets/Mac/accessories_tile__cybkm8f034uq_large.jpeg"
import appleArcade from "../../Assets/Mac/apple_arcade__fh7xxmrbt9iu_large.jpeg"
import appleAtWork from "../../Assets/Mac/apple_at_work__gk7gvf49y3qu_large.jpeg"
import apple_gift_card_logo from "../../Assets/Mac/apple_gift_card_logo__es2vdqwat126_large.png"
import apple_gift_card_tile from "../../Assets/Mac/apple_gift_card_tile__d777mr3okcom_large.jpeg"
import apple_news_plus_half from "../../Assets/Mac/apple_news_plus_half_tile__fsburpmunrma_large.jpeg"
import apple_one_logo from "../../Assets/Mac/apple_one_logo__cj3a404ir8mu_large.jpeg"
import apple_pay from "../../Assets/Mac/apple_pay__9nvboo37kn6y_large.jpeg"
import apple_TV_plus_logo from "../../Assets/Mac/apple_tv_plus_logo__kjr1fpjocgqe_large.png"
import bundle_gaaz from "../../Assets/Mac/bundle__gaazdu9x3jqu_large.jpeg"
import continuity from "../../Assets/Mac/continuity__f7o5n4kqigeq_large.jpeg"
import education from "../../Assets/Mac/education__bq047y5fu7n6_large.jpeg"
import icon_delivery from "../../Assets/Mac/icon-delivery__cthkmrp24qoi_large.png"
import trade_in_mac from "../../Assets/Mac/trade_in_mac_tile__d67bvlqow1ua_large.jpeg"
import virtual_sessions from "../../Assets/Mac/virtual_sessions__bf3oif13injm_large.jpeg"
import why_mac from "../../Assets/Mac/why_mac__cs3wqw10kieu_large.jpeg"
import acmi from "../../Assets/Mac/acmi__e6hmokx3ap0m_large.jpeg"
import tile_monterey from "../../Assets/Mac/tile_monterey__bm1x7sttegty_large.jpeg"
import icon_finance from "../../Assets/Mac/icon-finance__fk30uafhm76u_large.svg"
import icon_help from "../../Assets/Mac/icon-help__cwmazkux9uaa_large.svg"
import icon_apple_pay from "../../Assets/Mac/apple_pay_logo__d2j4vxi85iaa_large.png"
import icon_apple_news from "../../Assets/Mac/apple_news_plus_logo__cggpupc1mpci_large.png"
import icon_apple_arcade from "../../Assets/Mac/logo_apple_arcade__mvq317ljfkqe_large.png"


const Mac = () => {
  return (
    <div className="Mac">
      <div className="superCharged">
        <div className="texte">
          <div className="new">New</div>
          <div className="subtitle">MacBook Pro</div>
          <div>Supercharged for pros.</div>
          <div className="price">From $1999</div>
          <div className="Buy">Buy</div>
          <div className="LearnMore">Learn more {'>'}</div>
        </div>
        <img src={superCharged} alt="macbook"></img>
      </div>
      <div className="topGridMac">
        <h3>Wich Mac is rigth for you ?</h3>
        <Banner/>
      </div>
      <div className="gridMac">
        <img src={mOne} alt="macIcon" className="cellGridMac"></img>
        <img src={mOne} alt="macIcon" className="cellGridMac"></img>
        <img src={maxPro} alt="macIcon" className="cellGridMac"></img>
        <div className="cellGridMac">8-core</div>
        <div className="cellGridMac">8-core</div>
        <div className="cellGridMac">10-core</div>
        <div className="cellGridMac">8-core</div>
        <div className="cellGridMac">8-core</div>
        <div className="cellGridMac">32-core</div>
        <img src={memory} alt="macIcon" className="cellGridMac"></img>
        <img src={memory} alt="macIcon" className="cellGridMac"></img>
        <img src={memory} alt="macIcon" className="cellGridMac"></img>
        <div className="cellGridMac">2TB</div>
        <div className="cellGridMac">2TB</div>
        <div className="cellGridMac">8TB</div>
        <div className="cellGridMac">13.3"</div>
        <div className="cellGridMac">13.3"</div>
        <div className="cellGridMac">14.2 or 16.2"</div>
        <img src={baterry} alt="macIcon" className="cellGridMac"></img>
        <img src={baterry} alt="macIcon" className="cellGridMac"></img>
        <img src={baterry} alt="macIcon" className="cellGridMac"></img>
        <img src={camera} alt="macIcon" className="cellGridMac"></img>
        <img src={camera} alt="macIcon" className="cellGridMac"></img>
        <img src={camera} alt="macIcon" className="cellGridMac"></img>
        <div className="cellGridMac">2.8 lb.</div>
        <div className="cellGridMac">3.0 lb.</div>
        <div className="cellGridMac">3.5 lb. or 4.7lb..</div>
        <img src={touchId} alt="macIcon" className="cellGridMac"></img>
        <img src={touchBar} alt="macIcon" className="cellGridMac"></img>
        <img src={touchId} alt="macIcon" className="cellGridMac"></img>
      </div>
      <div className="cardDiscount">
        <div className="texte">
          <strong style={{ fontSize: "48px", fontWeight: "500" }}>
            Get 3% Daily Cash back with Apple Card.
          </strong>{" "}
          <br></br>
          <br></br>
          <p style={{ padding: "0 70px", lineHeight: "1.5" }}>
            And pay for your new Mac over 12 months, interest‑free when you
            choose to check out with Apple Card Monthly Installments.*
          </p>
          <div className="LearnMore">Learn More {'>'}</div>
        </div>
        <img src={acmi} alt="acmi"></img>
      </div>
      <div className="accessAndCred">
        <div className="macAccessories">
          <div className="texte">
            <div className="subtitle">Accessories</div>
            <strong style={{ fontSize: "48px", fontWeight: "500" }}>
              Explore Mac accessories.
            </strong>
            <div className="Shop">Shop</div>
          </div>
          <img src={macAccess} alt="macAcessories"></img>
        </div>
        <div className="creditMac">
          <div className="texte">
            <div className="subtitle">Apple Trade In</div>
            <strong style={{ fontSize: "48px", fontWeight: "500" }}>
              Get credit toward a new Mac.
            </strong>{" "}
            <br></br>
            <br></br>Just trade in your eligible computer for credit or recycle
            it for free. It’s good for you and the planet.9
            <div className="LearnMore">Find your trade‑in value</div>
          </div>
          <img src={trade_in_mac} alt="trade_in_mac"></img>
        </div>
      </div>
      <div className="freeCashHelp">
      <div className="images">
      <img src={icon_delivery} className="square" alt="icon_delivery"></img>
      <img src={icon_finance} alt="icon_finance"></img>
      <img src={icon_help}  heigth='56px' width='47px'alt="icon_help"></img>
      </div>
      <div className="bottom">
        <div className="freeDelivery">
          <div className="texte">
        <div className="subtitle">Free delivery</div> 
        <p style={{fontSize : "22px"} }>And free returns. See checkout
for delivery dates.</p>
          <div className="LearnMore">Learn more {'>'}</div>
          </div>
        </div>
        <div className="cashBack">
          <div className="texte">

        <div className="subtitle">Get 3% Daily Cash back with Apple Card</div> 
        <p style={{fontSize : "22px"} }>And pay over time, interest‑free when you choose to check out with Apple Card Monthly Installments.*</p>
          <div className="LearnMore">Learn more {'>'}</div>
          </div>
        </div>
        <div className="helpBuy">
          <div className="texte">

        <div className="subtitle">Get help buying</div> 
        <p style={{fontSize : "22px"} }>Have a question? Call a Specialist or chat online. Call 1‑800-MY‑APPLE.</p>
          <div className="LearnMore">Learn more {'>'}</div>
          </div>
        </div>
      </div>
      </div>
      <h2 className="WhatisMac">What makes a Mac a Mac?</h2>
      <div className="powerAndEcosystem">
        <div className="power">
        <div className="texte">
        <div className="subtitle">Why Mac</div> 
        <strong style={{ fontSize: "48px", fontWeight: "500" }}>Incredible power. Incredibly simple. </strong>
          <div className="LearnMore">Learn More {'>'}</div>
          </div>
          <img src={why_mac} alt="why_mac"></img>
        </div>
        <div className="Ecosystem">
        <div className="texte">
        <div className="subtitle">Continuity</div> 
        <strong style={{ fontSize: "48px", fontWeight: "500" }}>All your devices. One seamless experience. </strong>
          <div className="LearnMore">Learn More {'>'}</div>
          </div>
          <img src={continuity} alt="continuity"></img>
        </div>
      </div>
      <div className="macOS">
      <div className="texte">
        <div className="subtitle">macOS Monterey</div> 
        <strong style={{ fontSize: "48px", fontWeight: "500" }}>High powered meets “Hi everyone.”</strong>
          <div className="MacOsLinks">
            <div className="LearnMore">Update Now</div>
            <div className="LearnMore">Learn More {'>'}</div>
          </div>
          </div>
        <img src={tile_monterey} alt="tile_monterey"></img>
      </div>
      <div className="apps">
        <h2>Built-in Apps</h2>
        <p>Powerful creativity and productivity tools live inside every Mac — apps that help you explore, connect, and work more efficiently.</p>
      </div>
      <AppCaroussel />
      <div className="apps">
        <h2>Pro Apps</h2>
        <p>For professionals ready to push their creativity, these industry-leading apps offer maximum control over editing, processing, and output of music and film</p>
      </div>
        <ProAppsCaroussel />
      <h2 className="moreOfMac">Get more out of Mac</h2>
      <div className="virtualDiv">
        <div className="virtualSession">
        <div className="texte">
        <div className="subtitle">Today at Apple</div> 
        <strong style={{ fontSize: "48px", fontWeight: "500" }}>Virtual Sessions </strong>
        <p style={{padding : "20px 10px 20px 10px", fontSize : "20px"} }>Learn the basics of using Mac
live with Apple Creatives.</p>
          <div className="LearnMore">Sign up {'>'}</div>
          </div>
        </div>
        <div className="virtualSessionImg">
          <img src={virtual_sessions} alt="virtual_sessions"></img>
        </div>
      </div>
      <div className="Appleone">
        <div className="iOne">
          <img src={bundle_gaaz} alt="bundle_gaaz"></img>
        </div>
        <div className="iOneImg">
        <img src={apple_one_logo} alt="apple_one_logo"></img>
        <div className="texte">
        <div className="subtitle">Bundle up to six Apple services. And enjoy more for less.</div> 
        <div className="BundleLinks">
            <div className="LearnMore">Try it free</div>
            <div className="LearnMore">Learn More {'>'}</div>
          </div>
          </div>
        </div>
      </div>
      <div className="bundleServices">
        <div className="bundleService TV">
          <div className="texte">
          <img src={apple_TV_plus_logo} alt="apple_TV_plus_logo"></img>
          <div className="subtitle">Get 3 months of Apple TV+ free
when you buy a Mac.</div> 
        <div className="BundleLinks">
            <div className="LearnMore">Try it free</div>
            <div className="LearnMore">Learn More {'>'}</div>
          </div>
          </div>
          <div className="video" style={{color : 'white'}}>Flemme de mettre la video pour l'instant</div>
        </div>
        <div className="bundleService pay">
          <div className="texte">
          <img src={icon_apple_pay} alt="icon_apple_pay"></img>
          <div className="subtitle">The safer way to make secure,
contactless purchases in stores and online.</div> 
            <div className="LearnMore">Learn More {'>'}</div>
          </div>
          <img src={apple_pay} alt="apple_pay"></img>
        </div>
        <div className="bundleService arcade">
          <div className="texte">
          <img src={icon_apple_arcade} alt="icon_apple_arcade"></img>
          <div className="subtitle">Get 3 months of Apple Arcade free
when you buy a Mac.</div>
        <div className="BundleLinks">
            <div className="LearnMore">Try it free</div>
            <div className="LearnMore">Learn More {'>'}</div>
          </div>
          </div>
          <img src={appleArcade} alt="aracde"></img>
        </div>
        <div className="bundleService news">
          <div className="texte">
          <img src={icon_apple_news} alt="icon_apple_news"></img>
          <div className="subtitle">Hundreds of magazines and
leading newspapers. One subscription</div>
        <div className="BundleLinks">
            <div className="LearnMore">Try it free</div>
            <div className="LearnMore">Learn More {'>'}</div>
          </div>
          </div>
          <img src={apple_news_plus_half} alt="apple_news_plus_half"></img>
        </div>
      </div>
      <div className="giftCard">
        <div className="texte">
        <img src={apple_gift_card_logo} alt="apple_gift_card_logo"></img>
          <div className="subtitle">For everything and everyone.</div>
          <div className="BundleLinks">
            <div className="LearnMore">Learn More {'>'}</div>
            <div className="LearnMore">Buy {'>'}</div>
          </div>
          </div>
          <div className="giftcardImage">
          <img src={apple_gift_card_tile} alt="apple_gift_card_tile"></img>
          </div>
      </div>
      <div className="work">
      <div className="texte">
        <strong style={{ fontSize: "48px", fontWeight: "500" }}>Apple at Work</strong>
        <div className="subtitle">Get the power to take your business to the next level.</div> 
          <div className="">
            <div className="LearnMore">Learn about Apple at Work {'>'}</div>
            <div className="LearnMore">See why Mac means business {'>'}</div>
          </div>
          </div>
        <img src={appleAtWork} alt="appleAtWork"></img>
      </div>
      <div className="education">
      <div className="texte">
        <strong style={{ fontSize: "48px", fontWeight: "500" }}>Apple and Education</strong>
        <div className="subtitle">Empowering educators and students to move the world forward</div> 
          <div className="">
            <div className="LearnMore">Learn about Apple and Education {'>'}</div>
          </div>
          </div>
        <img src={education} alt="education"></img>
      </div>
    </div>
  );
};

export default Mac;
