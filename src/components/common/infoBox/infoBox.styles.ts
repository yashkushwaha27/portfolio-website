import { useMemo } from 'react';
import { useBreakpoints } from '@hooks/useBreakPoints';
import { colors } from '@theme/colors';
import { fontSizeMobile, fontSizeWeb } from '@theme/fonts';

export const useStyles = () => {
  const { isMobile } = useBreakpoints();

  return useMemo(
    () =>
      ({
        ibWrapper: {
          color: colors.tan,
          padding: `${isMobile ? 20 : 28}px 12px 12px`,
          border: `2px solid ${colors.tan}`,
          borderRadius: 8,
          fontSize: isMobile ? fontSizeMobile.paragraph : fontSizeWeb.paragraph,
          position: 'relative',
        },
        ibClickable: {
          cursor: 'pointer',
        },
        ibPlaceholder: {
          opacity: 1,
          color: colors.tan,
          fontSize: isMobile
            ? fontSizeMobile.placeholder
            : fontSizeWeb.placeholder,
          position: 'absolute',
          top: isMobile ? -5 : -10,
          left: 15,
        },
      } as const),
    [isMobile]
  );
};
