import classes from './styles.module.scss';

type ReviewCardTypes = {
  platformIcon: string;
  review: string;
  name: string;
  color?: { bgColor: string; color: string };
};

export const ReviewCard: React.FC<ReviewCardTypes> = ({
  platformIcon,
  review,
  name,
  color: { bgColor, color } = {},
}) => (
  <section className={classes.reviewCardWrap} style={{ backgroundColor: bgColor, color: color }}>
    <div className={classes.reviewCardContent}>
      <img src={platformIcon} alt="Trust pilot icon" className={classes.platformLogo} />
      <p className={classes.review}>{review}</p>
    </div>
    <p className={classes.reviewerName}>{name}</p>
  </section>
);
