import { Splide, SplideSlide } from '@splidejs/react-splide';

import { ReviewCard } from '../ReviewCard';

import { useCarouselWidth } from '../../hooks/useCarouselWidth';

import classes from './styles.module.scss';

import TrustPilotLogo from '../../images/icons/ReviewPlatforms/trustPilot.svg';
import GooglePlayLogo from '../../images/icons/ReviewPlatforms/googlePlay.svg';
import AppStoreLogo from '../../images/icons/ReviewPlatforms/appStore.svg';

const CUSTOMER_REVIEWS = [
  {
    platformIcon: TrustPilotLogo,
    review: 'Great service! They were an amazing help with making sure my device is secure.',
    name: 'Megan_N',
  },
  {
    platformIcon: GooglePlayLogo,
    review: `The best app you could find! I had a problem of malware which added unknown accounts to my device. The "Talk to experts" feature saved the day! I was helped in all possible ways.`,
    name: 'Shahu Sardar',
    color: { bgColor: '#EAF5E4', color: '#305938' },
  },
  {
    platformIcon: AppStoreLogo,
    review:
      'Great app! Cool thing with the data breaches - checked mine and my boyfriends emails and found 10! passwords we need to change',
    name: 'Zagkri',
    color: { bgColor: '#E6F2FE', color: '#1D367C' },
  },
];

export const Carousel: React.FC = () => {
  const width = useCarouselWidth(320, 480);

  return (
    <section className={classes.carouselWrap}>
      <h1 className={classes.carouselHeader}>Let’s hear what real Clario users say.</h1>
      <div id="splide-reviews" className={classes.carouselItemsContainer}>
        <Splide
          options={{
            type: 'loop',
            rewind: false,
            padding: '1.2rem',
            gap: '1.2rem',
            pagination: false,
            trimSpace: true,
            arrows: true,
            focus: 'center',
            perPage: 1,
            direction: 'ltr',
            width: `${width}px`,
            autoWidth: true,
            drag: false,
          }}
        >
          {CUSTOMER_REVIEWS.map(({ platformIcon, review, name, color }) => (
            <SplideSlide key={review}>
              <ReviewCard platformIcon={platformIcon} review={review} name={name} color={color} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};
