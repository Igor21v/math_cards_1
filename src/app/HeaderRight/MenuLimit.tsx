import {useContext, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {AppMenu} from '../../shared/ui/AppMenu';
import {AppButton} from '../../shared/ui/AppButton';
import {Context, Limit} from '../../shared/lib/Context';
import {AppText} from '../../shared/ui/AppText';
import {colors} from '../../shared/ui/Colors';

export const MenuLimit = () => {
  const {limit, setLimit} = useContext(Context);
  const [showML, setShowML] = useState(false);
  const pressHendler = (lim: Limit) => {
    return () => {
      setLimit(lim);
      setShowML(false);
    };
  };
  return (
    <>
      <AppButton onPress={() => setShowML(true)}>{limit}</AppButton>
      <AppMenu show={showML} setShow={setShowML} styleWrap={styles.modalStyle}>
        <AppText size="s" style={styles.title}>
          Максимальное число
        </AppText>
        <AppText style={styles.item} onPress={pressHendler(10)}>
          10
        </AppText>
        <AppText style={styles.item} onPress={pressHendler(20)}>
          20
        </AppText>
      </AppMenu>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  item: {
    color: colors.first,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  modalStyle: {
    right: 60,
    top: 50,
  },
});
