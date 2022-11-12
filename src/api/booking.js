const bookingData = {
  cottage: {
    totalRooms: 3,
    reservedDates: [
      ["2022-11-14", "2022-11-17"],
      ["2022-11-14", "2022-11-18"],
      ["2022-12-01", "2022-12-03"],
    ],
  },
  dormitory: {
    totalRooms: 3,
    reservedDates: [
      ["2022-11-14", "2022-11-17"],
      ["2022-11-14", "2022-11-18"],
      ["2022-12-01", "2022-12-03"],
    ],
  },
  tents: {
    totalRooms: 3,
    reservedDates: [
      ["2022-11-14", "2022-11-17"],
      ["2022-11-14", "2022-11-18"],
      ["2022-12-01", "2022-12-03"],
    ],
  },
};

const perRoomCapacity = {
  cottage: 6,
  dormitory: 10,
  tents: 2,
};

/**
 * @param {[string, string]} dates
 * @param {{ adultCount: number; childCount: number }} pax
 */
export const getAvailableRooms = (inputDates, pax) => {
  return Object.keys(bookingData).reduce((availableRooms, type) => {
    const occupiedRoomsCount = bookingData[type].reservedDates.reduce(
      (total, [inDate, outDate]) => {
        const bookedInDate = new Date(inDate);
        const bookedOutDate = new Date(outDate);
        const inputInDate = new Date(inputDates[0]);
        const inputOutDate = new Date(inputDates[1]);

        // Before existing bookings
        if (inputInDate <= bookedInDate && inputOutDate > bookedInDate) {
          total = total + 1;
        }
        // After existing bookings
        if (inputInDate > bookedInDate && inputInDate <= bookedOutDate) {
          total = total + 1;
        }
        // if (inputInDate == bookedInDate) {
        //   total = total + 1;
        // }

        return total;
      },
      0
    );

    const hasOccupancy = (availableRooms) => {
      const roomsNeeded =
        ((pax.adultCount || 0) * 1 + (pax.childCount || 0) * 0.5) /
        perRoomCapacity[type];

      return roomsNeeded <= availableRooms;
    };

    if (hasOccupancy(bookingData[type].totalRooms - occupiedRoomsCount)) {
      availableRooms.push(type);
    }
    return availableRooms;
  }, []);
};
