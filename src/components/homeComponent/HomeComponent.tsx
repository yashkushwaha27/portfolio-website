import { useCallback, useMemo, useState } from 'react';
import { default as Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ReactTyped from 'react-typed';
import { content, particlesConfig2 } from '@constants/index';
import { hiBitmoji } from '@assets/images';
import { useStyles } from './homeComponent.styles';

const HomeComponent = () => {
  const styles = useStyles();
  const [renderText, setRenderText] = useState(false);

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
          onComplete={() => setRenderText(true)}
        />
        {renderText && (
          <ReactTyped
            css={[styles.hcText, styles.hcSKillsText]}
            strings={content.skills_text}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        )}
        {renderText && (
          <ReactTyped
            css={[styles.hcText, styles.hcDescriptionText]}
            strings={[content.descriptionString_text]}
            typeSpeed={20}
          />
        )}
      </div>
    );
  }, [styles, renderText]);

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
