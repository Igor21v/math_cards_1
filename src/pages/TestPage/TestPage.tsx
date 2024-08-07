import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {StyleSheet, Vibration} from 'react-native';
import {Context} from '../../shared/lib/Context';
import {RootStackParamList} from '../../shared/types/route';
import {Task} from '../../entities/Task';
import {genTaskFn} from '@src/entities/Task/taskFn';
import {useAnimateError} from '../../entities/Task/useAnimateError';
import {HelpButton} from '../../entities/Help';
import {TaskProps} from '../../shared/types/task';
import {ProgressBar} from '@src/entities/ProgressBar';
import {TestKeyboard} from './TestKeyboard';
import {getMockValues} from './getMockValues';
import {setStorage} from '@src/shared/lib/setStorage';

type Props = NativeStackScreenProps<RootStackParamList, 'Test'>;

export const TestPage = ({navigation, route}: Props) => {
  const [ans, setAns] = useState('?');
  const [task, setTask] = useState<TaskProps>({
    firstNum: 0,
    secondNum: 0,
    operation: '+',
    ans: 0,
  });
  const [isError, setIsError] = useState(false);
  const errors = useRef(new Set<string>());
  const errorCount = useRef(0);
  const [ansCount, setAnsCount] = useState<number>(0);
  const {limit, mode} = useContext(Context);
  const variants = useRef<number[]>([]);

  // Отбражение итоговой странцы
  useEffect(() => {
    if (ansCount > 9) {
      navigation.navigate('Results', {
        errorCount: errorCount.current,
        errors: Array.from(errors.current.values()),
      });
      clear();
      setStorage(`labelTest`, `${Date.now()}`);
    }
  }, [ansCount]);

  useEffect(() => {
    clear();
    genTask();
  }, [limit, mode]);

  const clear = () => {
    setAnsCount(0);
    errorCount.current = 0;
    errors.current.clear();
  };

  // Анимация ошибки
  const {startAnimate, animValue} = useAnimateError();

  // Генерим задачу
  const genTask = () => {
    const {firstNum, secondNum, operation, ans} = genTaskFn({limit, mode});
    variants.current = getMockValues(limit, ans);
    setTask({firstNum, secondNum, operation, ans});
  };

  // Проверка ответа
  const check = (ans: number) => {
    if (task.ans === ans) {
      setIsError(false);
      setAns('?');
      genTask();
      setAnsCount(ansCount + 1);
    } else {
      setAns(`${ans}`);
      setIsError(true);
      animValue.setValue(0);
      startAnimate();
      Vibration.vibrate(80);
      errors.current.add(`${task.firstNum} ${task.operation} ${task.secondNum} =  ${task.ans}`);
      errorCount.current++;
    }
  };

  return (
    <>
      <HelpButton task={task} />
      <Task task={task} ans={ans} isError={isError} animValue={animValue} />
      <ProgressBar ansCount={ansCount} />
      <TestKeyboard check={check} variants={variants.current} />
    </>
  );
};
