import React from 'react';

import {HelpContentAdd} from './HelpContentAdd';
import {HelpContentSubtract} from './HelpContentSubtract';
import {TaskProps} from '@/shared/types/task';

interface HelpProps {
  task: TaskProps;
}

export const HelpContent = (props: HelpProps) => {
  const {task} = props;

  if (task.operation === '+') {
    return <HelpContentAdd task={task} />;
  }
  return <HelpContentSubtract task={task} />;
};
