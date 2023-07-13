import { useState } from 'react';
import cc from 'classcat';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import classes from './styles.module.scss';

import { ReactComponent as ExpandIcon } from '../../images/icons/expandArrow.svg';

export const ExpandableItem: React.FC<{
  text: string;
  subTitle: string;
  textClassName?: string;
  expandableItemClassName?: string;
  step: number;
}> = ({ text, textClassName, expandableItemClassName, step, subTitle }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <li
      className={cc([classes.expandableItemWrap, expandableItemClassName])}
      key={text}
      onClick={() => setExpanded(prev => !prev)}
    >
      <Accordion className={classes.resetStylesMU} expanded={expanded}>
        <AccordionSummary
          area-aria-controls="content"
          expandIcon={<ExpandIcon className={cc([{ [classes.expandedFill]: expanded }])} />}
        >
          <div className={classes.itemStepContent}>
            <div className={cc([classes.itemStep, { [classes.expandedBackground]: expanded }])}>{step}</div>
            <p className={cc([textClassName, { [classes.expandedColor]: expanded }])}>{text}</p>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.fakeItem}></AccordionDetails>
        <AccordionDetails>{subTitle}</AccordionDetails>
      </Accordion>
    </li>
  );
};
