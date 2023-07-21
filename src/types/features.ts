export type FeatureTypes = {
  illustration: string;
  bgColor: string;
  title: string;
  subTitle: string;
  bullets: Array<BulletPointTypes>;
};

export type BulletPointTypes = {
  icon?: string;
  text: string;
  textClassName?: string;
  bulletClassName?: string;
};

export type BulletPointListTypes = {
  list: Array<BulletPointTypes>;
  textClassName?: string;
  bulletClassName?: string;
  defaultIcon?: boolean;
};

export type RefHandler = {
  headingRef: HTMLHeadingElement | null;
  subscriptionRef: HTMLDivElement | null;
};
