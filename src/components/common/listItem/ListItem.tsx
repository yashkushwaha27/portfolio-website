import { keyCodes } from '@constants/keyCodes';
import { useStyles } from './listItem.styles';

const ListItem = ({
  bodyText,
  leftSection,
  onClick,
  customStyles,
}: IListItem) => {
  const styles = useStyles();

  const onKeyDownHandler = (e: any) => {
    if (onClick && e.keyCode === keyCodes.enter) onClick();
  };

  if (!onClick)
    return (
      <div css={[styles.liWrapper, customStyles]}>
        <div>{leftSection}</div>
        <div css={styles.liBody}>{bodyText}</div>
      </div>
    );

  return (
    <div
      role="button"
      onClick={onClick}
      onKeyDown={onKeyDownHandler}
      css={[styles.liWrapper, styles.liClickable, customStyles]}
      tabIndex={0}
    >
      <div>{leftSection}</div>
      <div css={styles.liBody}>{bodyText}</div>
    </div>
  );
};

interface IListItem {
  leftSection?: JSX.Element;
  bodyText: string;
  onClick?: () => void;
  customStyles?: IObject;
}

export default ListItem;
