import {Limit} from '@src/shared/lib/Context';
import {getRandomInt} from '@src/shared/lib/getRandomInt';
import {TaskProps} from '@src/shared/types/task';

export function getMockValues(limit: Limit, ans: number) {
  // Заполняем моковый массив
  const values = Array(4);
  values[0] = ans;
  values[1] = getRandomVal();
  values[2] = getRandomVal();
  values[3] = getRandomVal();

  // Вставляем правильный ответ в рандомное место
  const position = getRandomInt(0, 3);
  values[0] = values[position];
  values[position] = ans;

  console.log('pos ' + position + ' lim ' + limit + ' ans ' + ans);
  return values;

  function getRandomVal(): number {
    let val = getRandomInt(1, limit);
    if (values.includes(val)) {
      val = getRandomVal();
    }
    console.log('val ' + val);
    return val;
  }
}
