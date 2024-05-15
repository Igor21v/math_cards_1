import React from 'react';
import {View, Text, Alert, StyleSheet, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';
import {NumKeyboard} from './NumKeyboard';

type Props = NativeStackScreenProps<RootStackParamList, 'Exercise'>;

export const ExercisePage = ({route, navigation}: Props) => {
  const {maxNum, type} = route.params;

  return (
    <View>
      <Text style={styles.postText}>Exercise page</Text>
      <NumKeyboard />
    </View>
  );
};

const styles = StyleSheet.create({
  postText: {
    fontSize: 18,
    lineHeight: 24,
  },
});
