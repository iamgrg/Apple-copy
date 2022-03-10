import './footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="">
        <div className="">
          {/* J'utilise des "button" car Vscode m'indique que c'est une 
                bonne pratique en Jsx losqu'on a pas de réel lien à fournir */}
          <button className="">Shop & Learn</button>
          <button className="">Store</button>
          <button className="">Mac</button>
          <button className="">iPad</button>
          <button className="">iPhone</button>
          <button className="">Watch</button>
          <button className="">AirPods</button>
          <button className="">TV & Home</button>
          <button className="">iPod touch</button>
          <button className="">AirTag</button>
          <button className="">Accessories</button>
          <button className="">Gift Cards</button>
        </div>
        <div className="">
          <button className="">Cards</button>
          <button className="">Apple Music</button>
          <button className="">Apple TV+</button>
          <button className=""> Apple Fitness+ </button>
          <button className="">iCloud</button>
          <button className=""> Apple One</button>
          <button className=""> Apple Card</button>
          <button className=""> Apple Books</button>
          <button className="">Apple Podcasts </button>
          <button className="">App Store</button>
          <br></br>
          <button className="">Account</button>
          <button className=""> Manage Your Apple ID</button>
          <button className=""> Apple Store Account</button>
          <button className="">iCloud.com</button>
        </div>
        <div className="">
          <button className="">Apple Store</button>
          <button className="">Find a Store</button>
          <button className="">Genius Bar</button>
          <button className="">Today at Apple</button>
          <button className="">Apple Camp</button>
          <button className="">Apple Store App</button>
          <button className="">
            Refurbished and Clearance
          </button>
          <button className="">Financing</button>
          <button className="">Apple Trade In</button>
          <button className="">Order Status</button>
          <button className="">Shopping Help</button>
        </div>
        <div className="">
          <button className="">For Business</button>
          <button className="">Apple and Business</button>
          <button className="">Shop for Business</button>
          <br></br>
          <button className="">For Education</button>
          <button className="">Apple and Education</button>
          <button className="">Shop for K-12</button>
          <button className="">Shop for College</button>
          <br></br>
          <button className="">For Healthcare</button>
          <button className="">Apple in Healthcare</button>
          <button className="">
            Health on Apple Watch
          </button>
          <button className="">
            Health Records on iPhone
          </button>
          <br></br>
          <button className="">For Government</button>
          <button className="">Shop For Government</button>
          <button className="">
            Shop for Veterans and Military
          </button>
        </div>
        <div className="">
          <button className="">Apple Values</button>
          <button className="">Accessibility</button>
          <button className="">Education</button>
          <button className="">Environment</button>
          <button className="">
            Inclusion and Diversity
          </button>
          <button className="">Privacy</button>
          <button className="">
            Racial Equity and Justice
          </button>
          <button className="">
            Supplier Responsibility
          </button>
          <br></br>
          <button className="">About Apple</button>
          <button className="">Apple Leadership</button>
          <button className="">Career Opportunities</button>
          <button className="">Investors</button>
          <button className="">Ethics & Compliance</button>
          <button className="">Events</button>
          <button className="">Contact Apple</button>
          <button className="">Business</button>
        </div>
      </div>
      <div className="">
        More ways to shop: <button className="">Find an Apple Store</button>{" "}
        or <button className="">other retailer</button> near you. Or call
        1-800-MY-APPLE.
      </div>
      <div className="">
        <div>Copyright © 2022 Apple Inc. All rights reserved.</div>
        <div className="">
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
