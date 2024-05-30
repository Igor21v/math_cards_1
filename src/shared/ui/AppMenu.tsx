import React, {Dispatch, SetStateAction} from 'react';
import {View, StyleSheet, Modal, Pressable, ModalProps, StyleProp, ViewStyle} from 'react-native';
import {colors} from './Colors';

interface AppMenuProps extends ModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  styleWrap: StyleProp<ViewStyle>;
}

export const AppMenu = (props: AppMenuProps) => {
  const {show, setShow, children, styleWrap} = props;
  return (
    <Modal animationType="fade" transparent visible={show}>
      <Pressable style={styles.overlay} onPress={() => setShow(false)} />
      <View style={[styles.modalView, styleWrap]}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  modalView: {
    position: 'absolute',
    backgroundColor: colors.second,
    borderRadius: 20,
    elevation: 8,
  },
});
