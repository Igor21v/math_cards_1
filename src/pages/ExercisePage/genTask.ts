import {TaskProps} from './ExercisePage';

// Генерим задачу
export const genTask = (max: number): TaskProps => {
  const firstNum = Math.floor(Math.random() * (max - 1)) + 1;
  const secondMax = max - firstNum;
  const secondNum = Math.floor(Math.random() * secondMax) + 1;
  return {firstNum, secondNum};
};
