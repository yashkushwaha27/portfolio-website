import { useEffect, useMemo, useState } from 'react';
import { useBreakpoints } from '@hooks/useBreakPoints';
import { colors } from '@theme/colors';
import { fontSizeMobile, fontSizeWeb } from '@theme/fonts';

export const useStyles = (sectionToRender: 'left' | 'right') => {
  const { isMobile } = useBreakpoints();
  const [broswerAgent, setBrowserAgent] = useState<
    'chrome' | 'firefox' | 'safari' | 'edge' | ''
  >('');

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.match(/chrome|chromium|crios/i)) {
      setBrowserAgent('chrome');
    } else if (userAgent.match(/firefox|fxios/i)) {
      setBrowserAgent('firefox');
    } else if (userAgent.match(/safari/i)) {
      setBrowserAgent('safari');
    } else if (userAgent.match(/edg/i)) {
      setBrowserAgent('edge');
    } else {
      setBrowserAgent('');
    }
  }, []);

  return useMemo(
    () =>
      ({
        eiWrapper: {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
        eiHeaderWrapper: {
          width: isMobile
            ? `calc(100vw - ${
                broswerAgent === 'chrome'
                  ? 60
                  : broswerAgent === 'firefox'
                  ? 43
                  : broswerAgent === 'safari'
                  ? 58
                  : 59
              }px)`
            : '50%',
          background: colors.tomato,
          color: colors.white,
          margin: 'auto',
          borderRight: isMobile ? `3px solid ${colors.tan}` : '',
          borderBottom: `3px solid ${colors.tan}`,
        },
        eiBodyWrapper: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile
            ? 'flex-start'
            : sectionToRender === 'left'
            ? 'flex-start'
            : 'flex-end',
          marginRight: isMobile ? 20 : 0,
        },
        eiSectionsWrapper: {
          width: isMobile
            ? 'calc(100vw - 20px)'
            : `calc(50vw - ${broswerAgent === 'firefox' ? 0 : 10}px)`,
          padding: '20px 0',
        },
        eiLeftSection: {
          borderRight: `3px solid ${colors.tan}`,
        },
        eiRightSection: {
          [`border${isMobile ? 'Right' : 'Left'}`]: `3px solid ${colors.tan}`,
        },
        eiDataContainer: {
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        },
        eiDataWrapper: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
        },
        eiDataHeading: {
          color: colors.white,
          fontSize: isMobile
            ? fontSizeMobile.subLabel - 4
            : fontSizeWeb.subLabel - 4,
          paddingTop: isMobile ? 16 : 0,
        },
        eiDataCompany: {
          color: colors.tomato,
          fontSize: isMobile
            ? fontSizeMobile.paragraph - 4
            : fontSizeWeb.paragraph - 4,
        },
        eiDataDescription: {
          color: colors.tan,
          fontSize: isMobile
            ? fontSizeMobile.placeholder + 2
            : fontSizeWeb.placeholder,
          margin: 'auto',
          width: '90%',
          paddingBottom: 8,
          borderBottom: `1px solid ${colors.tan}`,
        },
        eiArrowIcons: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: colors.tomato,
        },
      } as const),
    [isMobile, sectionToRender, broswerAgent]
  );
};
