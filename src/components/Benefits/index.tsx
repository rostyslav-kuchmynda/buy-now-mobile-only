import { BulletPointList } from '../BulletPointList';

import classes from './styles.module.scss';

import PhoneIcon from '../../images/icons/Benefits/phone.svg';
import CheckupIcon from '../../images/icons/Benefits/checkup.svg';
import ChatIcon from '../../images/icons/Benefits/chat.svg';
import UnlimitedIcon from '../../images/icons/Benefits/unlimited.svg';

const BENEFITS = [
  { icon: PhoneIcon, text: 'Protection for 3 devices' },
  { icon: CheckupIcon, text: 'Anti-spy checkup' },
  { icon: UnlimitedIcon, text: 'Unlimited access to anti-spying tools' },
  { icon: ChatIcon, text: '24/7 help from security experts' },
];

export const Benefits = () => (
  <div className={classes.benefitsWrap}>
    <h2 className={classes.whatYouGet}>What you get:</h2>
    <BulletPointList
      list={BENEFITS}
      textClassName={classes.bulletPointBenefitsText}
      bulletClassName={classes.bulletPointBenefits}
    />
  </div>
);
