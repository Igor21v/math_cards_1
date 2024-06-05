import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TaskProps} from '../ExercisePage';
import {AppText} from '../../../shared/ui/AppText';
import {AppButton} from '../../../shared/ui/AppButton';

interface Props {
  errors: TaskProps[];
  errorCount: number;
}

export const Results = (props: Props) => {
  const {errors, errorCount} = props;

  return (
    <>
      <AppText>Урок пройден.</AppText>
      <AppText>Неправильных ответов: {errorCount}</AppText>
      <AppText>Ты допустил ошибки в следующих примерах:</AppText>
      {errors.map((item, index) => (
        <AppText key={index}>
          {`${item.firstNum} ${item.operation} ${item.secondNum} =  ${item.ans}`}
        </AppText>
      ))}
      <View style={styles.buttons}>
        <AppButton style={styles.button}>Потренироваться еще</AppButton>
        <AppButton style={styles.button}>Выйти в меню</AppButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttons: {marginVertical: 'auto'},
  button: {
    marginHorizontal: 'auto',
    marginVertical: 6,
  },
});
