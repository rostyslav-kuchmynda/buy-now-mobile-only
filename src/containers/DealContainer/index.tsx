import { forwardRef } from 'react';
import { Timer } from '../../components/Timer';
import { PriceTag } from '../../components/PriceTag';
import { Benefits } from '../../components/Benefits';
import { Button } from '../../components/Button';
import { BulletPoint } from '../../components/BulletPoint';

import classes from './styles.module.scss';

import DealIll from '../../images/illustrations/Deal/Deal.svg';
import MoneyBackIcon from '../../images/icons/RefundPolicy/MoneyBack.svg';
import DownloadsIcon from '../../images/icons/RefundPolicy/Downloads.svg';

const GUARANTEES = [
  { icon: MoneyBackIcon, desc: '30-day money-back guarantee' },
  { icon: DownloadsIcon, desc: '100.000 + downloads' },
];

const PRICE = '$2.99';
const MINUTES = 30;

const WARNING_INFO = `By clicking above, you agree to try 7 days of Clario for ${PRICE} as a special offer. Your subscription will renew for $39.9/month every 2 months. Cancel anytime or manage your subscription in your Clario account.`;

export const DealContainer = forwardRef<HTMLDivElement>((_, ref) => (
  <section className={classes.dealContainerWrap}>
    <img src={DealIll} alt="Deal illustration" />
    <div className={classes.dealContainer}>
      <h2 ref={ref} className={classes.dealContainerHeading}>
        Start your spy-free week for as low as
      </h2>
      <div className={classes.subscriptionPlan}>
        <Timer minutes={MINUTES} />
        <PriceTag price={PRICE} />
        <Benefits />
        <div className={classes.getPlanSection}>
          <Button label={`Try for ${PRICE}`} className={classes.getPlanBtn} />
          <p className={classes.warningInfo}>{WARNING_INFO}</p>
          <ul>
            {GUARANTEES.map(({ icon, desc }) => (
              <BulletPoint
                key={desc}
                text={desc}
                icon={icon}
                textClassName={classes.bulletPointGuaranteesText}
                bulletClassName={classes.bulletPointGuarantees}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
));
