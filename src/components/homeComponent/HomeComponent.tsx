import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ReactTyped from 'react-typed';
import { content, particlesConfig2 } from '@constants/index';
import { hiBitmoji } from '@assets/images';
import { useStyles } from './homeComponent.styles';

const HomeComponent = () => {
  const styles = useStyles();

  const particlesInit = useCallback(
    async (engine: any) => await loadFull(engine),
    []
  );

  const information = useMemo(() => {
    return (
      <div css={styles.hcInformationWrapper}>
        <img src={hiBitmoji} css={styles.hcHiImg} />
        <ReactTyped
          css={[styles.hcText, styles.hcNameText]}
          strings={[content.name_text]}
          typeSpeed={40}
        />
        <ReactTyped
          css={[styles.hcText, styles.hcSKillsText]}
          strings={content.skills_text}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <ReactTyped
          css={[styles.hcText, styles.hcDescriptionText]}
          strings={[content.descriptionString_text]}
          typeSpeed={20}
        />
      </div>
    );
  }, [styles, hiBitmoji]);

  return (
    <>
      <Particles
        id="particles"
        options={particlesConfig2}
        init={particlesInit}
        css={styles.hcParticles}
      />
      {information}
    </>
  );
};

export default HomeComponent;
