import { useMemo } from 'react';
import { homeBackground2 } from '@assets/images';
import { useBreakpoints } from '@hooks/useBreakPoints';
import { zIndex } from '@theme/zIndex';
import { colors } from '@theme/colors';

export const useStyles = () => {
  const { isMobile } = useBreakpoints();

  return useMemo(
    () =>
      ({
        hcParticles: {
          zIndex: zIndex.particles,
        },
        hcInformationWrapper: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: zIndex.home,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
        },
        hcHiImg: {
          height: isMobile ? 200 : 250,
          width: isMobile ? 200 : 250,
        },
        hcText: {
          color: colors.white,
        },
        hcNameText: {
          fontSize: isMobile ? 25 : 50,
          fontWeight: 900,
        },
        hcSKillsText: {
          fontSize: isMobile ? 18 : 36,
          fontWeight: 500,
          textAlign: 'center',
          color: colors.tan,
        },
        hcDescriptionText: {
          fontSize: isMobile ? 12 : 24,
          fontWeight: 500,
          textAlign: 'center',
          color: colors.tomato,
        },
      } as const),
    [homeBackground2, isMobile]
  );
};
