import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.page";
import Footer from "./components/Footer";
import ContactPage from "./pages/Contact.page";
import AboutPage from "./pages/About.page";
import PlaylistPage from "./pages/Playlist.page";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // initiate animate on scroll
  useEffect(() => {
    AOS.init({ duration: 600 });
  });
  //

  // open/close mobile menu
  function handleMenu() {
    setIsOpen(!isOpen);
  }
  //
  return (
    <Router>
      <GlobalStyles />
      <Sidebar handleMenu={handleMenu} isOpen={isOpen} />
      <Navbar handleMenu={handleMenu} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/playlists" component={PlaylistPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
