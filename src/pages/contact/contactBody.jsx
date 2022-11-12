const Body = () => {
  return (
    <div className="pb-20 bg-cyan-400 h-full text-white font-serif pt-5">
      <div className="flex justify-center flex-col items-center">
        <div className="text-3xl">Contact TowerHill!</div>
        <h4 className="text-base mt-2 ">Keep in touch with us</h4>
      </div>
      <div className="flex flex-row align-center text-black ">
        <div className="ml-12 mt-16 bg-white text-black h-94 w-2/5 flex justify-content-start rounded-md p-2">
          Map Here!
        </div>
        <div className="mt-16 ml-56">
          <div className="h-10 w-96 bg-white rounded-md p-2">Your Name</div>
          <div className="mt-4 h-10 w-96 bg-white rounded-md p-2">
            e-mail address
          </div>
          <div className="mt-4 h-64 w-96 bg-white rounded-md p-2">Message</div>
          <button className="mt-10 w-20 h-10 rounded-md bg-white">
            Submit
          </button>
        </div>
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
