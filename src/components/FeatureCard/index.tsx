import { BulletPointList } from '../BulletPointList';

import { FeatureTypes } from '../../types/features';
import { useOnScreen } from '../../hooks/useOnScreen';

import classes from './styles.module.scss';

export const FeatureCard: React.FC<FeatureTypes> = ({
  illustration,
  bgColor = '#EFF1FF',
  bullets,
  title,
  subTitle,
}) => {
  const [visible, setRef] = useOnScreen({ threshold: 1 });

  if (visible) console.log('Feature Shown', title);

  return (
    <section className={classes.featureCardWrap} ref={setRef}>
      <div className={classes.illustrationWrap} style={{ backgroundColor: bgColor }}>
        <img src={illustration} alt="Feature illustration" />
      </div>
      <h1 className={classes.featureTitle}>{title}</h1>
      <h2 className={classes.featureSubTitle}>{subTitle}</h2>
      <BulletPointList
        list={bullets}
        textClassName={classes.bulletPointFeatureText}
        bulletClassName={classes.bulletPointFeature}
      />
    </section>
  );
};
