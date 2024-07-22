import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {AppText} from '../../shared/ui/AppText';
import {colors} from '../../shared/ui/Colors';

interface Props extends TouchableOpacityProps {
  text: string;
  img: ImageSourcePropType;
}

export const PageItem = (props: Props) => {
  const {img, text, ...rest} = props;

  return (
    <TouchableOpacity style={styles.section} {...rest}>
      <Image source={img} style={styles.icon} />
      <AppText style={styles.text}>{text}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
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
});
