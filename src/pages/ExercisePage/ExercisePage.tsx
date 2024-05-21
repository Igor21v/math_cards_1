import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';
import {NumKeyboard} from './NumKeyboard';
import {AppText} from '../../shared/ui/AppText';

type Props = NativeStackScreenProps<RootStackParamList, 'Exercise'>;

export const ExercisePage = ({route, navigation}: Props) => {
  const [ans, setAns] = useState('?');
  const [task, setTask] = useState({firstNum: 0, secondNum: 0});
  const [error, setError] = useState(false);

  const genTask = (max: number) => {
    const firstNum = Math.floor(Math.random() * (max - 1)) + 1;
    const secondMax = max - firstNum;
    const secondNum = Math.floor(Math.random() * secondMax) + 1;
    setTask({firstNum: firstNum, secondNum: secondNum});
  };

  useEffect(() => {
    genTask(20);
  }, []);

  const check = () => {
    if (task.firstNum + task.secondNum === +ans) {
      setError(false);
      setAns('?');
      genTask(20);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <TouchableOpacity style={styles.help}>
        <AppText size="s">Нужна помощь?</AppText>
      </TouchableOpacity>
      <AppText size="l" error={error} style={styles.task}>
        {task.firstNum}+{task.secondNum}={ans}
      </AppText>
      <NumKeyboard setNum={setAns} enter={check} setError={setError} />
    </>
  );
};

const styles = StyleSheet.create({
  task: {
    margin: 'auto',
  },
  help: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginRight: 4,
  },
});
