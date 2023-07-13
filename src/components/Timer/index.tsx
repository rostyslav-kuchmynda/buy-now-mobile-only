import { useState, useMemo, useRef, useEffect } from 'react';

import { minutesToSeconds, minutesAndSeconds } from '../../utils';

import classes from './styles.module.scss';

export const Timer: React.FC<{ minutes: number }> = ({ minutes }) => {
  const seconds = useMemo(() => minutesToSeconds(minutes), [minutes]);

  const [countDown, setCountDown] = useState(seconds);
  const timerRef = useRef<number>();

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setCountDown(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(timerRef.current);
    }
  }, [countDown]);

  const timeLeft = minutesAndSeconds(countDown);

  const minOrSec = useMemo(() => (Number(timeLeft.minutes) === 0 ? 'sec' : 'min'), [timeLeft.minutes]);

  if (countDown <= 0) return null;

  return (
    <div className={classes.timerBlock}>
      <p>Special offer valid for</p>
      <p>
        <span>
          {timeLeft.minutes}:{timeLeft.seconds}
        </span>
        {minOrSec}
      </p>
    </div>
  );
};
