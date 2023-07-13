import cc from 'classcat';
import { Button } from '../Button';

import { useTypedSelector } from '../../hooks/storeHooks';
import { getIsButtonVisible } from '../../store';

import classes from './styles.module.scss';

import Main_logo from '../../images/illustrations/Clario.svg';

export const Header: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const isButtonVisible = useTypedSelector(getIsButtonVisible);

  return (
    <header className={cc([classes.header, { [classes.headerWithButton]: isButtonVisible }])}>
      <img src={Main_logo} alt="Clario logo" />
      <Button
        onClick={onClick}
        label="Protect me now"
        className={cc([classes.headerButton, { [classes.headerButtonVisible]: !isButtonVisible }])}
      />
    </header>
  );
};
