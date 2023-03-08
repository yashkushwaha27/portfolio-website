import { useMemo } from 'react';
import { useBreakpoints } from '@hooks/useBreakPoints';
import { zIndex } from '@theme/zIndex';
import { colors } from '@theme/colors';
import { fontSizeMobile, fontSizeWeb, fontWeight } from '@theme/fonts';

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
          fontSize: isMobile ? fontSizeMobile.heading : fontSizeWeb.heading,
          fontWeight: fontWeight.bold,
        },
        hcSKillsText: {
          fontSize: isMobile ? fontSizeMobile.subLabel : fontSizeWeb.subLabel,
          fontWeight: fontWeight.medium,
          textAlign: 'center',
          color: colors.tan,
        },
        hcDescriptionText: {
          fontSize: isMobile ? fontSizeMobile.paragraph : fontSizeWeb.paragraph,
          fontWeight: fontWeight.medium,
          textAlign: 'center',
          color: colors.tomato,
        },
      } as const),
    [isMobile]
  );
};
