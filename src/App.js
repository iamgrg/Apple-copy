import Header from "./header";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Apple from "./pages/Apple";
import Ipad from "./pages/iPad";
import Iphone from "./pages/iPhone";
import Mac from "./pages/Mac";
import Panier from "./pages/Panier";
import Store from "./pages/Store/Store.js";
import homepods from "/Users/gregoire/Documents/Projet code/Odin_project/portfolio/apple-fake/src/Assets/Store/store-card-40-homepodmini-202110.jpeg"

function App() {
  const style = {
    backgroundImage: `url(${homepods})`
  }
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Apple" element={<Apple />} />
          <Route path="/About" element={<About />} />
          <Route path="/Ipad" element={<Ipad />} />
          <Route path="/Iphone" element={<Iphone />} />
          <Route path="/Mac" element={<Mac />} />
          <Route path="/Panier" element={<Panier />} />
          <Route path="/Store" element={<Store />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
