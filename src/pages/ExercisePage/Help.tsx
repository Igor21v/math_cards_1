import React, {Dispatch, SetStateAction, useState} from 'react';
import {View, StyleSheet, Alert, Text, Pressable, StatusBar} from 'react-native';
import {AppButton} from '../../shared/ui/AppButton';
import {AppText} from '../../shared/ui/AppText';
import {colors} from '../../shared/ui/Colors';
import Modal from 'react-native-modal';

interface HelpProps {
  showHelp: boolean;
  setShowHelp: Dispatch<SetStateAction<boolean>>;
}

export const Help = (props: HelpProps) => {
  const {showHelp, setShowHelp} = props;
  return (
    <Modal
      isVisible={showHelp}
      statusBarTranslucent
      swipeDirection="down"
      onSwipeComplete={() => {
        setShowHelp(false);
      }}
      style={{justifyContent: 'flex-end', margin: 0}}>
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
