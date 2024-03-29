import { useMemo } from 'react';
import { zIndex } from '@theme/zIndex';
import { colors } from '@theme/colors';
import { useBreakpoints } from '@hooks/useBreakPoints';

const TRANSITION = '0.3s ease all';

export const useStyles = () => {
  const { isMobile } = useBreakpoints();

  return useMemo(
    () =>
      ({
        drawerListItemIconColor: colors.tan,
        drawerIconSize: isMobile ? 24 : 32,
        drawerListItemIconSize: isMobile ? 20 : 28,
        drawerWrapper: {
          height: '100%',
          transition: TRANSITION,
          position: 'absolute',
          right: 0,
          background: colors.darkTomato,
          zIndex: zIndex.drawer,
          display: 'flex',
          flexDirection: 'column',
        },
        drawerOpen: {
          width: isMobile ? 250 : 300,
        },
        drawerClosed: {
          width: 0,
          background: 'transparent',
        },
        drawerBackdrop: {
          transition: TRANSITION,
          background: 'rgba(0,0,0,0.45)',
          zIndex: zIndex.backdrop,
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        drawerBackdropClosed: {
          display: 'none',
        },
        drawerHeader: {
          padding: `${isMobile ? 24 : 32}px ${isMobile ? 16 : 32}px 0`,
          borderBottom: `1px solid ${colors.black}`,
        },
        drawerHeaderImg: {
          height: isMobile ? 125 : 200,
          resizeMode: 'contain',
        },
        drawerBody: {
          flex: 1,
          padding: `12px 0`,
          color: colors.tan,
          margin: 'auto 0',
        },
        drawerFooter: {
          background: colors.black,
          height: isMobile ? 25 : 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: `12px ${isMobile ? 16 : 32}px`,
        },
        drawerListItem: {
          padding: `12px ${isMobile ? 16 : 32}px`,
          '&:hover': {
            background: 'rgba(280,180,140,0.05)',
          },
        },
        drawerSeparator: {
          margin: '0px 32px 8px',
          borderBottom: '1px solid rgba(280,180,140,0.5)',
        },
        drawerIcon: { color: colors.tan, '&:hover': { color: colors.tomato } },
      } as const),
    [isMobile]
  );
};
