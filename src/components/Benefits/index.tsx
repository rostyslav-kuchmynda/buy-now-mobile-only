import { BulletPoint } from '../BulletPoint';

import classes from './styles.module.scss';

import PhoneIcon from '../../images/icons/Benefits/phone.svg';
import CheckupIcon from '../../images/icons/Benefits/checkup.svg';
import ChatIcon from '../../images/icons/Benefits/chat.svg';
import UnlimitedIcon from '../../images/icons/Benefits/unlimited.svg';

const BENEFITS = [
  { icon: PhoneIcon, desc: 'Protection for 3 devices' },
  { icon: CheckupIcon, desc: 'Anti-spy checkup' },
  { icon: UnlimitedIcon, desc: 'Unlimited access to anti-spying tools' },
  { icon: ChatIcon, desc: '24/7 help from security experts' },
];

export const Benefits = () => (
  <div className={classes.benefitsWrap}>
    <h2 className={classes.whatYouGet}>What you get:</h2>
    <ul>
      {BENEFITS.map(({ icon, desc }) => (
        <BulletPoint
          key={desc}
          text={desc}
          icon={icon}
          textClassName={classes.bulletPointBenefitsText}
          bulletClassName={classes.bulletPointBenefits}
        />
      ))}
    </ul>
  </div>
);
