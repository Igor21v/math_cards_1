import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {getStorage} from '@src/shared/lib/getStorage';
import {setStorage} from '@src/shared/lib/setStorage';
import {AppButton} from '@src/shared/ui/AppButton';
import React, {useEffect} from 'react';
import {AppRegistry, StyleSheet, View, NativeModules} from 'react-native';
import {RootStackParamList} from '../../shared/types/route';
import {PageItem} from './PageItem';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomePage = ({navigation}: Props) => {
  useEffect(() => {
    const consoleLog = (time: number) => {
      if (Number.isInteger(+time)) {
        console.log('time', time);
      } else {
        console.log('NOT TIME');
      }
    };
    getStorage('time', consoleLog);
  }, []);
  useEffect(() => {
    NativeModules.BackgroundTask.startService();
  }, []);
  const startFn2 = () => {
    NativeModules.AppTasks.taskOne('TTT');
  };
  return (
    <View style={styles.wrap}>
      <PageItem img={require('../../shared/img/maths_board.png')} text="Примеры" page="Exercise" />
      <PageItem img={require('../../shared/img/test.png')} text="Тесты" page="Test" />
      <PageItem img={require('../../shared/img/chain.png')} text="Соедини пару" page="Pair" />
      <AppButton onPress={startFn2}>Start background task</AppButton>

      {/* <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Compare')}>
        <Text style={styles.text}> Неравенства</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Pair')}>
        <Text style={styles.text}> Контрольная</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Pair')}>
        <Text style={styles.text}> Задачи</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Pair')}>
        <Text style={styles.text}> Статистика</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.section, styles.endSection]}
        onPress={() => navigation.navigate('Pair')}>
        <Text style={styles.text}> Настройки</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'space-around',
    flex: 1,
    gap: 20,
    paddingVertical: 20,
  },
});
