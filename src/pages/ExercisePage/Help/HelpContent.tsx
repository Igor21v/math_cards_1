import React from 'react';
import {TaskProps} from '../ExercisePage';
import {HelpContentAdd} from './HelpContentAdd';
import {HelpContentSubtract} from './HelpContentSubtract';

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
