import { useBreakpoints } from '@hooks/useBreakPoints';
import { colors } from '@theme/colors';
import { useMemo } from 'react';

export const useStyles = () => {
  const { isMobile } = useBreakpoints();

  return useMemo(
    () =>
      ({
        headerIconSize: isMobile ? 24 : 32,
        headerWrapper: {
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          background: 'rgba(0,0,0,0.75)',
          height: isMobile ? 50 : 75,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        headerMenuIcom: {
          height: '100%',
          width: 25,
        },
        headerText: {
          color: colors.white,
          fontSize: isMobile ? 20 : 32,
          fontWeight: 600,
          marginLeft: 32,
          cursor: 'pointer',
        },
        headerIcon: {
          marginRight: 20,
          cursor: 'pointer',
        },
      } as const),
    [isMobile]
  );
};
