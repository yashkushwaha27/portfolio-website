import { memo } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { contactMePicture } from '@assets/images';
import { content } from '@constants/content';
import { InfoBox } from '@components/common';
import { useStyles } from './contactMeForm.styles';
import { keyCodes } from '@constants/keyCodes';
import { useBreakpoints } from '@hooks/useBreakPoints';

const ContactMeForm = () => {
  const styles = useStyles();
  const { isMobile } = useBreakpoints();

  const onWhatsappClickHandler = () => window.open(content.whatsappLink);

  const onEmailClickHandler = () => window.open(content.emailLink);

  const onMobileNumberClickHandler = () => window.open(content.callMobileLink);

  const details = (
    <div css={styles.cmfDetailsWrapper}>
      <InfoBox
        placeholder="Name"
        data={content.name_text}
        customStyles={styles.cmfInfoWrapper}
      />
      <InfoBox
        placeholder="Mobile Number"
        data={content.mobileNumber_text}
        customStyles={styles.cmfInfoWrapper}
        onClick={onMobileNumberClickHandler}
      />
      <InfoBox
        placeholder="Email-ID"
        data={content.emailId_text}
        onClick={onEmailClickHandler}
      />
    </div>
  );

  const detailsMobile = (
    <div css={styles.cmfDetailsWrapper}>
      <InfoBox placeholder="Name" data={content.name_text} />
      <InfoBox
        placeholder="Mobile Number"
        data={content.mobileNumber_text}
        onClick={onMobileNumberClickHandler}
      />
      <InfoBox
        placeholder="Email-ID"
        data={content.emailId_text}
        customStyles={styles.cmfInfoWrapperMobile}
        onClick={onEmailClickHandler}
      />
    </div>
  );

  return (
    <div css={styles.cmfWrapper}>
      <h1 css={styles.cmfHeading}>{content.contactMe_heading_text}</h1>
      <img css={styles.cmfImage} src={contactMePicture} />
      <div css={styles.cmfDetailsContainer}>
        {isMobile ? detailsMobile : details}
        <div
          css={styles.cmfBtn}
          onClick={onWhatsappClickHandler}
          onKeyDown={(e: any) =>
            e.keyCode === keyCodes.enter && onWhatsappClickHandler()
          }
          tabIndex={0}
          role="button"
        >
          {content.contactMe_btnText}
          <FaWhatsapp style={styles.cmfIcon} />
        </div>
      </div>
    </div>
  );
};

export default memo(ContactMeForm);
