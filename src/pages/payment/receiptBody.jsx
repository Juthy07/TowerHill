const Body = () => {
  return (
    <div className="flex justify-center bg-cyan-400">
      <div className="mx-96 m-16 border p-6 text-xl w-96 bg-white">
        <div className="text-2xl flex justify-center mb-8 font-bold text-cyan-500">
          Receipt of Payment
        </div>
        <div className="">
          <div className="flex grid-col-2 justify-center">
            <div className="grid gap-4">
              <div>Room Type </div>
              <div>Date </div>
              <div>Adults </div>
              <div>Children </div>
              <hr></hr>
              <div>Total </div>
            </div>
            <div className="grid gap-4">
              <div className="pl-20">Luxury Cottage</div>
              <div className="pl-20">26-27 Nov</div>
              <div className="pl-20">2</div>
              <div className="pl-20">0</div>
              <hr></hr>
              <div className="pl-16">3500</div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="mt-6 border-2 p-2 px-6 mb-2 bg-cyan-500 text-white">
              Print a Copy
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Body;
