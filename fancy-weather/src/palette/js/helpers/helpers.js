export const getRandomInteger = () => {
  const random = Math.random() * 99;

  return Math.floor(random);
};
export const defineImageSize = () => {
  const deviceScreenWidth = document.documentElement.clientWidth;

  return deviceScreenWidth < 1366 ? 'c' : 'b';
};
export const getDayNumberOfTheWeek = dayOfTheWeek => {
  switch (dayOfTheWeek) {
    case 'Monday':
      return 0;
    case 'Tuesday':
      return 1;
    case 'Wednesday':
      return 2;
    case 'Thursday':
      return 3;
    case 'Friday':
      return 4;
    case 'Saturday':
      return 5;
    case 'Sunday':
      return 6;
    default:
      break;
  }
  return 0;
};
export const getMonthNumber = month => {
  switch (month) {
    case 'January':
      return 0;
    case 'February':
      return 1;
    case 'March':
      return 2;
    case 'April':
      return 3;
    case 'May':
      return 4;
    case 'June':
      return 5;
    case 'July':
      return 6;
    case 'August':
      return 7;
    case 'September':
      return 8;
    case 'October':
      return 9;
    case 'November':
      return 10;
    case 'December':
      return 11;
    default:
      break;
  }
  return 0;
};
