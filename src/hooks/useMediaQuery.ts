import { useEffect, useState } from 'react';

/**
 * Custom hook that tells you whether a given media query is active.
 */
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    const handler = (event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => setMatches(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);
  return matches;
};
