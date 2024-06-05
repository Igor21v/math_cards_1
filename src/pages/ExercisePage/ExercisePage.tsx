import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, Vibration} from 'react-native';
import {Context} from '../../shared/lib/Context';
import {RootStackParamList} from '../../shared/types/route';
import {AppText} from '../../shared/ui/AppText';
import {HelpModal} from './Help/HelpModal';
import {NumKeyboard} from './NumKeyboard';
import {Task} from './Task/Task';
import {genTaskFn} from './Task/taskFn';
import {useAnimateError} from './Task/useAnimateError';
import {ProgressBar} from './ProgressBar';

export interface TaskProps {
  firstNum: number;
  secondNum: number;
  operation: '+' | '-';
  ans: number;
}

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
  const [errors, setErrors] = useState<TaskProps[]>([]);
  const [errorCount, setErrorCount] = useState<number>(0);
  const [showHelp, setShowHelp] = useState(false);
  const [ansCount, setAnsCount] = useState<number>(0);
  const {limit, mode} = useContext(Context);
  useEffect(() => {
    genTask();
  }, [limit, mode]);

  // Отбражение итоговой странцы
  useEffect(() => {
    if (ansCount > 1) {
      navigation.navigate('Results', {errorCount, errors});
    }
  }, [ansCount]);

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
      setErrors(errors.concat(task));
      setErrorCount(errorCount + 1);
    }
  };

  return (
    <>
      <HelpModal showHelp={showHelp} setShowHelp={setShowHelp} task={task} />
      <TouchableOpacity style={styles.help} onPress={() => setShowHelp(true)}>
        <AppText size="s">Нужна помощь?</AppText>
      </TouchableOpacity>
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
