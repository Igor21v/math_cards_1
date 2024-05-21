import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';
import {NumKeyboard} from './NumKeyboard';
import {AppText} from '../../shared/ui/AppText';

type Props = NativeStackScreenProps<RootStackParamList, 'Exercise'>;

export const ExercisePage = ({route, navigation}: Props) => {
  const [ans, setAns] = useState('?');
  const [task, setTask] = useState({firstNum: 0, secondNum: 0});
  const [error, setError] = useState(false);

  let value = useRef(new Animated.Value(0)).current;
  const startAnimate = () => {
    Animated.timing(value, {toValue: 1.2, useNativeDriver: true}).start();
  };

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
      value.setValue(0);
      startAnimate();
    }
  };

  return (
    <>
      <Animated.View style={[styles.help, {opacity: value}]}>
        <TouchableOpacity>
          <AppText size="s">Нужна помощь?</AppText>
        </TouchableOpacity>
      </Animated.View>

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
