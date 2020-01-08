export const rgbToHex = (r, g, b) => {
  let rInHexadecimal = r.toString(16);
  let gInHexadecimal = g.toString(16);
  let bInHexadecimal = b.toString(16);

  if (rInHexadecimal.length === 1) rInHexadecimal = `0${r}`;
  if (gInHexadecimal.length === 1) gInHexadecimal = `0${g}`;
  if (bInHexadecimal.length === 1) bInHexadecimal = `0${b}`;

  return `#${rInHexadecimal}${gInHexadecimal}${bInHexadecimal}`;
};

export const customHexToRgb = hex => {
  let r = 0;
  let g = 0;
  let b = 0;

  // 3 digits
  if (hex.length === 4) {
    r = `0x${hex[1]}${hex[1]}`;
    g = `0x${hex[2]}${hex[2]}`;
    b = `0x${hex[3]}${hex[3]}`;

    // 6 digits
  } else if (hex.length === 7) {
    r = `0x${hex[1]}${hex[2]}`;
    g = `0x${hex[3]}${hex[4]}`;
    b = `0x${hex[5]}${hex[6]}`;
  }

  return { r: +r, g: +g, b: +b };
};
