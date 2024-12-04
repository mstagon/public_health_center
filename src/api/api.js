import apiConfig from "./apiConfig";
export const checkInUser = async ({ name, phoneNumber }) => {
  const checkInData = {
    name,
    phoneNumber,
    check_in_time: new Date().toISOString(),
  };

  try {
    const res = await apiConfig.post("/checkin", checkInData);
    return res.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const reservationUser = async (user) => {
  try {
    const res = await apiConfig.post("/reservation", {
      name: user.name,
      phone: user.phoneNumber,
      current_time: new Date().toISOString(),
      reservation_time: new Date().toISOString(),
    });
    return res.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
