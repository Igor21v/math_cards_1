import React, {Dispatch, ReactElement, SetStateAction} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Pressable,
  ModalProps,
  StyleProp,
  ViewStyle,
  TouchableHighlight,
} from 'react-native';
import {colors} from './Colors';
import {AppText} from './AppText';

export interface ItemMenu {
  el: ReactElement;
  fn: () => void;
  selected?: boolean;
}

interface AppMenuProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  styleWrap: StyleProp<ViewStyle>;
  items: ItemMenu[];
  title?: string;
}

export const AppMenu = (props: AppMenuProps) => {
  const {show, setShow, styleWrap, items, title} = props;

  // Рендер заголовка
  const renderTitle = () =>
    title && (
      <AppText size="s" style={styles.title}>
        {title}
      </AppText>
    );

  // Рендер списка компонентов
  const renderItem = items.map((item, index) => {
    let wrapItemStyle = {};
    if (index === items.length - 1) {
      wrapItemStyle = {...styles.endItem};
    }
    const itemMods = [];
    item.selected && itemMods.push(styles.itemSelected);

    return (
      <TouchableHighlight
        underlayColor={colors.third}
        onPress={item.fn}
        style={wrapItemStyle}
        key={index}>
        <AppText style={[styles.item, itemMods]}> {item.el} </AppText>
      </TouchableHighlight>
    );
  });

  return (
    <Modal animationType="fade" transparent visible={show}>
      <Pressable style={styles.overlay} onPress={() => setShow(false)} />
      <View style={[styles.modalView, styleWrap]}>
        {renderTitle()}
        {renderItem}
      </View>
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
  title: {
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  item: {
    color: colors.first,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  itemSelected: {
    opacity: 0.5,
  },
  endItem: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
