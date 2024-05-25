import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet, TouchableOpacity, Vibration} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';
import {NumKeyboard} from './NumKeyboard';
import {AppText} from '../../shared/ui/AppText';
import {HelpModal} from './Help/HelpModal';
import {genTaskFn} from './taskFn';

type Props = NativeStackScreenProps<RootStackParamList, 'Exercise'>;
export interface TaskProps {
  firstNum: number;
  secondNum: number;
  operation: 'add' | 'subtract';
  ans: number;
}

export const ExercisePage = ({route, navigation}: Props) => {
  const [ans, setAns] = useState('?');
  const [task, setTask] = useState<TaskProps>({firstNum: 0, secondNum: 0, operation: 'add', ans: 0});
  const [error, setError] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  useEffect(() => {
    genTask(20);
  }, []);

  // Анимация ошибки
  let value = useRef(new Animated.Value(0)).current;
  const startAnimate = () => {
    Animated.timing(value, {
      toValue: 3,
      useNativeDriver: true,
      easing: Easing.elastic(10),
    }).start();
  };

  // Генерим задачу
  const genTask = (max: number) => {
    const {firstNum, secondNum, operation, ans} = genTaskFn({max, mode: 'add'});
    setTask({firstNum, secondNum, operation, ans});
  };

  // Проверка ответа
  const check = () => {
    if (task.ans === +ans) {
      setError(false);
      setAns('?');
      genTask(20);
    } else {
      setError(true);
      value.setValue(0);
      startAnimate();
      Vibration.vibrate(80);
      genTask(10);
    }
  };

  return (
    <>
      <HelpModal showHelp={showHelp} setShowHelp={setShowHelp} task={task} />
      <TouchableOpacity style={styles.help} onPress={() => setShowHelp(true)}>
        <AppText size="s">Нужна помощь?</AppText>
      </TouchableOpacity>
      <Animated.View style={[styles.task, {transform: [{translateX: value}]}]}>
        <AppText size="l" error={error}>
          {task.firstNum}
          {task.operation === 'add' ? '+' : '-'}
          {task.secondNum}={ans}
        </AppText>
      </Animated.View>
      <NumKeyboard setNum={setAns} enter={check} setError={setError} />
    </>
  );
};

const styles = StyleSheet.create({
  task: {
    margin: 'auto',
  },
  help: {
    position: 'absolute',
    right: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
});
