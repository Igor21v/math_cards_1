import {AppText} from '@src/shared/ui/AppText';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {DragAndDropItem, DropAreaType, DropType} from './DragAndDrop/DragAndDropItem';
import {TaskProps} from '@src/shared/types/task';

interface Props {
  setDrop?: (dropArea: Partial<DropType>) => void;
  task: TaskProps;
}

export const AnsItem = (props: Props) => {
  const {setDrop, task} = props;
  const [dragOverState, setDragOverState] = useState(false);
  const setDragOver = (state: boolean) => {
    setDragOverState(state);
    setDrop?.({dragOver: state});
  };
  useEffect(() => {
    setDrop?.({setDragOver});
  });
  const mods = [];
  dragOverState && mods.push(styles.dropzone);

  return (
    <DragAndDropItem setDrop={setDrop} style={[...mods]}>
      <AppText size="l">{task.ans}</AppText>
    </DragAndDropItem>
  );
};

const styles = StyleSheet.create({
  dropzone: {
    borderColor: 'green',
  },
});
