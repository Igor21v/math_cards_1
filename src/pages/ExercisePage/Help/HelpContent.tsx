import React from 'react';
import {StyleSheet} from 'react-native';
import {AppText} from '../../../shared/ui/AppText';
import {TaskProps} from '../ExercisePage';

interface HelpProps {
  task: TaskProps;
}

export const HelpContent = (props: HelpProps) => {
  const {task} = props;
  const maxNum = Math.max(task.ans, task.firstNum, task.secondNum);
  if (maxNum > 10) {
    return <AppText style={styles.text}>Здесь про дополнение чисел до 10</AppText>;
  }
  return <AppText style={styles.text}>Здесь будет картинка с фигурами</AppText>;
};

const styles = StyleSheet.create({
  text: {},
});
