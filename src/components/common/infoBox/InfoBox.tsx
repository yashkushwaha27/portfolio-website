import { keyCodes } from '@constants/keyCodes';
import { useStyles } from './infoBox.styles';

const InfoBox = ({ data, placeholder, onClick, customStyles }: IInfoBox) => {
  const styles = useStyles();

  const clickacbleProps = onClick
    ? {
        role: 'button',
        tabIndex: 0,
        onClick,
        onKeyDown: (e: any) =>
          e.keyCode === keyCodes.enter && onClick && onClick(),
      }
    : {};

  const InfoBoxToRender = (props: any) => (
    <div css={[styles.ibWrapper, props?.customStyles]} {...props}>
      {data}
      <p css={styles.ibPlaceholder}>{placeholder}</p>
    </div>
  );

  if (onClick)
    return (
      <InfoBoxToRender
        customStyles={[styles.ibClickable, customStyles]}
        {...clickacbleProps}
      />
    );

  return <InfoBoxToRender customStyles={customStyles} />;
};

interface IInfoBox {
  data: string;
  placeholder: string;
  onClick?: () => void;
  customStyles?: IObject;
}

export default InfoBox;
