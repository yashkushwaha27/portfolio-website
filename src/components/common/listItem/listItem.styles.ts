import { useBreakpoints } from '@hooks/useBreakPoints';
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
        },
        liClickable: {
          cursor: 'pointer',
        },
        liBody: {
          flex: 1,
          padding: '0 16px',
          fontSize: isMobile ? 12 : 20,
          fontWeight: 600,
        },
      } as const),
    [isMobile]
  );
};
