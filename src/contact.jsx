import Header from "./components/header/header";
import Body from "./components/body/contactBody";
import Footer from "./components/footer/footer";

const Contact = (props) => {
  return (
    <div>
      <Header
        setActivePage={props.setActivePage}
        activePage={props.activePage}
      />
      <Body />
      <Footer />
    </div>
  );
};

export default Contact;
