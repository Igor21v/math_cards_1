import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomePage = ({navigation}: Props) => {
  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate('Exercise', {maxNum: 10, type: 'all'})}>
        <Text style={styles.text}> Примеры</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate('Test', {maxNum: 10, type: 'all'})}>
        <Text style={styles.text}> Тесты</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate('Compare', {maxNum: 10, type: 'all'})}>
        <Text style={styles.text}> Неравенства</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.section}
        onPress={() => navigation.navigate('Line', {maxNum: 10, type: 'all'})}>
        <Text style={styles.text}> Соедини линию</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    width: '90%',
    marginLeft: '5%',
    marginTop: 10,
    backgroundColor: '#66A3D2',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
