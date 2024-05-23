import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, StyleSheet, Modal, Alert, Text, Pressable, StatusBar} from 'react-native';
import {AppButton} from '../../shared/ui/AppButton';
import {AppText} from '../../shared/ui/AppText';
import {colors} from '../../shared/ui/Colors';

interface HelpProps {
  showHelp: boolean;
  setShowHelp: Dispatch<SetStateAction<boolean>>;
}

export const Help = (props: HelpProps) => {
  const {showHelp, setShowHelp} = props;
  return (
    <Modal
      statusBarTranslucent
      animationType="slide"
      transparent
      visible={showHelp}
      onRequestClose={() => {
        setShowHelp(false);
      }}>
      <Pressable style={styles.overlay} onPress={() => setShowHelp(false)}></Pressable>
      <View style={styles.modalView}>
        <AppText style={styles.text}>Здесь будет объяснение что к чему</AppText>
        <AppButton onPress={() => setShowHelp(false)}>
          <Text>Понятно</Text>
        </AppButton>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.second,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 50,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  text: {
    paddingBottom: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
