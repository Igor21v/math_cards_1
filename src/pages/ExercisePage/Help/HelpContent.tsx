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
  const Smile = () => <Image source={require('../../../shared/emojis/Smile.png')} style={styles.smile} />;
  if (maxNum > 10) {
    return <AppText>Здесь про дополнение чисел до 10</AppText>;
  }

  // Задача на сложение до 10, поэтому рисуем фрукты
  if (task.operation === 'add') {
    const bananas = Array.from(Array(task.firstNum)).map((x, index) => <Banana width={'10%'} key={index} />);
    const apples = Array.from(Array(task.secondNum)).map((x, index) => <Apple width={'10%'} key={index} />);
    return (
      <>
        <AppText>
          Посчитай сколько всего фруктов и получишь ответ <Smile />{' '}
        </AppText>

        <View style={styles.icons}>
          {bananas}
          {apples}
        </View>
      </>
    );
  }

  // Задача на вычитание до 10, рисуем только яблоки
  const apples = Array.from(Array(task.firstNum)).map((x, index) => {
    const opacity = index >= task.ans ? 0.3 : 1;
    return <Apple width={'10%'} key={index} opacity={opacity} />;
  });
  return (
    <>
      <AppText>
        Посчитай сколько осталось ярких яблок и получишь ответ <Smile />{' '}
      </AppText>
      <View style={styles.icons}>{apples}</View>
    </>
  );
};

const styles = StyleSheet.create({
  icons: {flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, width: '100%'},
  text: {},
  smile: {width: 24, height: 24},
});
