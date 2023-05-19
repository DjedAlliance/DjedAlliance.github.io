import { isMobile, isTablet, isDesktop, isShortHeight, isMediumHeight, isTallHeight } from '../../../utils/screenUtils';

export const handleAnimationWidth = (): string => {
	if (isMobile()) {
		if (isShortHeight()) {
			return '90vw';
		} else if (isMediumHeight()) {
			return '88vw';
		} else if (isTallHeight()) {
			return '86vw';
		}
	} else if (isTablet()) {
		return '90vw';
	} else if (isDesktop()) {
		return '41vw';
	}
	return '';
};

export const handleAnimationHeight = (): string => {
	if (isMobile()) {
		if (isShortHeight()) {
			return '33vh';
		}else if (isMediumHeight()) {
			return '35vh';
		} else if (isTallHeight()) {
			return '37vh';
		}
	} else if (isTablet()) {
		if (isShortHeight()) {
			return '46vh';
		} else if (isMediumHeight()) {
			return '48vh';
		} else if (isTallHeight()) {
			return '50vh';
		}
	} else if (isDesktop()) {
		return '75vh';
		
	}
	return '';
};


export const handleAnimationMargin = (): string => {
	if (isMobile()) {
		return '1.5rem';
	} else if (isTablet()) {
		if (isShortHeight()) {
			return '2.9rem';
		} else if (isMediumHeight()) {
			return '3rem';
		} else if (isTallHeight()) {
			return '3.3rem';
		}
	} else if (isDesktop()) {
		return '4.4rem';
	}
	return '';
};