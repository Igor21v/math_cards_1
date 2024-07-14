import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {StyleSheet, Vibration, View} from 'react-native';
import {Context} from '../../shared/lib/Context';
import {RootStackParamList} from '../../shared/types/route';
import {TaskProps} from '../../shared/types/task';
import {DropType} from './DragAndDrop/DragAndDropItem';
import {Data, PairItem} from './DragAndDrop/PairItem';
import {genDiffTasks, getMixArr} from './genDiffTasks';

type Props = NativeStackScreenProps<RootStackParamList, 'Pair'>;

export const PairPage = ({navigation}: Props) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const errors = new Set<string>();
  let errorCount = 0;
  let ansCount = 0;
  const dropAns = useRef<DropType<Data>[]>([]);
  const dropResp = useRef<DropType<Data>[]>([]);
  const {limit, mode} = useContext(Context);

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
      // Отбражение итоговой странцы если все решили
      if (++ansCount > 7) {
        navigation.navigate('Results', {
          errorCount: errorCount,
          errors: Array.from(errors.values()),
        });
        ansCount = 0;
        errorCount = 0;
        errors.clear();
        genTasks();
      }
    } else {
      Vibration.vibrate(80);
      errorCount++;
      let task: TaskProps;
      if (data1.isAnswer) {
        task = data2.task;
      } else {
        task = data1.task;
      }
      errors.add(`${task.firstNum} ${task.operation} ${task.secondNum} =  ${task.ans}`);
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
  const RenderAnswer = () => {
    const randomIndexes = getMixArr();
    console.log(randomIndexes);
    const answers = [];
    for (let i = 0; i < 8; i++) {
      const index = randomIndexes[i];
      console.log(index);
      const task = tasks[index];
      console.log(task);
      const setDrop = (dropProp: Partial<DropType<Data>>) => {
        dropAns.current[index] = {...dropAns.current[index], ...dropProp};
      };
      answers.push(
        <PairItem
          key={index}
          dropHandlers={dropResp.current}
          task={task}
          content={`${task?.ans}`}
          setDrop={setDrop}
          isAnswer
          check={check}
        />,
      );
    }
    return answers;
  };

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
