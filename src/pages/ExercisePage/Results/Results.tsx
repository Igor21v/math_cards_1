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
      <AppButton>Потренироваться еще</AppButton>
      <AppButton>Выйти в меню</AppButton>
    </>
  );
};

const styles = StyleSheet.create({});
