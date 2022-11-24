import useRouter from "../../hook/use-router";
import routerConfig from "../../router/router.config";

const Body = (props) => {
  const onCheckout = (page) => (e) => {
    navigate(page);
  };
  const { navigate } = useRouter();

  return (
    <div className="pb-20 bg-cyan-400 h-full text-white font-serif pt-5 ">
      <div className="flex justify-center flex-col items-center">
        <div className="text-3xl ">Room Booking</div>
        <h4 className="text-base mt-2 ">Book your room</h4>
      </div>
      <div className="flex flex-row mx-8 mt-8 justify-between bg-white text-black ">
        <div className=" m-2 p-8 flex flex-row grid grid-row w-6/12">
          <div className="flex flex-row ml-8">
            <div className="text-xl ml-2 mb-6 font-bold text-xl">
              Guest Details
            </div>
          </div>
          <form
            onSubmit={onCheckout(routerConfig.navPath.payment)}
            method="POST"
          >
            <div className="flex flex-col gap-3 ml-12 w-full">
              <input
                className="border mt-2 p-1"
                placeholder="First Name"
                required
              />
              <input
                className="border mt-2 p-1"
                placeholder="Last Name"
                required
              />
              <input
                className="border mt-2 p-1"
                placeholder="e-mail address"
                required
              />
              <input
                className="border mt-2 p-1"
                placeholder="contact no."
                type="textarea"
                required
              />
              <input
                className="border mt-2 p-1"
                placeholder="aadhar no."
                type="textarea"
                required
              />
              <input
                className="border mt-2 p-1"
                placeholder="Special Requirement"
                type="textarea"
                required
              />
              <button className=" p-3 ml-6 mt-10 border-2 border-slate-100 bg-cyan-400 text-white justify-self-center">
                Continue to Check Out
              </button>
            </div>
          </form>
        </div>
        <div className="border-l-2 h-120 mr-12">
          <div className=" m-2 p-8 flex flex row grid grid-cols-2">
            <div className="flex flex-col">
              <div className="text-xl ml-2 mb-6 font-bold text-xl">
                Order Summary
              </div>
              <div className="mt-1 p-2">Room Type</div>
              <div className="mt-2 p-2">Dates</div>
              <div className="mt-2 p-2">Adults</div>
              <div className="mt-2 p-2">Children</div>
              <hr className="border-1 mt-2 mb-2"></hr>
              <div className="mt-2 p-2 font-bold text-lg">Total</div>
            </div>

            <div className="flex flex-col gap-3">
              <div className=" mt-14 p-1">Luxury Cottage</div>
              <div className=" mt-2 p-1">24-26 November</div>
              <div className=" mt-2 p-1">2</div>
              <div className=" mt-2 p-1">0</div>
              <div className=" mt-6 p-1">Rs. 3500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
