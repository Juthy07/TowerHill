const Header = (props) => {
  const onNavClick = (page) => (e) => {
    props.setActivePage(page);
  };
  return (
    <div className="flex flex flex-row bg-cyan-50">
      <div
        className="
                    w-max
                    max-h-80
                    p-3
                    pl-6
                    text-5xl text-white
                    font-bold
                    flex flex-row flex-grow
                    justify-between
                    items-baseline
                    font-serif
                "
      >
        <div className="flex">
          <img src="images/footer-logo.png" alt="" />
        </div>

        <div className="flex text-base flex items-center gap-2">
          <span
            className={`p-2 text-center text-black hover:shadow-xl text-xl  rounded-md ${
              props.activePage === "home" ? "underline" : ""
            }`}
            onClick={onNavClick("home")}
          >
            Home
          </span>
          <span
            className={`p-2 text-center text-black hover:shadow-xl text-xl  rounded-md ${
              props.activePage === "contact" ? "underline" : ""
            }`}
            onClick={onNavClick("contact")}
          >
            Contact Us
          </span>
          <span
            className={`p-2 text-center text-black hover:shadow-xl text-xl  rounded-md ${
              props.activePage === "reservation" ? "underline" : ""
            }`}
            onClick={onNavClick("reservation")}
          >
            Reservation
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
