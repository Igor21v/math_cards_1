import {AppText} from '@src/shared/ui/AppText';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {DragAndDropItem, DropAreaType} from './DragAndDrop/DragAndDropItem';
import {TaskProps} from '@src/shared/types/task';

interface Props {
  setDrogArea?: (dropArea: DropAreaType) => void;
  task: TaskProps;
}

export const AnsItem = (props: Props) => {
  const {setDrogArea, task} = props;
  const [dragOver, setDragOver] = useState(false);

  return (
    <DragAndDropItem setDrogArea={setDrogArea}>
      <AppText size="l">{task.ans}</AppText>
    </DragAndDropItem>
  );
};

const styles = StyleSheet.create({});
