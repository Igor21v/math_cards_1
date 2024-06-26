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
}

export interface Data {
  task: TaskProps;
  isAnswer?: boolean;
}

export const PairItem = (props: Props) => {
  const {setDrop, task, dropHandlers, content, isAnswer} = props;
  const [dragOver, setDragOver] = useState(false);
  const [hide, setHide] = useState(false);
  const [dragging, setDragging] = useState(false);
  useEffect(() => {
    setDrop?.({overHandler: setDragOver, data: task.ans, dropHandler: setHide});
  }, []);

  const mods = [];
  (dragging || dragOver) && mods.push(styles.dragging);
  hide && mods.push(styles.hide);
  return (
    <DragAndDropItem<Data>
      dropHandlers={dropHandlers}
      dropHandler={setHide}
      setDrop={setDrop}
      setDragging={setDragging}
      data={{task, isAnswer}}
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
