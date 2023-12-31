import cc from 'classcat';

import { BulletPointTypes } from '../../types';

import classes from './styles.module.scss';

export const BulletPoint: React.FC<BulletPointTypes> = ({ icon, text, textClassName, bulletClassName }) => (
  <li className={cc([classes.bulletPointWrap, bulletClassName])} key={text}>
    {icon && <img src={icon} alt="Bullet point icon" />}
    <p className={textClassName}>{text}</p>
  </li>
);
