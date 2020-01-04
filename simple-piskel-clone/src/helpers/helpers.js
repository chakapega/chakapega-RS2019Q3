export const rgbToHex = (r, g, b) => {
  let rInHexadecimal = r.toString(16);
  let gInHexadecimal = g.toString(16);
  let bInHexadecimal = b.toString(16);

  if (rInHexadecimal.length === 1) rInHexadecimal = `0${r}`;
  if (gInHexadecimal.length === 1) gInHexadecimal = `0${g}`;
  if (bInHexadecimal.length === 1) bInHexadecimal = `0${b}`;

  return `#${rInHexadecimal}${gInHexadecimal}${bInHexadecimal}`;
};

export const getCorrectionNumber = (realCanvasSize, activeCanvasSize) => {
  return realCanvasSize / +activeCanvasSize;
};
