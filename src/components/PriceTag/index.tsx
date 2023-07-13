import { useMemo } from 'react';

import { priceSplitter } from '../../utils';

import classes from './styles.module.scss';

export const PriceTag: React.FC<{ price: string }> = ({ price }) => {
  const [currency, bill, cents] = useMemo(() => priceSplitter(price), [price]);

  return (
    <div className={classes.priceTag}>
      <div className={classes.price}>
        <sup className={classes.currency}>{currency}</sup>
        <div className={classes.bill}>{bill}</div>
        <sup className={classes.cents}>{cents}</sup>
      </div>
      <p className={classes.perWeek}>/7 days</p>
    </div>
  );
};
