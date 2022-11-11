import Header from "./components/header/header";
import Body from "./components/body/moreinfobody";
import Footer from "./components/footer/footer";

const Moreinfo = (props) => {
  return (
    <div>
      <Header
        setActivePage={props.setActivePage}
        activePage={props.activePage}
      />
      <Body searchParams={props.searchParams} />
      <Footer />
    </div>
  );
};

export default Moreinfo;
