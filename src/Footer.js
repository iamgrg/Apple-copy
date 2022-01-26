const Footer = () => {
  return (
    <footer>
      <div className="footerSubDivContainer">
        <div className="footerSubDiv">
          {/* J'utilise des "button" car Vscode m'indique que c'est une 
                bonne pratique en Jsx losqu'on a pas de réel lien à fournir */}
          <button className="strong ShopAndLearn">Shop & Learn</button>
          <button className="Store">Store</button>
          <button className="Mac">Mac</button>
          <button className="iPad">iPad</button>
          <button className="iPhone">iPhone</button>
          <button className="Watch">Watch</button>
          <button className="Airpods">AirPods</button>
          <button className="TVHome">TV & Home</button>
          <button className="iPodtouch">iPod touch</button>
          <button className="AirTag">AirTag</button>
          <button className="Accessories">Accessories</button>
          <button className="Gift Cards">Gift Cards</button>
        </div>
        <div className="footerSubDiv">
          <button className="strong Cards">Cards</button>
          <button className="Services">Apple Music</button>
          <button className="AppleTV+">Apple TV+</button>
          <button className="AppleFitness+"> Apple Fitness+ </button>
          <button className="iCloud">iCloud</button>
          <button className="AppleOne"> Apple One</button>
          <button className="AppleCard"> Apple Card</button>
          <button className="AppleBooks"> Apple Books</button>
          <button className="ApplePodcasts">Apple Podcasts </button>
          <button className="AppStore">App Store</button>
          <br></br>
          <button className="strong Account">Account</button>
          <button className="AppleID"> Manage Your Apple ID</button>
          <button className="AppleStoreAccount"> Apple Store Account</button>
          <button className="iCloud">iCloud.com</button>
        </div>
        <div className="footerSubDiv">
          <button className="strong AppleStore">Apple Store</button>
          <button className="FindaStore">Find a Store</button>
          <button className="GeniusBar">Genius Bar</button>
          <button className="TodayatApple">Today at Apple</button>
          <button className="AppleCamp">Apple Camp</button>
          <button className="AppleStoreApp">Apple Store App</button>
          <button className="RefurbishedandClearance">
            Refurbished and Clearance
          </button>
          <button className="Financing">Financing</button>
          <button className="AppleTradeIn">Apple Trade In</button>
          <button className="OrderStatus">Order Status</button>
          <button className="ShoppingHelp">Shopping Help</button>
        </div>
        <div className="footerSubDiv">
          <button className="strong For Business">For Business</button>
          <button className="AppleandBusiness">Apple and Business</button>
          <button className="Shop for Business">Shop for Business</button>
          <br></br>
          <button className="strong For Education">For Education</button>
          <button className="Apple and Education">Apple and Education</button>
          <button className="Shop for K-12">Shop for K-12</button>
          <button className="Shop for College">Shop for College</button>
          <br></br>
          <button className="strong For Healthcare">For Healthcare</button>
          <button className="Apple in Healthcare">Apple in Healthcare</button>
          <button className="Health on Apple Watch">
            Health on Apple Watch
          </button>
          <button className="Health Records on iPhone">
            Health Records on iPhone
          </button>
          <br></br>
          <button className="strong For Government">For Government</button>
          <button className="ShopForGovernment">Shop For Government</button>
          <button className="Shop for Veterans and Military">
            Shop for Veterans and Military
          </button>
        </div>
        <div className="footerSubDiv">
          <button className="strong AppleValues">Apple Values</button>
          <button className="Accessibility">Accessibility</button>
          <button className="Education">Education</button>
          <button className="Environment">Environment</button>
          <button className="Inclusion and Diversity">
            Inclusion and Diversity
          </button>
          <button className="Privacy">Privacy</button>
          <button className="Racial Equity and Justice">
            Racial Equity and Justice
          </button>
          <button className="Supplier Responsibility">
            Supplier Responsibility
          </button>
          <br></br>
          <button className="strong About Apple">About Apple</button>
          <button className="Apple Leadership">Apple Leadership</button>
          <button className="Career Opportunities">Career Opportunities</button>
          <button className="Investors">Investors</button>
          <button className="Ethics & Compliance">Ethics & Compliance</button>
          <button className="Events">Events</button>
          <button className="Contact Apple">Contact Apple</button>
          <button className="Business">Business</button>
        </div>
      </div>
      <div className="retailDiv">
        More ways to shop: <button className="link">Find an Apple Store</button>{" "}
        or <button className="link">other retailer</button> near you. Or call
        1-800-MY-APPLE.
      </div>
      <div className="Copyright">
        <div>Copyright © 2022 Apple Inc. All rights reserved.</div>
        <div className="Legals">
          <button id="privacyPol">Privacy Policy</button>
          <button>Terms of Use </button>
          <button>Sales and Refunds</button>
          <button>Legal Site Map</button>
        </div>
        <button>United States</button>
      </div>
    </footer>
  );
};

export default Footer;
