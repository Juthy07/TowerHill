import { useRef, useState } from "react";
import { getAvailableRooms } from "../../api/booking";
import useRouter from "../../hook/use-router";
import routerConfig from "../../router/router.config";
import reservationConfig from "./reservation.config";

const RBody = () => {
  const { navigate } = useRouter();
  const form = useRef({
    checkinDate: "",
    checkoutDate: "",
    adultCount: 0,
    childCount: 0,
  });
  /**
   * @type {[undefined | Array<string>, (search: undefined | Array<string>) => void]}
   */
  const [searchResult, setSearchResult] = useState();
  const roomList = Object.keys(reservationConfig.roomSchema)
    .map((type) => reservationConfig.roomSchema[type])
    .filter((room) => (searchResult ? searchResult.includes(room.type) : true));

  /**
   * @param {'checkinDate' | 'checkoutDate' | 'adultCount' | 'childCount'} type
   */
  const onInputChange = (type) => (e) => {
    if (form && form.current) {
      form.current[type] = e.target.value;
    }
    console.log(form);
  };

  const onSearch = () => {
    if (form && form.current) {
      const validated = Object.keys(form.current).every((type) => {
        switch (type) {
          case "checkinDate": {
            if (new Date(form.current.checkinDate).getTime() < Date.now())
              return "checkinDate";
            return true;
          }
          case "checkoutDate": {
            if (new Date(form.current.checkoutDate).getTime() < Date.now())
              return "checkoutDate";
            return true;
          }
          case "adultCount": {
            if (Number(form.current.adultCount) < 0) return "adultCount";
            return true;
          }
          case "childCount": {
            if (Number(form.current.childCount) < 0) return "childCount";
            return true;
          }
          default:
            return true;
        }
      });
      // if (validated) alert("Form passed the validation check");
      // else alert("Form failed the validation check");

      if (validated) {
        setSearchResult(
          getAvailableRooms(
            [form.current.checkinDate, form.current.checkoutDate],
            {
              adultCount: form.current.adultCount,
              childCount: form.current.childCount,
            }
          )
        );
      }
    }
  };

  const onMoreInfoClick = (search) => (e) => {
    navigate(routerConfig.navPath.moreInfo, {
      type: search,
      requirements: JSON.stringify(form.current),
    });
  };

  return (
    <div className="pb-20 bg-cyan-400 h-full text-white font-serif pt-5">
      <div className="flex justify-center flex-col items-center">
        <div className="text-3xl">Book Rooms</div>
        <div className="flex flex-row mt-10">
          <div className=" border p-2 ">
            Check-in
            <input
              type="date"
              className="ml-2 text-black"
              onChange={onInputChange("checkinDate")}
              required
            />
          </div>
          <div className=" border p-2">
            Check-out{" "}
            <input
              type="date"
              className="ml-2 text-black"
              onChange={onInputChange("checkoutDate")}
              required
            />
          </div>
          <div className=" border p-2">
            Adults{" "}
            <input
              className="ml-2 text-black"
              type="number"
              onChange={onInputChange("adultCount")}
              required
            />
          </div>
          <div className=" border p-2">
            Children{" "}
            <input
              className="ml-2 text-black"
              type="number"
              onChange={onInputChange("childCount")}
              required
            />
          </div>
          <button className=" border-4 p-2" onClick={onSearch}>
            Search
          </button>
        </div>
        <div className="flex max-w-8xl flex-col mt-10">
          {roomList.map((room) => {
            return (
              <div className="flex flex-row max-h-72 mt-8 m-8  text-black">
                <img
                  className="border border-white bg-white mr-2"
                  src={room.image}
                  alt=""
                />
                <div
                  key={room.type}
                  className="mr-2 p-2 border border-white bg-white max-w-2xl"
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
                <div className="p-2 border border-white bg-white max-w-lg flex flex-col justify-center">
                  <div>Price: {room.price}</div>
                  <button
                    className="border p-2 mt-2"
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
