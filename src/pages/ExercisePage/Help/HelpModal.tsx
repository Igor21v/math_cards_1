import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, StyleSheet, Alert, Text, Pressable, StatusBar} from 'react-native';
import {AppButton} from '../../../shared/ui/AppButton';
import {AppText} from '../../../shared/ui/AppText';
import {colors} from '../../../shared/ui/Colors';
import Modal from 'react-native-modal';
import {Cross} from '../../../shared/icons/Cross';
import {HelpContent} from './HelpContent';
import {TaskProps} from '../ExercisePage';

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
