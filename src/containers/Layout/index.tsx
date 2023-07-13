import { useCallback, useRef } from 'react';

import { FeaturesContainer } from '../../containers/FeaturesContainer';
import { DealContainer } from '../../containers/DealContainer';
import { Header } from '../../components/Header';
import { InfoContainer } from '../../components/InfoContainer';
import { DevicesInfo } from '../../components/Devices';
import { SpywareCard } from '../../components/SpywareCard';
import { Steps } from '../../components/Steps';
import { Footer } from '../../components/Footer';
import { Carousel } from '../../components/Carousel';

import { getTotalProtectMeBtnClicks, uiProtectionButtonClick } from '../../store';
import { useTypedDispatch, useTypedSelector } from '../../hooks/storeHooks';

import classes from './styles.module.scss';

export const Layout: React.FC = () => {
  const dispatch = useTypedDispatch();
  const totalClicks = useTypedSelector(getTotalProtectMeBtnClicks);

  const ref = useRef<null | HTMLDivElement>(null);

  const handleScrollToPrice = useCallback(() => {
    dispatch(uiProtectionButtonClick(1));
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [dispatch]);

  console.log('Scroll To Price: ', totalClicks);

  return (
    <div className={classes.layoutBody}>
      <Header onClick={handleScrollToPrice} />

      <InfoContainer subTitle onClick={handleScrollToPrice}>
        <DevicesInfo />
        <SpywareCard />
      </InfoContainer>

      <FeaturesContainer />

      <Steps />
      <DealContainer ref={ref} />
      <Carousel />

      <InfoContainer
        onClick={handleScrollToPrice}
        buttonClassName={classes.footerBtnSpacing}
        infoContainerClassName={classes.footerContainerSpacing}
      >
        <Footer />
      </InfoContainer>
    </div>
  );
};
