import useRouter from "../../hook/use-router";

const roomSchema = {
  cottage: {
    title: "Luxury Cottage",
    image: "images/roomcottage.jpg",
    description:
      "Towerhill Villa cottages are well furnished and fully air conditioned. These rooms have a private balcony and an open terrace filled with exotic Wayanad views. The spacious luxury villa, which is 500 square feet in area contains an A/C bedroom, distinct dining hall, dressing room, balcony which gives you an exotic view of scenic beauty and a bathroom with glass partition with round clock supply of hot water which are specially designed for your luxurious stay at Towehill . Cottage also offer Complementary breakfast, safe locker, LCD TV, Hair dryer, Laundry facility, Room service.",
    price: {
      from: 2000,
    },
  },
  dormitory: {
    title: "Dormitory",
    image: "images/dormitoryi.jpg",
    description:
      "Days together with many of them whom you wish to spent a day makes another great mem in life. Towerhill provide you a well spaced 10 beds dormitory with attached bathrooms creating your own space to share the fun. Make your day out in Towerhill above the hills with your dear crew’s setting up the campfire and busy with little game. Its even hard to dream of a day with those people spending the whole day above the whole district with those whom you never want to miss.",
    price: {
      from: 500,
    },
  },
  tents: {
    title: "Tents",
    image: "images/tents.jpg",
    description:
      "Have you ever thought of spending your nights out with your loved ones, sleeping in the beds of nature filled with the nature songs? Here is your dream come true. Towerhill provide you tents to make your day out in open space, sleeping above all in Wayanad. It’s no more a dream, spent your night watching the stars filled with misty cold under with a warm blanket filled with natural scent. Towerhill provides a good, comfort tent on top of hills in the open air which suits both couples and bachelors.",
    price: {
      from: 1500,
    },
  },
};

const Body = () => {
  const { searchParams } = useRouter();

  if (!searchParams.type) return null;

  const room = roomSchema[searchParams.type];
  const requirements = searchParams.requirements;
  console.log(requirements);

  return (
    <div className="pb-20 bg-cyan-400 h-full text-white font-serif pt-5">
      <div className="flex flex-row mx-8 mt-8 justify-between">
        <div className="flex flex-col">
          <div className="text-3xl p-4">{room.title}</div>
          <img className="w-5/6 h-32" src={room.image} alt="" />
          <div className="">{room.description}</div>
        </div>
        <div className="border-2 p-6 w-auto">
          <div className="mb-4">From {room.price.from} per Night</div>
          <div className="flex justify-center flex-col">
            <div className="border-2 mb-2 p-2">
              Check-in
              <input
                type="date"
                className="text-black m-2"
                defaultValue={requirements.checkinDate}
              />
            </div>
            <div className="border-2 mb-2 p-2">
              Check-out
              <input
                type="date"
                className="text-black m-2"
                defaultValue={requirements.checkoutDate}
              />
            </div>
            <div className="border-2 mb-2 p-2">
              Adults
              <input
                type="number"
                className="text-black m-2"
                defaultValue={requirements.adultCount}
              />
            </div>
            <div className="border-2 mb-4 p-2">
              Children
              <input
                type="number"
                className="text-black m-2"
                defaultValue={requirements.childCount}
              />
            </div>
            <button className="border-2 p-2 mb-2 bg-white text-cyan-500">
              Book Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
