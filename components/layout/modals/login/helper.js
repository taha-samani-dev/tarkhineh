const formatPhone = (phone) => {
  return phone.slice(0, 4) + " " + phone.slice(4, 7) + " " + phone.slice(7, 11);
};
const changeFormatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

export { formatPhone,  changeFormatTime };
