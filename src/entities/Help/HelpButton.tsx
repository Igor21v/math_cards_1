import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {HelpModal} from './HelpModal';
import {AppText} from '../../shared/ui/AppText';
import {TaskProps} from '../../shared/types/task';

export interface Props {
  task: TaskProps;
}

export const HelpButton = (props: Props) => {
  const {task} = props;
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <HelpModal showHelp={showHelp} setShowHelp={setShowHelp} task={task} />
      <TouchableOpacity style={styles.help} onPress={() => setShowHelp(true)}>
        <AppText size="s">Нужна помощь?</AppText>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  help: {
    position: 'absolute',
    right: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
});
