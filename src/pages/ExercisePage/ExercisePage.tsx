import React, {useEffect, useState} from 'react';
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
  const [task, setTask] = useState({firstNum: 0, secondNum: 0});
  const genTask = (max: number) => {
    const firstNum = Math.floor(Math.random() * (max - 1)) + 1;
    const secondMax = max - firstNum;
    const secondNum = Math.floor(Math.random() * secondMax) + 1;
    setTask({firstNum: firstNum, secondNum: secondNum});
  };
  useEffect(() => {
    genTask(20);
  }, []);

  const [ans, setAns] = useState('');
  const check = () => {
    genTask(5);
  };

  return (
    <>
      <Text>Icon ?</Text>
      <AppText size="l" style={styles.task}>
        {task.firstNum}+{task.secondNum}={ans}
      </AppText>
      <NumKeyboard setNum={setAns} enter={check} />
    </>
  );
};

const styles = StyleSheet.create({
  task: {
    margin: 'auto',
  },
});
