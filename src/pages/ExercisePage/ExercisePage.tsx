import React from 'react';
import {View, Text, Alert, StyleSheet, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';
import {NumKeyboard} from './NumKeyboard';
import {colors} from '../../shared/ui/Colors';
import {AppText} from '../../shared/ui/AppText';
import {Backspace} from '../../shared/icons/Backspace';

type Props = NativeStackScreenProps<RootStackParamList, 'Exercise'>;

export const ExercisePage = ({route, navigation}: Props) => {
  const {maxNum, type} = route.params;

  return (
    <>
      <Text>Icon ?</Text>
      <AppText size="l" style={styles.task}>
        TASK
      </AppText>
      <NumKeyboard />
    </>
  );
};

const styles = StyleSheet.create({
  task: {
    margin: 'auto',
  },
});
