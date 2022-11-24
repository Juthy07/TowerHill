import { useEffect } from "react";
import useRouter from "../hook/use-router";
import routerConfig from "./router.config";
import Home from "../pages/home/home";
import Moreinfo from "../pages/room-info/room-info";
import Contact from "../pages/contact/contact";
import Reservation from "../pages/reservation/reservation";
import Booking from "../pages/roomBooking/room-booking";
import Payment from "../pages/payment/payment";
import ThankYou from "../pages/contact/thankyou";
import Receipt from "../pages/payment/receipt";

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
    case routerConfig.navPath.roomBooking:
      return <Booking />;
    case routerConfig.navPath.payment:
      return <Payment />;
    case routerConfig.navPath.thankyou:
      return <ThankYou />;
    case routerConfig.navPath.receipt:
      return <Receipt />;
    default:
      return null;
  }
};

export default Routes;
