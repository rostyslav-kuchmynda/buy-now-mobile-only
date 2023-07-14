import { BulletPoint } from '../BulletPoint';

import { BulletPointListTypes } from '../../types';

import CheckMarkIcon from '../../images/icons/checkMark.svg';

export const BulletPointList: React.FC<BulletPointListTypes> = ({
  list,
  defaultIcon,
  textClassName,
  bulletClassName,
}) => (
  <ul>
    {list.map(({ icon, text }) => (
      <BulletPoint
        key={text}
        text={text}
        icon={defaultIcon ? CheckMarkIcon : icon}
        textClassName={textClassName}
        bulletClassName={bulletClassName}
      />
    ))}
  </ul>
);
