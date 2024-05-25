import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AppText} from '../../../shared/ui/AppText';
import {TaskProps} from '../ExercisePage';
import {Banana} from './img/Banana';
import {Apple} from './img/Apple';

interface HelpProps {
  task: TaskProps;
}

export const HelpContent = (props: HelpProps) => {
  const {task} = props;
  const maxNum = Math.max(task.ans, task.firstNum, task.secondNum);
  if (maxNum > 10) {
    return <AppText>Здесь про дополнение чисел до 10</AppText>;
  }

  // Задача простая, поэтому рисуем фрукты
  const bananas = Array.from(Array(task.firstNum)).map((x, index) => <Banana width={'10%'} key={index} />);
  const apples = Array.from(Array(task.secondNum)).map((x, index) => <Apple width={'10%'} key={index} />);

  return (
    <>
      <AppText>Посчитай сколько всего фруктов и получишь ответ :)</AppText>
      <View style={styles.icons}>
        {bananas}
        {apples}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  icons: {flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, width: '100%'},
});
