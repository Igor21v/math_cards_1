import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AppText} from '../../../shared/ui/AppText';
import {TaskProps} from '../ExercisePage';
import {Banana} from './img/Banana';
import {Apple} from './img/Apple';
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
