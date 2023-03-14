import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaIdCard,
  // FaIdBadge,
  FaHome,
  FaCodeBranch,
  // FaCode,
  // FaRegLightbulb,
} from 'react-icons/fa';
import { judgementFreeZone } from '@assets/images';
import { useStyles } from './drawer.styles';
import { ListItem } from '@components/common';
import { content } from '@constants/content';
import { ROUTES } from '@routes/routes.contants';
import { keyCodes } from '@constants/keyCodes';

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
      // {
      //   leftSection: (
      //     <FaIdBadge
      //       size={styles.drawerListItemIconSize}
      //       color={styles.drawerListItemIconColor}
      //     />
      //   ),
      //   bodyText: content.listItem_resume_text,
      //   onClick: () => navigate('#'),
      // },
      {
        leftSection: (
          <FaCodeBranch
            size={styles.drawerListItemIconSize}
            color={styles.drawerListItemIconColor}
          />
        ),
        bodyText: content.listItem_experience_text,
        onClick: () => navigate(ROUTES.EXPERIENCE),
      },
      // {
      //   leftSection: (
      //     <FaCode
      //       size={styles.drawerListItemIconSize}
      //       color={styles.drawerListItemIconColor}
      //     />
      //   ),
      //   bodyText: content.listItem_skills_text,
      //   onClick: () => navigate('#'),
      // },
      // {
      //   leftSection: (
      //     <FaRegLightbulb
      //       size={styles.drawerListItemIconSize}
      //       color={styles.drawerListItemIconColor}
      //     />
      //   ),
      //   bodyText: content.listItem_hobbies_text,
      //   onClick: () => navigate('#'),
      // },
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
            {DRAWER_CONTENT.length - 1 !== index && (
              <div css={styles.drawerSeparator} />
            )}
          </>
        ))}
      </div>
    );
  }, [styles, onClose, DRAWER_CONTENT]);

  const drawerFooter = useMemo(() => {
    /**
     * Method to handle linkedIn icon click
     */
    const onLinkedInClickHandler = () =>
      window.open(content.drawer_linkedInLink, '__blank');

    /**
     * Method to handle github icon click
     */
    const onGithubClickHandler = () =>
      window.open(content.drawer_githubLink, '__blank');

    /**
     * Method to handle instagram icon click
     */
    const onInstagramClickHandler = () =>
      window.open(content.drawer_instagramLink, '__blank');

    return (
      <div css={styles.drawerFooter}>
        <FaLinkedin
          size={styles.drawerIconSize}
          style={styles.drawerIcon}
          tabIndex={0}
          onClick={onLinkedInClickHandler}
          onKeyDown={(e: any) =>
            e.keyCode === keyCodes.enter && onLinkedInClickHandler()
          }
          role="button"
        />
        <FaGithub
          tabIndex={0}
          size={styles.drawerIconSize}
          style={styles.drawerIcon}
          onClick={onGithubClickHandler}
          onKeyDown={(e: any) =>
            e.keyCode === keyCodes.enter && onGithubClickHandler()
          }
          role="button"
        />
        <FaInstagram
          tabIndex={0}
          size={styles.drawerIconSize}
          style={styles.drawerIcon}
          onClick={onInstagramClickHandler}
          onKeyDown={(e: any) =>
            e.keyCode === keyCodes.enter && onInstagramClickHandler()
          }
          role="button"
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
