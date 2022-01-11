
import Header from "./header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import About from "./pages/About";
import Apple from "./pages/Apple";
import Ipad from "./pages/iPad";
import Iphone from "./pages/iPhone";
import Mac from "./pages/Mac";
import Panier from "./pages/Panier";
import Store from "./pages/Store";


function App() {
  return (
      <div className="App">
      <Router>
          <Header></Header>
          <Routes>
              <Route path="/Apple" element={<Apple/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Ipad" element={<Ipad />}/>
              <Route path="/Iphone" element={<Iphone/>}/>
              <Route path="/Mac" element={<Mac />}/>
              <Route path="/Panier" element={<Panier/>}/>
              <Route path="/Store" element={<Store />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
