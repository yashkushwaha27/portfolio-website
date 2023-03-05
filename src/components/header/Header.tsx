import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Drawer from '@components/drawer';
import { useStyles } from './header.styles';
import { content } from '@constants/content';
import { ROUTES } from '@routes/routes.contants';
import { keyCodes } from '@constants/keyCodes';

const Header = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const [showDrawer, setShowDrawer] = useState(false);

  const onClickHandler = () => setShowDrawer(!showDrawer);

  const onHomeClick = () => {
    navigate(ROUTES.HOME);
    setShowDrawer(false);
  };

  return (
    <>
      <div css={styles.headerWrapper}>
        <p
          role="button"
          tabIndex={0}
          onClick={onHomeClick}
          onKeyDown={(e: any) => e.keyCode === keyCodes.enter && onHomeClick()}
          css={styles.headerText}
        >
          {content.portfolio_text}
        </p>
        <FaBars
          onClick={onClickHandler}
          onKeyDown={(e: any) =>
            e.keyCode === keyCodes.enter && onClickHandler()
          }
          color="white"
          tabIndex={0}
          style={styles.headerIcon}
          size={styles.headerIconSize}
        />
      </div>
      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)} />
    </>
  );
};

export default Header;
