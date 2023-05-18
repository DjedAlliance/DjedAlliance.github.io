const SCREEN_SIZES = {
	MOBILE: 'MOBILE',
	TABLET: 'TABLET',
	DESKTOP: 'DESKTOP',
};
  
const SCREEN_HEIGHTS = {
	SHORT: 'SHORT',
	MEDIUM: 'MEDIUM',
	TALL: 'TALL',
};
  
const getScreenSize = (): string => {
	const width = window.innerWidth;
	const height = window.innerHeight;
  
	if (width <= 640 && height <= 480) {
		return `${SCREEN_SIZES.MOBILE}-${SCREEN_HEIGHTS.SHORT}`;
	} else if (width <= 640 && height > 480) {
		return `${SCREEN_SIZES.MOBILE}-${SCREEN_HEIGHTS.TALL}`;
	} else if (width <= 1024 && height <= 768) {
		return `${SCREEN_SIZES.TABLET}-${SCREEN_HEIGHTS.SHORT}`;
	} else if (width <= 1024 && height > 768) {
		return `${SCREEN_SIZES.TABLET}-${SCREEN_HEIGHTS.TALL}`;
	} else {
		return `${SCREEN_SIZES.DESKTOP}-${SCREEN_HEIGHTS.MEDIUM}`;
	}
};
  
export const isMobile = (): boolean => {
	const screenSize = getScreenSize();
	return screenSize.startsWith(SCREEN_SIZES.MOBILE);
};
  
export const isTablet = (): boolean => {
	const screenSize = getScreenSize();
	return screenSize.startsWith(SCREEN_SIZES.TABLET);
};
  
export const isDesktop = (): boolean => {
	const screenSize = getScreenSize();
	return screenSize.startsWith(SCREEN_SIZES.DESKTOP);
};
  
export const isShortHeight = (): boolean => {
	const screenSize = getScreenSize();
	return screenSize.endsWith(SCREEN_HEIGHTS.SHORT);
};
  
export const isMediumHeight = (): boolean => {
	const screenSize = getScreenSize();
	return screenSize.endsWith(SCREEN_HEIGHTS.MEDIUM);
};
  
export const isTallHeight = (): boolean => {
	const screenSize = getScreenSize();
	return screenSize.endsWith(SCREEN_HEIGHTS.TALL);
};
  