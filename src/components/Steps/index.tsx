import { ExpandableItem } from '../ExpandableItem';

import classes from './styles.module.scss';

const STEPS = [
  { title: 'Install Clario', subTitle: 'Go to https://clario.co/' },
  { title: 'Set up your protection', subTitle: 'Just call 1-800-CLARIO' },
  { title: 'Enjoy spy-free life', subTitle: 'Relax and let Clario do the job.' },
];

export const Steps: React.FC = () => (
  <section className={classes.stepsWrap}>
    <div className={classes.stepsHeaderWrap}>
      <p className={classes.stepsHeader}>All you need to do</p>
      <p className={classes.stepsHeader}>
        is <span>3 easy steps</span>.
      </p>
    </div>
    <ul>
      {STEPS.map(({ title, subTitle }, idx) => (
        <ExpandableItem text={title} subTitle={subTitle} step={idx + 1} key={subTitle} />
      ))}
    </ul>
  </section>
);
