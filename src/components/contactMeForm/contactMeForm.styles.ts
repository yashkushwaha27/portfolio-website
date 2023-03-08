import { useMemo } from 'react';
import { useBreakpoints } from '@hooks/useBreakPoints';
import { colors } from '@theme/colors';
import { fontSizeMobile, fontSizeWeb, fontWeight } from '@theme/fonts';

export const useStyles = () => {
  const { isMobile } = useBreakpoints();

  return useMemo(
    () =>
      ({
        cmfWrapper: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        cmfHeading: {
          color: colors.tan,
          fontSize: isMobile ? fontSizeMobile.heading : fontSizeWeb.heading,
          fontWeight: fontWeight.bold,
        },
        cmfImgWrapper: {
          background: colors.tan,
          borderRadius: '50%',
          boxShadow: `0px 0px 40px ${colors.tan}`,
        },
        cmfImage: {
          borderRadius: '50%',
          height: isMobile ? 175 : 350,
          width: isMobile ? 175 : 350,
          objectFit: 'contain',
        },
        cmfDetailsContainer: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 16,
        },
        cmfDetailsWrapper: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          paddingTop: 28,
          width: isMobile ? '80%' : '100%',
        },
        cmfInfoWrapper: {
          marginRight: 16,
        },
        cmfInfoWrapperMobile: {
          marginTop: 16,
          width: '100%',
        },
        cmfBtn: {
          padding: '12px 0',
          borderRadius: 12,
          border: `1px solid ${colors.tomato}`,
          background: colors.tomato,
          color: colors.white,
          textTransform: 'capitalize',
          width: isMobile ? '80%' : '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          marginTop: 16,
          cursor: 'pointer',
          '&:hover': {
            border: `1px solid ${colors.white}`,
            background: colors.white,
            color: colors.tomato,
          },
        },
        cmfIcon: {
          marginLeft: 8,
        },
      } as const),
    [isMobile]
  );
};
