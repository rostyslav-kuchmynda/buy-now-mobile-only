import cc from 'classcat';

import classes from './styles.module.scss';

export const BulletPoint: React.FC<{
  icon?: string;
  text: string;
  textClassName?: string;
  bulletClassName?: string;
}> = ({ icon, text, textClassName, bulletClassName }) => (
  <li className={cc([classes.bulletPointWrap, bulletClassName])} key={text}>
    {icon && <img src={icon} alt="Bullet point icon" />}
    <p className={textClassName}>{text}</p>
  </li>
);
