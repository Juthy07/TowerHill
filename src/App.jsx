import { useState } from "react";
import Home from "./home";
import Contact from "./contact";
import Reservation from "./reservation";
import Moreinfo from "./moreinfo";
import { useEffect } from "react";
import routerConfig from "./router/router.config";
const App = () => {
  const [activePage, setActivePage] = useState(routerConfig.navPath.home);
  const [searchParams, setSearchParams] = useState();

  useEffect(() => {
    console.log("Active page:", activePage);
  }, [activePage]);

  useEffect(() => {
    console.log("Search Params:", searchParams);
  }, [searchParams]);

  switch (activePage) {
    case routerConfig.navPath.home:
      return <Home activePage={activePage} setActivePage={setActivePage} />; //Self closing
    case routerConfig.navPath.contact:
      return <Contact activePage={activePage} setActivePage={setActivePage} />;
    case routerConfig.navPath.reservation:
      return (
        <Reservation
          activePage={activePage}
          setActivePage={setActivePage}
          setSearchParams={setSearchParams}
        />
      );
    case routerConfig.navPath.moreInfo:
      return (
        <Moreinfo
          activePage={activePage}
          setActivePage={setActivePage}
          searchParams={searchParams}
        />
      );
    default:
      return null;
  }
};

export default App;
