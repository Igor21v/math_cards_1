import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {StyleSheet, Vibration, View} from 'react-native';
import {Context} from '../../shared/lib/Context';
import {RootStackParamList} from '../../shared/types/route';
import {TaskProps} from '../../shared/types/task';
import {DropType} from './DragAndDrop/DragAndDropItem';
import {Data, PairItem} from './DragAndDrop/PairItem';
import {genDiffTasks} from './genDiffTasks';

type Props = NativeStackScreenProps<RootStackParamList, 'Pair'>;

export const PairPage = ({navigation}: Props) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [errorCount, setErrorCount] = useState<number>(0);
  const [ansCount, setAnsCount] = useState<number>(0);
  const dropAns = useRef<DropType<Data>[]>([]);
  const dropResp = useRef<DropType<Data>[]>([]);
  const {limit, mode} = useContext(Context);

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

  // Генерим задачи
  const genTasks = () => {
    setTasks(genDiffTasks({limit, mode}));
  };

  // Проверка ответа
  const check = (data1: Data, data2: Data) => {
    if (data1.task.ans === data2.task.ans) {
      setAnsCount(ansCount + 1);
    } else {
      Vibration.vibrate(80);
      setErrorCount(errorCount + 1);
      let task: TaskProps;
      if (data1.isAnswer) {
        task = data2.task;
      } else {
        task = data1.task;
      }
      setErrors(errors.add(`${task.firstNum} ${task.operation} ${task.secondNum} =  ${task.ans}`));
    }
  };

  // Генерация примеров
  const RenderTasks = () => (
    <>
      {tasks.map((task, index) => {
        const taskStr = task.firstNum + task.operation + task.secondNum;
        const setDrop = (dropProp: Partial<DropType<Data>>) => {
          dropResp.current[index] = {...dropResp.current[index], ...dropProp};
        };
        return (
          <PairItem
            key={index}
            dropHandlers={dropAns.current}
            task={task}
            content={taskStr}
            setDrop={setDrop}
            check={check}
          />
        );
      })}
    </>
  );
  // Генерация ответов
  const RenderAnswer = () => (
    <>
      {tasks.map((task, index) => {
        const setDrop = (dropProp: Partial<DropType<Data>>) => {
          dropAns.current[index] = {...dropAns.current[index], ...dropProp};
        };
        return (
          <PairItem
            key={index}
            dropHandlers={dropResp.current}
            task={task}
            content={`${task.ans}`}
            setDrop={setDrop}
            isAnswer
            check={check}
          />
        );
      })}
    </>
  );

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
