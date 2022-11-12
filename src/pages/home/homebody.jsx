const Body = () => {
  return (
    <div className="bg-cyan-400 h-full">
      <div className="bg-white w-full">
        <img src="images/homepage1" alt="" />
      </div>
      <div className="flex justify-center flex-col items-center text-white font-serif mt-8 mb-8 tracking-wider">
        <h1 className="text-3xl">WELCOME TO TOWERHILL</h1>
        <h4 className="text-base mt-2">The Natural Watch Tower Of Wayanad</h4>
        <div className="mx-32 my-4 text-base">
          Are you looking forward to an exquisite holiday experience this
          season? Well, your ideal tourist spot is the “Towerhill ” located in
          the heart of alluring hills of Wayanad, where the enchanting panoramic
          view of wayanad is visibly enhanced by misty dawns that are bound to
          refresh your mind and soul. Starting from the shores of River
          'Kabani', you will be getting on to the hill top by your own Vehicles
          through the road with eight hairpin curves. The Towerhill offers you
          exquisitely furnished villas, dormitories and tents so as to let you
          enjoy the whole lot of exciting sites we offer here in Wayanad. Guests
          will be served food of their choice and liking, we also provide
          provisions for cooking your own food.
        </div>
      </div>
      <div className="flex justify-center flex-col items-center text-white font-serif mt-8 mb-8 tracking-wider">
        <h1 className="text-3xl">STAY AT TOWERHILL</h1>
        <h4 className="text-base mt-2">Relax On The Top Of Wayanadan Hills</h4>
        <div className="flex flex-row w-full my-8 h-96">
          <div className="flex-1 border-2 mx-2 flex justify-center items-center flex-col">
            Luxuary Cottage
            <div className="text-xs italic">500 square feet Luxury Cottage</div>
          </div>
          <div className="flex-1 border-2 mx-2 flex justify-center items-center flex-col">
            Dormitory
            <div className="text-xs italic">10 Bedspace Dormitory area</div>
          </div>
          <div className="flex-1 border-2 mx-2 flex justify-center items-center flex-col">
            Tent
            <div className="text-xs italic">Facility of open air tent</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center text-white font-serif mt-8 mb-8 tracking-wider ">
        <h1 className="text-3xl">Our Facilities</h1>
        <h4 className="text-base mt-2">Facilities We Provides in Towerhill</h4>
        <div className="bg-white w-9/12 h-80 mt-8 flex flex-row grid grid-rows-2 grid-flow-col gap-4">
          <div className="h-14 w-14 flex flex-col ml-20 mt-8">
            <img src="images/wifi.svg" alt="" />
            <div className="text-sm text-black w-20 mt-2">Free Wi-fi</div>
          </div>
          <div className="h-14 w-14 flex flex-col ml-20 mt-8">
            <img src="images/shower.svg" alt="" />
            <div className="text-sm text-black w-20 mt-2">Hot Water Supply</div>
          </div>
          <div className="h-14 w-14 flex flex-col ml-20 mt-8">
            <img src="images/trekking.svg" alt="" />
            <div className="text-sm text-black w-20 mt-2">Trekking</div>
          </div>
          <div className="h-14 w-14 flex flex-col ml-20 mt-8">
            <img src="images/campfire.svg" alt="" />
            <div className="text-sm text-black w-20 mt-2">Camp Fire</div>
          </div>
          <div className="h-14 w-14 flex flex-col ml-20 mt-8">
            <img src="images/bed.svg" alt="" />
            <div className="text-sm text-black w-20 mt-2">Rooms</div>
          </div>
          <div className="h-14 w-14 flex flex-col ml-20 mt-8">
            <img src="images/games.svg" alt="" />
            <div className="text-sm text-black w-20 mt-2">Games</div>
          </div>
          <div className="h-14 w-14 flex flex-col ml-20 mt-8">
            <img src="images/parking.svg" alt="" />
            <div className="text-sm text-black w-20 mt-2">Parking</div>
          </div>
          <div className="h-14 w-14 flex flex-col ml-20 mt-8">
            <img src="images/dormitory.png" alt="" />
            <div className="text-sm text-black w-20 mt-2">Dormitory</div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center flex-col backdrop-opacity-30 backdrop-invert  ">
        <div className="mt-12 text-white text-xl">
          Know More about TowerHill!
        </div>
        <button className="mt-4 text-white border-white border-2 p-2">
          Contact Us!
        </button>
      </div>
    </div>
  );
};

export default Body;
