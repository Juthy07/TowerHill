import Header from "./components/header/header";
import Body from "./components/body/reservationBody";
import Footer from "./components/footer/footer";

const Reservation = (props) => {
  return (
    <div>
      <Header
        setActivePage={props.setActivePage}
        activePage={props.activePage}
      />
      <Body
        setActivePage={props.setActivePage}
        activePage={props.activePage}
        setSearchParams={props.setSearchParams}
      />
      <Footer />
    </div>
  );
};

export default Reservation;
