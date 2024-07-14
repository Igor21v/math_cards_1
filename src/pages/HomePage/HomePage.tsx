import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';
import {colors} from '../../shared/ui/Colors';
import {AppText} from '../../shared/ui/AppText';
import {Image} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomePage = ({navigation}: Props) => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Exercise')}>
        <Image source={require('../../shared/img/maths_board.png')} style={styles.icon} />
        <AppText style={styles.text}>Примеры</AppText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Test')}>
        <Image source={require('../../shared/img/test.png')} style={styles.icon} />
        <Text style={styles.text}> Тесты</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Pair')}>
        <Image source={require('../../shared/img/chain.png')} style={styles.icon} />
        <Text style={styles.text}> Соедини пару</Text>
      </TouchableOpacity>
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
  section: {
    padding: 20,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: colors.first,
    flex: 1,
  },
  endSection: {
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.second,
  },
  icon: {flex: 1, resizeMode: 'contain'},
});
