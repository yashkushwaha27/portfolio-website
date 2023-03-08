import { useBreakpoints } from '@hooks/useBreakPoints';
import { fontSizeMobile, fontSizeWeb, fontWeight } from '@theme/fonts';
import { useMemo } from 'react';

export const useStyles = () => {
  const { isMobile } = useBreakpoints();

  return useMemo(
    () =>
      ({
        liWrapper: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          textAlign: 'start',
        },
        liClickable: {
          cursor: 'pointer',
        },
        liBody: {
          flex: 1,
          padding: '8px 16px',
          fontSize: isMobile
            ? fontSizeMobile.paragraph - 2
            : fontSizeWeb.paragraph - 4,
          fontWeight: fontWeight.regular,
        },
      } as const),
    [isMobile]
  );
};
