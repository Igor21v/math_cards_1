import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../shared/types/route';
import {PageItem} from './PageItem';
import {Context} from '@src/shared/lib/Context';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomePage = ({navigation}: Props) => {
  const {labels} = useContext(Context);
  return (
    <View style={styles.wrap}>
      <PageItem
        img={require('../../shared/img/maths_board.png')}
        text="Примеры"
        onPress={() => navigation.navigate('Exercise')}
        label={labels.Exercise}
      />
      <PageItem
        img={require('../../shared/img/test.png')}
        text="Тесты"
        onPress={() => navigation.navigate('Test')}
        label={labels.Test}
      />
      <PageItem
        img={require('../../shared/img/chain.png')}
        text="Соедини пару"
        onPress={() => navigation.navigate('Pair')}
        label={labels.Pair}
      />

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
