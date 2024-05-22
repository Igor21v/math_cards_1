import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, StyleSheet, Modal, Alert, Text, Pressable} from 'react-native';
import {AppButton} from '../../shared/ui/AppButton';
import {AppText} from '../../shared/ui/AppText';

interface HelpProps {
  showHelp: boolean;
  setShowHelp: Dispatch<SetStateAction<boolean>>;
}

export const Help = (props: HelpProps) => {
  const {showHelp, setShowHelp} = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showHelp}
      onRequestClose={() => {
        setShowHelp(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <AppText style={styles.text}>Здесь будет объяснение что к чему</AppText>
          <AppButton onPress={() => setShowHelp(false)}>
            <Text>Понятно</Text>
          </AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 50,
  },
  button: {
    borderRadius: 12,
    padding: 10,
    elevation: 50,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  text: {
    paddingBottom: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
