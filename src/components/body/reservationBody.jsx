import routerConfig from "../../router/router.config";

const roomSchema = {
  cottage: {
    type: "cottage",
    image: "/images/cottage.jpg",
    title: "Luxury Cottage",
    description:
      "Towerhill Villa cottages are well furnished and fully air-conditioned. These rooms have a private balcony and an open terrace filled with exotic Wayanad views.",
    area: "500 square feet",
    facilities: [
      "Complementary breakfast",
      "safe locker",
      "Air Conditioned Room",
      "LCD TV",
      "Hair dryer",
      "Laundry facility",
      "Room service",
    ],
    price: "₹2500",
  },
  dormitory: {
    type: "dormitory",
    image: "/images/dormitoryi.jpg",
    title: "Dormitory",
    description:
      "Towerhill provide you a well spaced 10 beds dormitory with attached bathrooms creating your own space to share the fun.",
    area: "500 square feet",
    facilities: ["10 Beds", "Bathroom Facility", "Fan"],
    price: "₹1000",
  },
  tents: {
    type: "tents",
    image: "/images/tents.jpg",
    title: "Tents",
    description:
      " Towerhill provide a good, comfort tent on top of hills in the open air with a beautiful view from the top which suits both couples and bachelors.",
    area: "500 square feet",
    facilities: [
      "sleeping in the beds of nature filled with the nature songs? Here is your dream come true.",
    ],
    price: "₹1500",
  },
};

const RBody = (props) => {
  const onMoreInfoClick = (search) => (e) => {
    props.setActivePage(routerConfig.navPath.moreInfo);
    props.setSearchParams({
      type: search,
    });
  };
  return (
    <div className="pb-20 bg-cyan-400 h-full text-white font-serif pt-5">
      <div className="flex justify-center flex-col items-center">
        <div className="text-3xl">Book Rooms</div>
        <div className="flex flex-row mt-10">
          <div className=" border-2 p-2 ">
            Check-in
            <input type="date" className="ml-2"></input>
          </div>
          <div className=" border-2 p-2 ">
            Check-out <input type="date" className="ml-2"></input>
          </div>
          <div className=" border-2 p-2">
            Adults <input className="ml-2 text-black" type="number"></input>
          </div>
          <div className=" border-2 p-2">
            Children <input className="ml-2 text-black" type="number" />
          </div>
          <button className=" border-4 p-2">Search</button>
        </div>
        <div className="flex max-w-8xl flex-col mt-10">
          {Object.keys(roomSchema).map((roomType) => {
            const room = roomSchema[roomType];
            return (
              <div className="flex flex-row max-h-72 mt-8 m-8  text-black">
                <img
                  className="border-2 border-black bg-white mr-2"
                  src={room.image}
                  alt=""
                />
                <div
                  key={room.type}
                  className="mr-2 p-2 border-2 border-black bg-white max-w-2xl"
                >
                  <div className="text-xl font-bold">{room.title}</div>
                  <div>
                    <div className="mt-2">{room.description}</div>
                    <div className="mt-2">
                      <p className="font-semibold">Area:</p> {room.area}
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="font-semibold">Facilities: </p>
                    <ul className="grid grid-cols-2 list-disc px-6">
                      {room.facilities.map((facility) => (
                        <li key={facility}>{facility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-2 border-2 border-black bg-white max-w-lg flex flex-col justify-center">
                  <div>Price: {room.price}</div>
                  <button
                    className="border-2 p-2 mt-2"
                    onClick={onMoreInfoClick(room.type)}
                  >
                    More Info
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default RBody;
