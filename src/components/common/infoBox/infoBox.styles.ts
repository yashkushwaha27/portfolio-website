import { useMemo } from 'react';
import { useBreakpoints } from '@hooks/useBreakPoints';
import { colors } from '@theme/colors';

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
          fontSize: isMobile ? 12 : 24,
          position: 'relative',
        },
        ibClickable: {
          cursor: 'pointer',
        },
        ibPlaceholder: {
          opacity: 1,
          color: colors.tan,
          fontSize: isMobile ? 10 : 16,
          position: 'absolute',
          top: isMobile ? -8 : -16,
          left: 15,
        },
      } as const),
    [isMobile]
  );
};
