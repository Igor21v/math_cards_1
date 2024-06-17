import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {Pressable, StyleSheet, Vibration, View} from 'react-native';
import {Context} from '../../shared/lib/Context';
import {RootStackParamList} from '../../shared/types/route';
import {Task} from '../../entities/Task';
import {genTaskFn} from '@src/entities/Task/taskFn';
import {useAnimateError} from '../../entities/Task/useAnimateError';
import {HelpButton} from '../../entities/Help';
import {TaskProps} from '../../shared/types/task';
import {ProgressBar} from '@src/entities/ProgressBar';
import {genDiffTasks} from './genDiffTasks';
import {AppText} from '@src/shared/ui/AppText';

type Props = NativeStackScreenProps<RootStackParamList, 'Pair'>;

export const PairPage = ({navigation}: Props) => {
  const [ans, setAns] = useState('?');
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [errorCount, setErrorCount] = useState<number>(0);
  const [ansCount, setAnsCount] = useState<number>(0);
  const {limit, mode} = useContext(Context);
  const variants = useRef<number[]>([]);

  // Отбражение итоговой странцы
  useEffect(() => {
    if (ansCount > 9) {
      navigation.navigate('Results', {
        errorCount,
        errors: Array.from(errors.values()),
      });
      setAnsCount(0);
    }
  }, [ansCount]);

  useEffect(() => {
    genTasks();
  }, [limit, mode]);

  // Генерим задачу
  const genTasks = () => {
    setTasks(genDiffTasks({limit, mode}));
  };

  // Генерация примеров
  const RenderTasks = () => (
    <>
      {tasks.map(task => {
        const taskStr = task.firstNum + task.operation + task.secondNum;
        return (
          <Pressable key={taskStr}>
            <AppText size="l">{taskStr}</AppText>
          </Pressable>
        );
      })}
    </>
  );
  const RenderAnswer = () => (
    <>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <AppText size="l">{task.ans}</AppText>
        </Pressable>
      ))}
    </>
  );
  // Проверка ответа
  /* const check = (ans: number) => {
    if (tasks.ans === ans) {
      setIsError(false);
      setAns('?');
      genTasks();
      setAnsCount(ansCount + 1);
    } else {
      setAns(`${ans}`);
      setIsError(true);
      animValue.setValue(0);
      startAnimate();
      Vibration.vibrate(80);
      setErrors(errors.add(`${task.firstNum} ${task.operation} ${task.secondNum} =  ${task.ans}`));
      setErrorCount(errorCount + 1);
    }
  }; */

  return (
    <View style={styles.wrap}>
      <View style={styles.tasksWrap}>
        <RenderTasks />
      </View>
      <View style={styles.ansWrap}>
        <RenderAnswer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    flex: 1,
  },
  tasksWrap: {
    justifyContent: 'space-evenly',
    marginRight: 'auto',
    marginLeft: 30,
  },
  ansWrap: {
    justifyContent: 'space-evenly',
    marginRight: 30,
  },
});
