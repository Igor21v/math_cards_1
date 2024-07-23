import React, {useContext} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {AppText} from '../../shared/ui/AppText';
import {colors} from '../../shared/ui/Colors';
import {RootStackParamList} from '@src/shared/types/route';
import {NavigationProp, ParamListBase, useNavigation} from '@react-navigation/native';
import {Context} from '@src/shared/lib/Context';

interface Props {
  text: string;
  img: ImageSourcePropType;
  page: keyof RootStackParamList;
}

export const PageItem = (props: Props) => {
  const {img, text, page} = props;
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const {labels} = useContext(Context);

  return (
    <TouchableOpacity style={styles.section} onPress={() => navigation.navigate(page)}>
      <Image source={img} style={styles.icon} />
      <AppText style={styles.text}>{text}</AppText>
      {labels[page] && <AppText style={styles.label}>&bull;</AppText>}
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
