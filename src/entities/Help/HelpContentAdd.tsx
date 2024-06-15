import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Banana} from './img/Banana';
import {Apple} from './img/Apple';
import {AppText} from '@src/shared/ui/AppText';
import {TaskProps} from '@src/shared/types/task';

interface HelpProps {
  task: TaskProps;
}

export const HelpContentAdd = (props: HelpProps) => {
  const {task} = props;
  const Smile = () => (
    <Image source={require('../../shared/emojis/Smile.png')} style={styles.smile} />
  );

  // Задача на сложение с суммой больше 10
  if (task.ans > 10) {
    // Задача на сложение с суммой больше 10 первое число меньше 10
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
      // Задача на сложение с суммой больше 10 первое число > или = 10
      const addition = task.firstNum - 10;
      return (
        <>
          <AppText>Вычти из первого слогаемого 10, сложи со вторым и затем прибавь 10</AppText>
          <View style={styles.wrapContent}>
            <View style={styles.content}>
              <AppText size="l" style={styles.green}>
                {addition}
                {' + '}
                {task.secondNum}
                {' + '}
              </AppText>
              <AppText size="l" style={styles.red}>
                10
              </AppText>
            </View>
          </View>
        </>
      );
    }
  }

  // Задача на сложение до 10, поэтому рисуем фрукты
  const bananas = Array.from(Array(task.firstNum)).map((x, index) => (
    <Banana width={'10%'} key={index} />
  ));
  const apples = Array.from(Array(task.secondNum)).map((x, index) => (
    <Apple width={'10%'} key={index} />
  ));
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
};

const styles = StyleSheet.create({
  icons: {flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, width: '100%'},
  smile: {width: 24, height: 24},
  wrapContent: {flex: 1, justifyContent: 'center'},
  content: {flexDirection: 'row'},
  green: {color: 'green'},
  red: {color: 'red'},
});
