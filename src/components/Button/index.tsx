import { ButtonHTMLAttributes, MutableRefObject } from 'react';
import cc from 'classcat';

import classes from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string;
  label?: React.ReactNode;
  tabIndex?: number;
  setRef?: MutableRefObject<null | HTMLButtonElement>;
  ariaLabel?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  onClick,
  icon = null,
  setRef,
  tabIndex = 0,
  className = '',
  ariaLabel,
}) => (
  <button
    className={cc([classes.button, className])}
    onClick={onClick}
    disabled={disabled}
    ref={setRef}
    tabIndex={tabIndex}
    aria-label={ariaLabel}
  >
    {icon && <img src={icon} alt="Button icon" />}

    <span className={classes.label}>{label}</span>
  </button>
);
