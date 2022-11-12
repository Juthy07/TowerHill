import { useEffect } from "react";
import useRouter from "../hook/use-router";
import routerConfig from "./router.config";
import Home from "../pages/home/home";
import Moreinfo from "../pages/room-info/room-info";
import Contact from "../pages/contact/contact";
import Reservation from "../pages/reservation/reservation";

const Routes = () => {
  const { activePage, searchParams } = useRouter();

  useEffect(() => {
    console.log("Active page:", activePage);
  }, [activePage]);

  useEffect(() => {
    console.log("Search Params:", searchParams);
  }, [searchParams]);

  switch (activePage) {
    case routerConfig.navPath.home:
      return <Home />; //Self closing
    case routerConfig.navPath.contact:
      return <Contact />;
    case routerConfig.navPath.reservation:
      return <Reservation />;
    case routerConfig.navPath.moreInfo:
      return <Moreinfo />;
    default:
      return null;
  }
};

export default Routes;
