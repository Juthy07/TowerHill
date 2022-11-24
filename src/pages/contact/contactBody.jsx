// import useRouter from "../../hook/use-router";
// import routerConfig from "../../router/router.config";

const Body = () => {
  //   const onSubmit = (page) => (e) => {
  //     navigate(page);
  //   };
  //   const { navigate } = useRouter();
  return (
    <div className="pb-20 bg-cyan-400 h-full text-white font-serif pt-5">
      <div className="flex justify-center flex-col items-center">
        <div className="text-3xl ">Contact Us</div>
        <h4 className="text-base mt-2 ">Keep in touch with us</h4>
      </div>
      <div className="flex flex-row align-center text-black ">
        <div className="ml-12 mt-16 bg-white text-black h-94 w-2/5 flex justify-content-start rounded-md p-2">
          <iframe
            title="rrr"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62509.73347455782!2d75.9812306005171!3d11.70444407405188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba67509da3968f9%3A0x6cbeb556e71a13c5!2sTowerhill%2C%20Vilambukandam%2C%20Wayanad%2C%20Kerala!3m2!1d11.7044462!2d76.01625039999999!5e0!3m2!1sen!2sin!4v1669295962085!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form
          action="https://formsubmit.co/juthy.shaji@gmail.com"
          method="POST"
        >
          <div className="mt-16 ml-56">
            <div className="h-10 w-96 bg-white rounded-md p-2">
              <input
                type="text"
                class="form-control"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mt-4 h-10 w-96 bg-white rounded-md p-2">
              <input
                type="text"
                class="form-control"
                name="email"
                placeholder="email"
                required
              />
            </div>
            <div className="mt-4 h-64 w-96 bg-white rounded-md p-2">
              <textarea
                className="w-full"
                class="form-control"
                name="message"
                placeholder="message"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-10 w-20 h-10 rounded-md bg-white"
              // onClick={onSubmit(routerConfig.navPath.thankyou)}
            >
              Submit
            </button>
          </div>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/thankyou"
          ></input>
        </form>
      </div>
      <div className="mt-20  flex ml-28">
        <div className="flex h-14 w-14 flex-row grow">
          <img src="images/mailc.svg" alt="" />
          <div className="ml-4">towerhillheritage@gmail.com</div>
        </div>
        <div className="flex h-12 w-12 flex-row grow">
          <img src="images/callc.svg" alt="" />
          <div className="ml-4">+91 88 93 349 239</div>
        </div>
        <div className="flex h-14 w-14 flex-row grow">
          <img src="images/webc.svg" alt="" />
          <div className="ml-4">www.towerhill.in</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
