import { useCallback, useEffect, useRef } from 'react';

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
import { useOnScreen } from '../../hooks/useOnScreen';
import { RefHandler } from '../../types';

import classes from './styles.module.scss';

export const Layout: React.FC = () => {
  const dispatch = useTypedDispatch();
  const totalClicks = useTypedSelector(getTotalProtectMeBtnClicks);

  const [visible, setRef] = useOnScreen({ threshold: 1, rootMargin: '-64px 0px 0px 0px' });

  const childrenRefs = useRef<RefHandler>(null);

  useEffect(() => {
    if (childrenRefs.current?.subscriptionRef) setRef(childrenRefs.current?.subscriptionRef);
  }, [setRef]);

  const handleScrollToPrice = useCallback(() => {
    if (visible) return;
    dispatch(uiProtectionButtonClick(1));
    childrenRefs.current?.headingRef?.scrollIntoView({ behavior: 'smooth' });
  }, [dispatch, visible]);

  useEffect(() => {
    if (totalClicks) console.log('Scroll To Price: ', totalClicks);
  }, [totalClicks]);

  return (
    <div className={classes.layoutBody}>
      <Header onClick={handleScrollToPrice} />

      <InfoContainer subTitle onClick={handleScrollToPrice}>
        <DevicesInfo />
        <SpywareCard />
      </InfoContainer>

      <FeaturesContainer />

      <Steps />
      <DealContainer ref={childrenRefs} />
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
