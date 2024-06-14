import {Limit, Mode} from '../../shared/lib/Context';
import {TaskProps} from '../../shared/types/task';

interface GenTaskProps {
  limit: Limit;
  mode: Mode;
}

// Генератор задач
export const genTaskFn = (props: GenTaskProps): TaskProps => {
  const {limit: max, mode} = props;
  if (mode === '+') {
    return add();
  }
  if (mode === '-') {
    return subtract();
  }
  if (Math.random() < 0.5) {
    return add();
  }
  return subtract();

  function add(): TaskProps {
    const firstNum = Math.floor(Math.random() * (max - 1)) + 1;
    // Ограничиваем второй аргумент одной цифрой, т.к. первый класс
    const secondMax = Math.min(max - firstNum, 9);
    const secondNum = Math.floor(Math.random() * secondMax) + 1;
    const ans = firstNum + secondNum;
    return {firstNum, secondNum, operation: '+', ans};
  }

  function subtract(): TaskProps {
    const firstNum = Math.floor(Math.random() * (max - 1)) + 2;
    // Ограничиваем второй аргумент одной цифрой, т.к. первый класс
    const secondMax = Math.min(firstNum - 1, 9);
    const secondNum = Math.floor(Math.random() * secondMax) + 1;
    const ans = firstNum - secondNum;
    return {firstNum, secondNum, operation: '-', ans};
  }
};
