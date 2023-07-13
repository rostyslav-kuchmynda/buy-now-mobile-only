import classes from './styles.module.scss';

import AppleLogo from '../../images/icons/apple.svg';
import DesktopLogo from '../../images/icons/desktop.svg';

const DEVICES = [
  { name: 'iOS', img: AppleLogo, alt: 'Apple logo' },
  { name: 'macOS, Windows', img: DesktopLogo, alt: 'Desktop logo' },
];

export const DevicesInfo: React.FC = () => (
  <div className={classes.devicesWrap}>
    {DEVICES.map(({ name, img, alt }) => (
      <div className={classes.device} key={alt}>
        <img src={img} alt={alt} className={classes.deviceIcon} />
        <p>{name}</p>
      </div>
    ))}
  </div>
);
