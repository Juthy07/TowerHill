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

const reservationConfig = {
  roomSchema,
};

export default reservationConfig;
