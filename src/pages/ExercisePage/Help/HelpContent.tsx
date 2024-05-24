import React from 'react';
import {StyleSheet} from 'react-native';
import {AppText} from '../../../shared/ui/AppText';
import {TaskProps} from '../ExercisePage';

interface HelpProps {
  task: TaskProps;
}

export const HelpContent = (props: HelpProps) => {
  const {task} = props;
  return <AppText style={styles.text}>Здесь будет объяснение что к чему</AppText>;
};

const styles = StyleSheet.create({
  text: {},
});
