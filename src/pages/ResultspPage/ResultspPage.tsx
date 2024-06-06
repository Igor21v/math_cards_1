import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../shared/types/route';
import {AppButton} from '../../shared/ui/AppButton';
import {AppText} from '../../shared/ui/AppText';

type Props = NativeStackScreenProps<RootStackParamList, 'Results'>;

export const ResultspPage = (props: Props) => {
  const {navigation, route} = props;
  const {errorCount, errors} = route.params;
  const ErrorsRend = () => {
    if (errorCount > 0) {
      return (
        <>
          <AppText>Ты допустил ошибки в следующих примерах:</AppText>
          {errors.map((item, index) => (
            <AppText key={index}>{item}</AppText>
          ))}
        </>
      );
    }
    return null;
  };

  return (
    <>
      <AppText>Урок пройден.</AppText>
      <AppText>Неправильных ответов: {errorCount}</AppText>
      <ErrorsRend />
      <View style={styles.buttons}>
        <AppButton style={styles.button} onPress={() => navigation.replace('Exercise')}>
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
