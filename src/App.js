import Header from "./Header/header";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Apple from "./pages/Apple";
import Ipad from "./pages/iPad";
import Iphone from "./pages/iPhone";
import Mac from "./pages/Mac";
import CheckOut from "./pages/Checkout/Checkout";
import Store from "./pages/Store/Store.js";
import { useState } from "react";

const Item1 = {
  Title : "14-inch MacBook Pro - Space Gray",
  Price : 1999,
}
const Item2 = {
  Title : "iPhone 13 Pro Max 1TB Sierra Blue",
  Price : 1599,
}
const Item3 = {
  Title : "12.9-inch iPad Pro Wi-Fi 2TB - Space Gray",
  Price : 2199,
}

function App() {

const [items, setItems] = useState([Item1, Item2, Item3])
const add = (item) => {
    let newItems = items.push(item);
    setItems(newItems);
}

  return (
    <div className="App">
      <Router>
        <Header items={items} setItems={setItems}/>
        <Routes>
          <Route path="/Apple" element={<Apple />} />
          <Route path="/About" element={<About />} />
          <Route path="/Ipad" element={<Ipad add={add}/>} />
          <Route path="/Iphone" element={<Iphone add={add}/>} />
          <Route path="/Mac" element={<Mac add={add}/>} />
          <Route path="/CheckOut" element={<CheckOut items={items} setItems={setItems}/>} />
          <Route path="/Store" element={<Store />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
