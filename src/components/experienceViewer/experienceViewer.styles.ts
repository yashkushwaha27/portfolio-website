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
          height: isMobile ? '70vh' : '85vh',
          overflowY: 'scroll',
          '::-webkit-scrollbar': {
            '-webkit-appearance': 'none',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0, 0, 0, 0)',
          },
          'scrollbar-width': 'none', // for mozilla
        },
        evHourGlassWrapper: {
          padding: 16,
          borderRadius: '50%',
          border: `1px solid ${colors.tan}`,
          width: 'fit-content',
          margin: '8px auto',
        },
        evHourGlassColor: colors.tan,
        evHourGlassSize: isMobile ? 20 : 28,
        evFragments: {
          color: colors.tan,
          fontSize: isMobile ? 20 : 28,
        },
      } as const),
    [isMobile]
  );
};
