import {genTaskFn} from '@src/entities/Task/taskFn';
import {Limit, Mode} from '@src/shared/lib/Context';
import {TaskProps} from '@src/shared/types/task';

interface Props {
  limit: Limit;
  mode: Mode;
}

// Функция генерации 8 различных примеров

export const genDiffTasks = (props: Props): TaskProps[] => {
  const {limit, mode} = props;
  const taskSet = new Set();

  const tasks = Array.from(Array(8), () => generation());
  return tasks;

  function generation(): TaskProps {
    const task = genTaskFn({limit, mode});
    const taskStr = task.firstNum + task.operation + task.secondNum;
    if (!taskSet.has(taskStr)) {
      taskSet.add(taskStr);
      return task;
    } else {
      return generation();
    }
  }
};

export const getMixArr = () => {
  const arr = Array(8);
  for (let i = 0; i < 8; i++) {
    arr[i] = i;
  }
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * 8);
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
};
