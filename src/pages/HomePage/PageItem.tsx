import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {getStorage} from '@src/shared/lib/getStorage';
import {RootStackParamList} from '@src/shared/types/route';
import React, {useCallback, useRef, useState} from 'react';
import {Image, ImageSourcePropType, StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '../../shared/ui/AppText';
import {colors} from '../../shared/ui/Colors';

interface Props {
  text: string;
  img: ImageSourcePropType;
  page: keyof RootStackParamList;
}

export const PageItem = (props: Props) => {
  const {img, text, page} = props;
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [label, setLabel] = useState(false);
  const timer = useRef<NodeJS.Timeout>();

  const initLabel = (storTime: number) => {
    setLabel(false);
    if (Number.isInteger(+storTime)) {
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);
      // Если сегодня задачу решали ставим метку до конца дня
      if (storTime > startOfToday.getTime()) {
        setLabel(true);
        const endOfToday = new Date();
        endOfToday.setHours(23, 59, 59, 999);
        const restTime = endOfToday.getTime() - Date.now();
        timer.current = setTimeout(() => {
          setLabel(false);
        }, restTime);
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      getStorage(`label${page}`, initLabel);
      return () => {
        clearInterval(timer.current);
        timer.current = undefined;
      };
    }, []),
  );
  return (
    <TouchableOpacity style={styles.section} onPress={() => navigation.navigate(page)}>
      <Image source={img} style={styles.icon} />
      <AppText style={styles.text}>{text}</AppText>
      {label && <AppText style={styles.label}>&bull;</AppText>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 15,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: colors.first,
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.second,
  },
  icon: {flex: 1, resizeMode: 'contain'},
  label: {
    fontSize: 34,
    color: '#00FF21',
    position: 'absolute',
    right: 15,
    top: -4,
  },
});
