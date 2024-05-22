import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet, TouchableOpacity, Vibration} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';
import {NumKeyboard} from './NumKeyboard';
import {AppText} from '../../shared/ui/AppText';

type Props = NativeStackScreenProps<RootStackParamList, 'Exercise'>;

export const ExercisePage = ({route, navigation}: Props) => {
  const [ans, setAns] = useState('?');
  const [task, setTask] = useState({firstNum: 0, secondNum: 0});
  const [error, setError] = useState(false);
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
    const firstNum = Math.floor(Math.random() * (max - 1)) + 1;
    const secondMax = max - firstNum;
    const secondNum = Math.floor(Math.random() * secondMax) + 1;
    setTask({firstNum: firstNum, secondNum: secondNum});
  };

  // Проверка ответа
  const check = () => {
    if (task.firstNum + task.secondNum === +ans) {
      setError(false);
      setAns('?');
      genTask(20);
    } else {
      setError(true);
      value.setValue(0);
      startAnimate();
      Vibration.vibrate(80);
    }
  };

  return (
    <>
      <TouchableOpacity style={styles.help}>
        <AppText size="s">Нужна помощь?</AppText>
      </TouchableOpacity>
      <Animated.View style={[styles.task, {transform: [{translateX: value}]}]}>
        <AppText size="l" error={error}>
          {task.firstNum}+{task.secondNum}={ans}
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
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
});
