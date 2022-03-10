export const dateInfo = () => {
  const info = new Date();

  let year = info.getFullYear();
  let month = info.getMonth();
  let day = info.getDay();
  let hour = info.getHours();
  let minutes = info.getMinutes();
  return {
    year,
    month,
    day,
    hour,
    minutes,
  };
};
