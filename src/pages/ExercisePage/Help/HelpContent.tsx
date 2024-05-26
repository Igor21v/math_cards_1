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
  const Smile = () => <Image source={require('../../../shared/emojis/Smile.png')} style={styles.smile} />;

  // Задача на сложение с суммой больше 10
  if (task.ans > 10 && task.operation === 'add') {
    if (task.firstNum < 10) {
      const addition = 10 - task.firstNum;
      return (
        <>
          <AppText>Дополни число {task.firstNum} до 10ти и прибавь то что осталось</AppText>
          <View style={styles.wrapContent}>
            <View style={styles.content}>
              <AppText size="l" style={styles.green}>
                {task.firstNum}
                {' + '}
              </AppText>
              <AppText size="l" style={styles.red}>
                {addition} + {task.secondNum - addition}
              </AppText>
            </View>
          </View>
        </>
      );
    } else {
      return (
        <>
          <AppText>Сделай что то сам уже</AppText>
          <AppText size="l"></AppText>
        </>
      );
    }
  }

  // Задача на вычитание из числа больше 10
  if (task.firstNum > 10 && task.operation === 'add') {
    return <AppText>Здесь про вычитание чисел из числа больше 10ти</AppText>;
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
  smile: {width: 24, height: 24},
  wrapContent: {flex: 1, justifyContent: 'center'},
  content: {flexDirection: 'row'},
  green: {color: 'green'},
  red: {color: 'red'},
});
