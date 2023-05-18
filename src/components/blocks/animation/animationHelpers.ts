import { isMobile, isTablet, isDesktop, isShortHeight, isMediumHeight, isTallHeight } from '../../../utils/screenUtils';

export const handleAnimationWidth = (): string => {
	if (isMobile()) {
		if (isShortHeight()) {
			return '90vw';
		} else if (isTallHeight()) {
			return '90vw';
		}
	} else if (isTablet()) {
		if (isShortHeight()) {
			return '85vw';
		} else if (isTallHeight()) {
			return '90vw';
		}
	} else if (isDesktop()) {
		if (isShortHeight()) {
			return '45vw';
		} else if (isMediumHeight()) {
			return '45vw';
		} else if (isTallHeight()) {
			return '45vw';
		}
	}
	return '';
};

export const handleAnimationHeight = (): string => {
	if (isMobile()) {
		if (isShortHeight()) {
			return '30vh';
		} else if (isTallHeight()) {
			return '35vh';
		}
	} else if (isTablet()) {
		if (isShortHeight()) {
			return '45vh';
		} else if (isTallHeight()) {
			return '50vh';
		}
	} else if (isDesktop()) {
		if (isShortHeight()) {
			return '75vh';
		} else if (isMediumHeight()) {
			return '75vh';
		} else if (isTallHeight()) {
			return '75vh';
		}
	}
	return '';
};


export const handleAnimationMargin = (): string => {
	if (isMobile()) {
		if (isShortHeight()) {
			return '20px';
		} else if (isTallHeight()) {
			return '35px';
		}
	} else if (isTablet()) {
		if (isShortHeight()) {
			return '50px';
		} else if (isTallHeight()) {
			return '55px';
		}
	} else if (isDesktop()) {
		if (isShortHeight()) {
			return '75px';
		} else if (isMediumHeight()) {
			return '75px';
		} else if (isTallHeight()) {
			return '75px';
		}
	}
	return '';
};