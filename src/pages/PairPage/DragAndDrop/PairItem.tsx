import {AppText} from '@src/shared/ui/AppText';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {DragAndDropItem, DropAreaType, DropType} from './DragAndDropItem';
import {TaskProps} from '@src/shared/types/task';

interface Props {
  setDrop?: (dropArea: Partial<DropType>) => void;
  task: TaskProps;
}

export const TaskItem = (props: Props) => {
  const {setDrop, task} = props;
  const [dragOverState, setDragOverState] = useState(false);
  const setDragOver = (state: boolean) => {
    setDragOverState(state);
  };
  useEffect(() => {
    setDrop?.({setDragOver, data: task.ans});
  }, []);

  return (
    <DragAndDropItem setDrop={setDrop} dragOverState={dragOverState} data={task.ans}>
      <AppText size="l">{task.ans}</AppText>
    </DragAndDropItem>
  );
};

const styles = StyleSheet.create({});
