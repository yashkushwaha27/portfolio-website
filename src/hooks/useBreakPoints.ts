import { useMediaQuery } from './useMediaQuery';

/**
 * Get a set of boolean representing which breakpoint is active
 * and which breakpoints are inactive.
 */
export const useBreakpoints = () => {
  const xs = useMediaQuery('(max-width: 576px)');
  const sm = useMediaQuery('(min-width: 577px) and (max-width: 768px)');
  const md = useMediaQuery('(min-width: 769px) and (max-width: 991px)');
  const lg = useMediaQuery('(min-width: 992px) and (max-width:1440px)');
  const xl = useMediaQuery('(min-width: 1440px)');

  const breakpoints = {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    isMobile: xs || sm,
    isTablet: md,
    isWeb: lg || xl,
  };
  return breakpoints;
};
