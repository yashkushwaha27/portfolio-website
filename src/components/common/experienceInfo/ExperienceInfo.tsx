import { useMemo } from 'react';
import { useStyles } from './experienceInfo.styles';
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import { useBreakpoints } from '@hooks/useBreakPoints';

const ExperienceInfo = ({ data, sectionToRender }: IExperienceInfo) => {
  const styles = useStyles(sectionToRender);
  const { isMobile } = useBreakpoints();

  const { timePeriod, company, desctiption, designation } = data;

  const headingToRender = useMemo(() => {
    return (
      <div css={styles.eiHeaderWrapper}>
        <h3>{timePeriod}</h3>
      </div>
    );
  }, [styles, timePeriod]);

  const dataToRender = useMemo(() => {
    return (
      <div css={styles.eiDataContainer}>
        {sectionToRender === 'right' && !isMobile && (
          <div css={styles.eiArrowIcons}>
            <FaCaretLeft size={60} />
          </div>
        )}
        <div css={styles.eiDataWrapper}>
          <text css={styles.eiDataHeading}>{designation}</text>
          <text css={styles.eiDataCompany}>{company}</text>
          <text css={styles.eiDataDescription}>{desctiption}</text>
        </div>
        {sectionToRender === 'left' && !isMobile && (
          <div css={styles.eiArrowIcons}>
            <FaCaretRight size={60} />
          </div>
        )}
      </div>
    );
  }, [styles, company, desctiption, designation, isMobile, sectionToRender]);

  const leftSectionToRender = useMemo(() => {
    return (
      <div css={[styles.eiSectionsWrapper, styles.eiLeftSection]}>
        {dataToRender}
      </div>
    );
  }, [styles, dataToRender]);

  const rightSectionToRender = useMemo(() => {
    return (
      <div css={[styles.eiSectionsWrapper, styles.eiRightSection]}>
        {dataToRender}
      </div>
    );
  }, [styles, dataToRender]);

  return (
    <div css={styles.eiWrapper}>
      {headingToRender}
      <div css={styles.eiBodyWrapper}>
        {sectionToRender === 'left' && leftSectionToRender}
        {sectionToRender === 'right' && rightSectionToRender}
      </div>
    </div>
  );
};

interface IExperienceInfo {
  data: {
    timePeriod: string;
    designation: string;
    company: string;
    desctiption: string;
  };
  sectionToRender: 'left' | 'right';
}

export default ExperienceInfo;
