export const getRandomInteger = () => {
  const random = Math.random() * 99;

  return Math.floor(random);
};

export const defineImageSize = () => {
  const deviceScreenWidth = document.documentElement.clientWidth;

  return deviceScreenWidth < 1366 ? 'c' : 'b';
};
