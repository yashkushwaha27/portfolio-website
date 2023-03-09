import { useMemo } from 'react';
import { content } from '@constants/content';
import { useStyles } from './experienceViewer.styles';
import { ExperienceInfo } from '@components/common';
import { useBreakpoints } from '@hooks/useBreakPoints';

const WORK_EXPERIENCE: IWorkExperience[] = [
  {
    timePeriod: 'May 2021 - Sept 2021',
    designation: 'Full-Stack Developer Intern',
    company: 'RapiPay Fintech Pvt. Ltd.',
    desctiption:
      'Worked on developing a cash management system. Used React JS to develop the web UI and React Native to develop an android applicaion Developed a middleware in Node JS.',
  },
  {
    timePeriod: 'Sept 2021 - Ongoing',
    designation: 'Software Developer',
    company: 'RapiPay Fintech Pvt. Ltd.',
    desctiption:
      'Worked on multiple projects ranging from creation of component library to setting up multi-frontend architecture (MFA) with direct involvement in creating widget based applications and server driven UI in ReactTs',
  },
];

const ExperienceViewer = () => {
  const styles = useStyles();
  const { isMobile } = useBreakpoints();

  const bodyToRender = useMemo(() => {
    return (
      <div css={styles.evBodyWrapper}>
        <div css={styles.evVerticalLine} />
        {WORK_EXPERIENCE.map((item: IWorkExperience, index: number) => (
          <>
            <ExperienceInfo
              key={item.timePeriod}
              data={item}
              sectionToRender={index % 2 === 0 ? 'left' : 'right'}
            />
            {index !== WORK_EXPERIENCE.length - 1 && isMobile && (
              <div css={styles.evVerticalLine} />
            )}
          </>
        ))}
      </div>
    );
  }, [styles, isMobile]);

  return (
    <div css={styles.evWrapper}>
      <h1 css={styles.evHeaderText}>{content.workExperience_headingText}</h1>
      {bodyToRender}
    </div>
  );
};

interface IWorkExperience {
  timePeriod: string;
  designation: string;
  company: string;
  desctiption: string;
}

export default ExperienceViewer;
