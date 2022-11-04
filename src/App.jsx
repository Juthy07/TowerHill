import { useState } from "react";
import Home from "./home";
import Contact from "./contact";
import Reservation from "./reservation";
const App = () => {
  const [activePage, setActivePage] = useState("home");

  switch (activePage) {
    case "home":
      return <Home activePage={activePage} setActivePage={setActivePage} />; //Self closing
    case "contact":
      return <Contact activePage={activePage} setActivePage={setActivePage} />;
    case "reservation":
      return (
        <Reservation activePage={activePage} setActivePage={setActivePage} />
      );
    default:
      return null;
  }
};

export default App;
