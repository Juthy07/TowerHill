import useRouter from "../../hook/use-router";
import routerConfig from "../../router/router.config";

const Header = (props) => {
  const onNavClick = (page) => (e) => {
    navigate(page);
  };
  const { activePage, navigate } = useRouter();

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
          <button
            className={`p-2 text-center text-black hover:shadow-xl text-xl  rounded-md ${
              activePage === routerConfig.navPath.home ? "underline" : ""
            }`}
            onClick={onNavClick(routerConfig.navPath.home)}
          >
            Home
          </button>
          <button
            className={`p-2 text-center text-black hover:shadow-xl text-xl  rounded-md ${
              activePage === routerConfig.navPath.contact ? "underline" : ""
            }`}
            onClick={onNavClick(routerConfig.navPath.contact)}
          >
            Contact Us
          </button>
          <button
            className={`p-2 text-center text-black hover:shadow-xl text-xl  rounded-md ${
              activePage === routerConfig.navPath.reservation ? "underline" : ""
            }`}
            onClick={onNavClick(routerConfig.navPath.reservation)}
          >
            Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
