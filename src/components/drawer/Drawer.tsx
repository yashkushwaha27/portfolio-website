import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaGithub, FaIdCard } from 'react-icons/fa';
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
          <FaIdCard
            size={styles.drawerListItemIconSize}
            color={styles.drawerListItemIconColor}
          />
        ),
        bodyText: content.listItem_contactMe_text,
        onClick: () => navigate(ROUTES.CONTACT_ME),
      },
    ],
    [styles]
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
        {DRAWER_CONTENT.map((item: any) => (
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
        ))}
      </div>
    );
  }, [styles]);

  const drawerFooter = useMemo(() => {
    return (
      <div css={styles.drawerFooter}>
        <FaLinkedin
          size={styles.drawerIconSize}
          color={styles.drawerIconColor}
          tabIndex={0}
        />
        <FaGithub
          tabIndex={0}
          size={styles.drawerIconSize}
          color={styles.drawerIconColor}
        />
        <FaInstagram
          tabIndex={0}
          size={styles.drawerIconSize}
          color={styles.drawerIconColor}
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
