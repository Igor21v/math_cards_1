import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
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
    return (
      <AppText>
        Ты молодец <Image source={require('../../shared/emojis/Smile.png')} style={styles.smile} />{' '}
      </AppText>
    );
  };

  return (
    <View style={styles.wrap}>
      <AppText>Урок пройден.</AppText>
      <AppText>Неправильных ответов: {errorCount}</AppText>
      <ErrorsRend />
      <View style={styles.buttons}>
        <AppButton size="l" style={styles.button} onPress={() => navigation.replace('Exercise')}>
          Решать еще примеры
        </AppButton>
        <AppButton size="l" style={styles.button} onPress={() => navigation.navigate('Home')}>
          Выйти в меню
        </AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {marginVertical: 8, flex: 1},
  buttons: {marginVertical: 'auto'},
  button: {
    marginHorizontal: 'auto',
    marginVertical: 10,
  },
  smile: {width: 24, height: 24},
});
