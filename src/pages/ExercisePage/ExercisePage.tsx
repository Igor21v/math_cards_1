import React from 'react';
import {View, Text, Alert, StyleSheet, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';
import {NumKeyboard} from './NumKeyboard';
import {colors} from '../../shared/ui/Colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Exercise'>;

export const ExercisePage = ({route, navigation}: Props) => {
  const {maxNum, type} = route.params;

  return (
    <View style={styles.page}>
      <Text>Icon ?</Text>
      <Text style={styles.task}>TASK</Text>
      <NumKeyboard />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  task: {
    fontSize: 32,
    margin: 'auto',
    color: colors.third,
  },
});
