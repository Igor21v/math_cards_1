import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Apple} from './img/Apple';
import {AppText} from '@src/shared/ui/AppText';
import {TaskProps} from '@src/shared/types/task';

interface HelpProps {
  task: TaskProps;
}

export const HelpContentSubtract = (props: HelpProps) => {
  const {task} = props;
  const Smile = () => (
    <Image source={require('../../shared/emojis/Smile.png')} style={styles.smile} />
  );

  // Задача на вычитание из числа больше 10
  if (task.firstNum > 10 && task.operation === '-') {
    if (task.ans < 10) {
      // Задача на вычитание из числа больше 10 с ответом < 10
      const addition = task.firstNum - 10;
      return (
        <>
          <AppText>
            Вычти из числа {task.firstNum} число {addition}, получишь 10. А затем вычти то что
            осталось.
          </AppText>
          <View style={styles.wrapContent}>
            <View style={styles.content}>
              <AppText size="l" style={styles.green}>
                {task.firstNum}
                {' - '}
              </AppText>
              <AppText size="l" style={styles.red}>
                {addition} - {task.secondNum - addition}
              </AppText>
            </View>
          </View>
        </>
      );
    } else {
      // Задача на вычитание из числа больше 10 с ответом >= 10
      return (
        <>
          <AppText>Вычти из первого числа 10, отними второе и затем прибавь 10</AppText>
          <View style={styles.wrapContent}>
            <View style={styles.content}>
              <AppText size="l" style={styles.green}>
                {task.firstNum}
                {' - 10 - '}
              </AppText>
              <AppText size="l" style={styles.red}>
                {task.secondNum}
                {' + 10'}
              </AppText>
            </View>
          </View>
        </>
      );
    }
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
