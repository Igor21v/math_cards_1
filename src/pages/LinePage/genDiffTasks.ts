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

  function generation() {
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
