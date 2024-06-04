import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TaskProps} from '../ExercisePage';
import {AppText} from '../../../shared/ui/AppText';
import {AppButton} from '../../../shared/ui/AppButton';

interface Props {
  errors: TaskProps[];
}

export const Results = (props: Props) => {
  const {errors} = props;

  return (
    <>
      <AppText>Урок пройден. Ты допустил ошибки в следующих примерах:</AppText>
      {errors.map((item, index) => (
        <AppText key={index}>
          {`${item.firstNum} ${item.operation} ${item.secondNum} =  ${item.ans}`}
        </AppText>
      ))}
      <AppButton style={styles.button}>Потренироваться еще</AppButton>
      <AppButton style={styles.button}>Выйти в меню</AppButton>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 'auto',
    marginVertical: 6,
  },
});
