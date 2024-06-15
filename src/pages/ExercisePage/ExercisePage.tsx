import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Vibration} from 'react-native';
import {Context} from '../../shared/lib/Context';
import {RootStackParamList} from '../../shared/types/route';
import {NumKeyboard} from './NumKeyboard';
import {Task} from '../../entities/Task';
import {genTaskFn} from '../../entities/Task/taskFn';
import {useAnimateError} from '../../entities/Task/useAnimateError';
import {HelpButton} from '../../entities/Help';
import {TaskProps} from '../../shared/types/task';
import {ProgressBar} from '@src/entities/ProgressBar';

type Props = NativeStackScreenProps<RootStackParamList, 'Exercise'>;

export const ExercisePage = ({navigation}: Props) => {
  const [ans, setAns] = useState('?');
  const [task, setTask] = useState<TaskProps>({
    firstNum: 0,
    secondNum: 0,
    operation: '+',
    ans: 0,
  });
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [errorCount, setErrorCount] = useState<number>(0);
  const [ansCount, setAnsCount] = useState<number>(0);
  const {limit, mode} = useContext(Context);

  // Отбражение итоговой странцы
  useEffect(() => {
    if (ansCount > 9) {
      navigation.navigate('Results', {errorCount, errors: Array.from(errors.values())});
    }
  }, [ansCount]);

  useEffect(() => {
    genTask();
  }, [limit, mode]);

  // Анимация ошибки
  const {startAnimate, animValue} = useAnimateError();

  // Генерим задачу
  const genTask = () => {
    const {firstNum, secondNum, operation, ans} = genTaskFn({limit, mode});
    setTask({firstNum, secondNum, operation, ans});
  };

  // Проверка ответа
  const check = () => {
    if (task.ans === +ans) {
      setIsError(false);
      setAns('?');
      genTask();
      setAnsCount(ansCount + 1);
    } else {
      setIsError(true);
      animValue.setValue(0);
      startAnimate();
      Vibration.vibrate(80);
      setErrors(errors.add(`${task.firstNum} ${task.operation} ${task.secondNum} =  ${task.ans}`));
      setErrorCount(errorCount + 1);
    }
  };

  return (
    <>
      <HelpButton task={task} />
      <Task task={task} ans={ans} isError={isError} animValue={animValue} />
      <ProgressBar ansCount={ansCount} />
      <NumKeyboard setNum={setAns} enter={check} setError={setIsError} />
    </>
  );
};

const styles = StyleSheet.create({
  help: {
    position: 'absolute',
    right: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
});
