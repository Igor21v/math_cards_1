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

type Props = NativeStackScreenProps<RootStackParamList, 'Exercise'>;
export interface TaskProps {
  firstNum: number;
  secondNum: number;
  operation: '+' | '-';
  ans: number;
}

export const ExercisePage = ({route, navigation}: Props) => {
  const [ans, setAns] = useState('?');
  const [task, setTask] = useState<TaskProps>({
    firstNum: 0,
    secondNum: 0,
    operation: '+',
    ans: 0,
  });
  const [error, setError] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [ansArr, setAnsArr] = useState<boolean[]>([]);
  const {limit, mode} = useContext(Context);
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
      setError(false);
      setAns('?');
      genTask();
    } else {
      setError(true);
      animValue.setValue(0);
      startAnimate();
      Vibration.vibrate(80);
    }
  };

  return (
    <>
      <HelpModal showHelp={showHelp} setShowHelp={setShowHelp} task={task} />
      <TouchableOpacity style={styles.help} onPress={() => setShowHelp(true)}>
        <AppText size="s">Нужна помощь?</AppText>
      </TouchableOpacity>
      <Task task={task} ans={ans} error={error} animValue={animValue} />
      <ProgressBar ansArr={ansArr} />
      <NumKeyboard setNum={setAns} enter={check} setError={setError} />
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
