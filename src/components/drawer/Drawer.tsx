import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaIdCard,
  FaIdBadge,
  FaHome,
} from 'react-icons/fa';
import { judgementFreeZone } from '@assets/images';
import { useStyles } from './drawer.styles';
import { ListItem } from '@components/common';
import { content } from '@constants/content';
import { ROUTES } from '@routes/routes.contants';

const Drawer = ({ onClose, open }: IDrawer) => {
  const styles = useStyles();
  const navigate = useNavigate();

  const DRAWER_CONTENT = useMemo(
    () => [
      {
        leftSection: (
          <FaHome
            size={styles.drawerListItemIconSize}
            color={styles.drawerListItemIconColor}
          />
        ),
        bodyText: content.listItem_home_text,
        onClick: () => navigate(ROUTES.HOME),
      },
      {
        leftSection: (
          <FaIdBadge
            size={styles.drawerListItemIconSize}
            color={styles.drawerListItemIconColor}
          />
        ),
        bodyText: content.listItem_experience_text,
        onClick: () => navigate(ROUTES.EXPERIENCE),
      },
      {
        leftSection: (
          <FaIdCard
            size={styles.drawerListItemIconSize}
            color={styles.drawerListItemIconColor}
          />
        ),
        bodyText: content.listItem_contactMe_text,
        onClick: () => navigate(ROUTES.CONTACT_ME),
      },
    ],
    [styles, navigate]
  );

  const drawerHeader = useMemo(() => {
    return (
      <div css={styles.drawerHeader}>
        <img css={styles.drawerHeaderImg} src={judgementFreeZone} />
      </div>
    );
  }, [styles]);

  const drawerContent = useMemo(() => {
    return (
      <div css={styles.drawerBody}>
        {DRAWER_CONTENT.map((item: any, index: number) => (
          <>
            <ListItem
              leftSection={item.leftSection}
              bodyText={item.bodyText}
              onClick={() => {
                item.onClick();
                onClose();
              }}
              customStyles={styles.drawerListItem}
              key={`${item.bodyText}`}
            />
            {DRAWER_CONTENT.length !== index - 1 && (
              <div css={styles.drawerSeparator} />
            )}
          </>
        ))}
      </div>
    );
  }, [styles, onClose, DRAWER_CONTENT]);

  const drawerFooter = useMemo(() => {
    return (
      <div css={styles.drawerFooter}>
        <FaLinkedin
          size={styles.drawerIconSize}
          style={styles.drawerIcon}
          tabIndex={0}
        />
        <FaGithub
          tabIndex={0}
          size={styles.drawerIconSize}
          style={styles.drawerIcon}
        />
        <FaInstagram
          tabIndex={0}
          size={styles.drawerIconSize}
          style={styles.drawerIcon}
        />
      </div>
    );
  }, [styles]);

  return (
    <>
      <div
        css={[styles.drawerBackdrop, !open && styles.drawerBackdropClosed]}
        onClick={onClose}
      />
      <div
        css={[
          styles.drawerWrapper,
          open ? styles.drawerOpen : styles.drawerClosed,
        ]}
      >
        {open ? (
          <>
            {drawerHeader}
            {drawerContent}
            {drawerFooter}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

interface IDrawer {
  open: boolean;
  onClose: () => void;
}

export default Drawer;
