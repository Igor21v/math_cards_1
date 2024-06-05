import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TaskProps} from '../ExercisePage/ExercisePage';
import {AppText} from '../../shared/ui/AppText';
import {AppButton} from '../../shared/ui/AppButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';

type Props = NativeStackScreenProps<RootStackParamList, 'Results'>;

export const ResultspPage = (props: Props) => {
  const {navigation, route} = props;
  const {errorCount, errors} = route.params;

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
        <AppButton style={styles.button} onPress={() => navigation.navigate('Exercise')}>
          Потренироваться еще
        </AppButton>
        <AppButton style={styles.button} onPress={() => navigation.navigate('Home')}>
          Выйти в меню
        </AppButton>
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
