import { useMemo } from 'react';
import { colors } from '@theme/colors';
import { useBreakpoints } from '@hooks/useBreakPoints';
import { fontSizeMobile, fontSizeWeb } from '@theme/fonts';

export const useStyles = () => {
  const { isMobile } = useBreakpoints();

  return useMemo(
    () =>
      ({
        evWrapper: {
          marginTop: isMobile ? 60 : 85,
          textAlign: 'center',
        },
        evHeaderText: {
          color: colors.tomato,
          textTransform: 'uppercase',
          fontSize: isMobile ? fontSizeMobile.heading : fontSizeWeb.heading,
        },
        evVerticalLine: {
          borderRight: `3px solid ${colors.tan}`,
          width: '0px',
          height: 20,
          margin: '0 auto',
        },
        evBodyWrapper: {
          height: '85vh',
          overflowY: 'scroll',
          '::-webkit-scrollbar': {
            '-webkit-appearance': 'none',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0, 0, 0, 0)',
          },
          'scrollbar-width': 'none', // for mozilla
        },
      } as const),
    [isMobile]
  );
};
