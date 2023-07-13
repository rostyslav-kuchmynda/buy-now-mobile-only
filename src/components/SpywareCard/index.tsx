import { BulletPoint } from '../BulletPoint';

import classes from './styles.module.scss';

import CheckMarkIcon from '../../images/icons/checkMark.svg';

import DogVideo from '../../images/video/dog_video.mp4';

const CAPABILITIES = [
  { text: 'reveal hidden spying apps' },
  { text: 'stop silent location tracking' },
  { text: 'avoid social media hacks' },
  { text: 'provide 24/7 expert security help' },
];

export const SpywareCard: React.FC = () => (
  <section className={classes.spywareCardWrap}>
    <div className={classes.videoWrap}>
      <video src={DogVideo} autoPlay loop muted />
    </div>
    <h1 className={classes.spywareCardWrapTitle}>The anti-spy Clario app can:</h1>
    <ul>
      {CAPABILITIES.map(({ text }) => (
        <BulletPoint key={text} text={text} icon={CheckMarkIcon} />
      ))}
    </ul>
  </section>
);
