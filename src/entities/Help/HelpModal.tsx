import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

import {HelpContent} from './HelpContent';
import {TaskProps} from '@src/shared/types/task';
import {Cross} from '@src/shared/icons/Cross';
import {colors} from '@src/shared/ui/Colors';

interface HelpProps {
  showHelp: boolean;
  setShowHelp: Dispatch<SetStateAction<boolean>>;
  task: TaskProps;
}

export const HelpModal = (props: HelpProps) => {
  const {showHelp, setShowHelp, task} = props;
  return (
    <Modal
      isVisible={showHelp}
      statusBarTranslucent
      swipeDirection="down"
      onSwipeComplete={() => {
        setShowHelp(false);
      }}
      style={styles.wrap}>
      <View style={styles.modalView}>
        <View style={styles.line1}></View>
        <View style={styles.line2}></View>
        <View style={styles.line3}></View>
        <Cross style={styles.cross} onPress={() => setShowHelp(false)} />
        <HelpContent task={task} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView: {
    backgroundColor: colors.second,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 340,
    padding: 35,
    paddingTop: 45,
    alignItems: 'center',
    marginTop: 'auto',
  },
  line1: {
    backgroundColor: colors.first,
    position: 'absolute',
    height: 2,
    borderRadius: 2,
    width: '20%',
    top: 10,
  },
  line2: {
    backgroundColor: colors.first,
    position: 'absolute',
    height: 2,
    borderRadius: 2,
    width: '30%',
    top: 18,
  },
  line3: {
    backgroundColor: colors.first,
    position: 'absolute',
    height: 2,
    borderRadius: 2,
    width: '40%',
    top: 26,
  },
  cross: {position: 'absolute', right: 14, top: 10},
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
