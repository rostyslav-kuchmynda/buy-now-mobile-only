import { useEffect } from 'react';
import cc from 'classcat';

import { Button } from '../Button';

import { useTypedDispatch } from '../../hooks/storeHooks';
import { useOnScreen } from '../../hooks/useOnScreen';
import { uiIsButtonVisible } from '../../store';

import classes from './styles.module.scss';

type InfoContainerType = {
  classIdx?: number;
  buttonClassName?: string;
  infoContainerClassName?: string;
  subTitle?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

const blockText = ['Stop your', 'phone from', 'being spied on'];

const TextBlock: React.FC<{ text: string; className?: string }> = ({ text, className }) => (
  <span className={className}>{text}</span>
);

export const InfoContainer: React.FC<InfoContainerType> = ({
  classIdx = 0,
  buttonClassName,
  infoContainerClassName,
  children,
  subTitle = false,
  onClick,
}) => {
  const dispatch = useTypedDispatch();

  const [visible, setRef] = useOnScreen({
    rootMargin: '-64px 0px 0px 0px',
  });

  useEffect(() => {
    dispatch(uiIsButtonVisible(visible && subTitle));
  }, [dispatch, visible, subTitle]);

  return (
    <section className={cc([classes.infoContainerWrap, infoContainerClassName])}>
      <div className={classes.infoTextWrap}>
        <h1 className={classes.infoHeader}>
          {blockText.map((text, inx) => (
            <TextBlock key={text} text={text} className={inx === classIdx ? classes.darken : ''} />
          ))}
        </h1>
        {subTitle && <h2>Try Clario, a smart anti-spy app that effectively protects your privacy.</h2>}
      </div>
      <Button
        setRef={setRef}
        label="Protect me now"
        className={cc([classes.infoContainerBtn, buttonClassName])}
        onClick={() => onClick && onClick()}
      />
      {children}
    </section>
  );
};
