import {AppText} from '@src/shared/ui/AppText';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {DragAndDropItem, DropAreaType, DropType} from './DragAndDropItem';
import {TaskProps} from '@src/shared/types/task';
import {colors} from '@src/shared/ui/Colors';

interface Props {
  setDrop?: (dropArea: Partial<DropType<Data>>) => void;
  task: TaskProps;
  content: string;
  dropHandlers?: DropType<Data>[];
  isAnswer?: boolean;
  check: (data1: Data, data2: Data) => void;
}

export interface Data {
  task: TaskProps;
  isAnswer?: boolean;
}

export const PairItem = (props: Props) => {
  const {setDrop, task, dropHandlers, content, isAnswer, check} = props;
  const [dragOver, setDragOver] = useState(false);
  const [hide, setHide] = useState(false);
  const [dragging, setDragging] = useState(false);
  const currItemData = {task, isAnswer};
  // Когда этот элемент бросили на другой
  const dropHandler = (data: Data) => {
    check(data, currItemData);
    if (task.ans === data?.task.ans) {
      setHide(true);
      console.log('dropHandler ' + task.firstNum);
    }
  };
  // Когда другой элемент бросили на этот
  const dropOverHandler = (data?: Data) => {
    if (task.ans === data?.task.ans) {
      setHide(true);
      console.log('dropOverHandler ' + task.ans);
    }
  };
  useEffect(() => {
    setDrop?.({overHandler: setDragOver, data: {task, isAnswer}, dropOverHandler});
  }, []);

  const mods = [];
  (dragging || dragOver) && mods.push(styles.dragging);
  hide && mods.push(styles.hide);
  return (
    <DragAndDropItem<Data>
      dropHandlers={dropHandlers}
      dropHandler={dropHandler}
      setDrop={setDrop}
      setDragging={setDragging}
      data={currItemData}
      style={[styles.wrap, ...mods]}>
      <AppText size="l">{content}</AppText>
    </DragAndDropItem>
  );
};

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  dragging: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 8,
    borderStyle: 'dashed',
    borderColor: colors.first,
  },
  hide: {
    opacity: 0,
  },
});
