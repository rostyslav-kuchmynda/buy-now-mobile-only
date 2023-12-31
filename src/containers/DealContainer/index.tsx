import { useRef, forwardRef, useImperativeHandle } from 'react';
import { PriceTag } from '../../components/PriceTag';
import { Timer } from '../../components/Timer';
import { Benefits } from '../../components/Benefits';
import { Button } from '../../components/Button';
import { BulletPointList } from '../../components/BulletPointList';

import { RefHandler } from '../../types';

import classes from './styles.module.scss';

import DealIll from '../../images/illustrations/Deal/Deal.svg';
import MoneyBackIcon from '../../images/icons/RefundPolicy/MoneyBack.svg';
import DownloadsIcon from '../../images/icons/RefundPolicy/Downloads.svg';

const GUARANTEES = [
  { icon: MoneyBackIcon, text: '30-day money-back guarantee' },
  { icon: DownloadsIcon, text: '100.000 + downloads' },
];

const PRICE = '$2.99';
const MINUTES = 30;

const WARNING_INFO = `By clicking above, you agree to try 7 days of Clario for ${PRICE} as a special offer. Your subscription will renew for $39.9/month every 2 months. Cancel anytime or manage your subscription in your Clario account.`;

export const DealContainer = forwardRef<RefHandler>((_, ref) => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subscriptionRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => ({
    headingRef: headingRef.current && headingRef.current,
    subscriptionRef: subscriptionRef.current && subscriptionRef.current,
  }));

  return (
    <section className={classes.dealContainerWrap}>
      <img src={DealIll} alt="Deal illustration" />
      <div className={classes.dealContainer}>
        <h2 ref={headingRef} className={classes.dealContainerHeading}>
          Start your spy-free week for as low as
        </h2>
        <div ref={subscriptionRef} className={classes.subscriptionPlan}>
          <Timer minutes={MINUTES} />
          <PriceTag price={PRICE} />
          <Benefits />
          <div className={classes.getPlanSection}>
            <Button label={`Try for ${PRICE}`} className={classes.getPlanBtn} />
            <p className={classes.warningInfo}>{WARNING_INFO}</p>
            <BulletPointList
              list={GUARANTEES}
              textClassName={classes.bulletPointGuaranteesText}
              bulletClassName={classes.bulletPointGuarantees}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
