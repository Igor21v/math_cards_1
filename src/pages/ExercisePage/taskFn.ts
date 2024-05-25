import {TaskProps} from './ExercisePage';

type Mode = 'add' | 'subtract' | 'all';

interface GenTaskProps {
  max: number;
  mode: Mode;
}

// Генератор задач
export const genTaskFn = (props: GenTaskProps): TaskProps => {
  const {max, mode} = props;
  if (mode === 'add') {
    return add();
  }
  if (mode === 'subtract') {
    return subtract();
  }
  if (Math.random() < 0.5) {
    return add();
  }
  return subtract();

  function add(): TaskProps {
    const firstNum = Math.floor(Math.random() * (max - 1)) + 1;
    const secondMax = max - firstNum;
    const secondNum = Math.floor(Math.random() * secondMax) + 1;
    const ans = firstNum + secondNum;
    return {firstNum, secondNum, operation: 'add', ans};
  }

  function subtract(): TaskProps {
    const firstNum = Math.floor(Math.random() * (max - 1)) + 2;
    const secondMax = firstNum - 1;
    const secondNum = Math.floor(Math.random() * secondMax) + 1;
    const ans = firstNum - secondNum;
    return {firstNum, secondNum, operation: 'subtract', ans};
  }
};

interface CheckAnsFnProps {
  task: TaskProps;
  ans: number;
}
