//import UPI from "../../components/payment/upi/upi";
import useRouter from "../../hook/use-router";
import routerConfig from "../../router/router.config";

const Body = (props) => {
  const onCheckouts = (page) => (e) => {
    navigate(page);
  };
  const { navigate } = useRouter();
  return (
    <div className="pb-20 bg-cyan-400 h-full text-white font-serif pt-5 ">
      <div className="flex justify-center flex-col items-center">
        <div className="text-3xl ">Checkout</div>
        <h4 className="text-base mt-2 ">Make your payment here</h4>
      </div>
      <div className="flex flex-row mx-8 mt-8  bg-white text-black ">
        <div className=" m-2 p-8 flex row grid grid-row w-6/12">
          <div className="flex flex-col ml-8 mr-16">
            <div className="text-xl ml-2 mb-6 font-bold text-xl ">
              Personal Details
            </div>
            <div className="flex flex-col gap-1 ">
              <input className="border mb-3 p-2" placeholder="First Name" />
              <input className="border mb-3 mt-2 p-2" placeholder="Last Name" />
              <input
                className="border mb-3 mt-2 p-2"
                placeholder="e-mail address"
              />
              <input
                className="border mb-3 mt-2 p-2"
                placeholder="Contact no."
              />
            </div>
          </div>
        </div>

        <div className="border-l-2 h-120 mr-12 ml-16">
          <div className=" m-1 p-8 flex flex row">
            <div className="flex flex-col">
              <div>
                <div className="text-xl mt-2 ml-2 mb-6 font-bold text-xl">
                  Select a Payment Method
                </div>
                <div className="mt-6  ml-4 gap-8 flex flex-row mb-8 ">
                  <div>
                    <input className="mr-2" type="radio" />
                    UPI
                  </div>
                  <div>
                    <input className="mr-2" type="radio" />
                    Credit
                  </div>
                  <div>
                    <input className="mr-2" type="radio" />
                    Debit
                  </div>
                </div>
              </div>
              <div className="text-xl ml-2 mb-4 font-bold text-xl ">
                Card Details
              </div>
              <form onSubmit={onCheckouts(routerConfig.navPath.receipt)}>
                <div className="">
                  <div className=" p-1">
                    <input className="border p-1" placeholder="Name on Card" />
                  </div>
                  <div className="grid grid-rows-4 grid-flow-row"></div>
                  <div>
                    <div className=" mt-2 p-1">
                      <input className="border p-1" placeholder="Card Number" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className=" mt-2 p-1">
                        <input
                          className="border p-1"
                          placeholder="Valid Till"
                        />
                      </div>
                    </div>
                    <div>
                      <div className=" mt-2 p-1">
                        <input className="border p-1" placeholder="CVV" />
                      </div>
                    </div>
                  </div>
                  <hr className="border-1 mt-8 mb-2"></hr>
                  <div className="flex flex-col gap-3"></div>
                  <button className="flex justify-center items-center border-none bg-cyan-400 text-white p-2">
                    Checkout
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
