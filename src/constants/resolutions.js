export const RESOLUTIONS = {
  MOBILE_PORTRAIT: { maxWidth: 768, isLandscape: false, ratio: 120 },
  MOBILE_LANDSCAPE: { maxWidth: 768, isLandscape: true, ratio: 60 },
  DESKTOP_VERY_LOW_RES: {
    minWidth: 769,
    maxWidth: 1199,
    isLandscape: true,
    ratio: 90,
  },
  DESKTOP_LOW_RES: {
    minWidth: 1200,
    maxWidth: 1599,
    isLandscape: true,
    ratio: 110,
  },
  DESKTOP_MID_RES: {
    minWidth: 1600,
    maxWidth: 2099,
    isLandscape: true,
    ratio: 140,
  },
  DESKTOP_HIGH_RES: {
    minWidth: 2100,
    maxWidth: 2799,
    isLandscape: true,
    ratio: 190,
  },
  DESKTOP_VERY_HIGH_RES: { minWidth: 2800, isLandscape: true, ratio: 250 },
  PORTRAIT: { minWidth: 769, isLandscape: false, ratio: 140 },
};

export const getCurrentResolution = () => {
  let currentResolution;
  for (const res in RESOLUTIONS) {
    const { minWidth, maxWidth, isLandscape } = RESOLUTIONS[res];
    const isCurrentResolution =
      (minWidth ? window.innerWidth >= minWidth : true) &&
      (maxWidth ? window.innerWidth <= maxWidth : true) &&
      (isLandscape
        ? window.innerWidth >= window.innerHeight
        : window.innerWidth <= window.innerHeight);
    if (isCurrentResolution) {
      currentResolution = { ...RESOLUTIONS[res], name: res };
      break;
    }
  }
  return currentResolution;
};
