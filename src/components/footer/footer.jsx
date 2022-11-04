const Footer = () => {
  return (
    <div id="footer" className="bg-cyan-50">
      <div className="flex justify-center pt-4">
        <img src="images/footer-logo.png" alt="" />
      </div>
      <div className="text-black mx-96 my-8 flex justify-center">
        Our Guests are offered a wide variety of entertainments and also get to
        see the beautiful and alluring mountains of Wayanad drenched in the
        morning mist and the whole city of Wayanad illuminated within the dense
        forest in the deepest and darkest of nights.
      </div>
      <div className="flex justify-between flex-col  p-4">
        <div className="flex flex-row">
          <div className=" h-6 w-6  ml-20 mt-3 ">
            <img src="images/call.svg" alt="" />
          </div>
          <div className="ml-2 flex items-end">+91 889 33 49 239</div>
        </div>
        <div className="flex flex-row">
          <div className=" h-6 w-6  ml-20 mt-3">
            <img src="images/mail.svg" alt="" />
          </div>
          <div className="ml-2 flex items-end">towerhillheritage@gmail.com</div>
        </div>
        <div className="flex flex-row">
          <div className=" h-6 w-6  ml-20 mt-3">
            <img src="images/location.svg" alt="" />
          </div>
          <div className="ml-2 flex items-end">
            Echoom p.o. Vilambukandam, Wayanad,Kerala
          </div>
        </div>
      </div>
      <div
        id="copyright"
        className="bg-black text-white p-6 flex justify-center"
      >
        TowerHill &copy; 2022 | Designed by TowerHill
      </div>
    </div>
  );
};

export default Footer;
