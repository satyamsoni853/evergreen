import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";

import Location from "./Location/Location";
import Navbar from "./Navigation/Navbar";
import About from "./About/About";
import Product from "./OurProduct/Product";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Landing from "./Landing/Landing";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Landing />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="location" element={<Location />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
