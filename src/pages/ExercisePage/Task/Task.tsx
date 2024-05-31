import React, {useRef} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';
import {AppText} from '../../../shared/ui/AppText';
import {TaskProps} from '../ExercisePage';

export interface Props {
  task: TaskProps;
  error: boolean;
  ans: string;
  animValue: Animated.Value;
}

export const Task = (props: Props) => {
  const {task, error, ans, animValue} = props;
  return (
    <Animated.View style={[styles.task, {transform: [{translateX: animValue}]}]}>
      <AppText size="l" error={error}>
        {task.firstNum}
        {task.operation}
        {task.secondNum}={ans}
      </AppText>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  task: {
    margin: 'auto',
  },
});
