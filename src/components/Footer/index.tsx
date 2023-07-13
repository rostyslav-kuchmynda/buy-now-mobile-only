import { useMemo } from 'react';

import classes from './styles.module.scss';

import ClarioFooterLogo from '../../images/illustrations/Clario.svg';

export const Footer: React.FC = () => {
  const getYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className={classes.footerWrap}>
      <img src={ClarioFooterLogo} alt="Clario logo footer" />
      <p>© {getYear} Clario Tech DMCC</p>
      <p>All rights reserved.</p>
    </div>
  );
};
