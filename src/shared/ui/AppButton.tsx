import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';
import {colors} from './Colors';

type Sizes = 's' | 'm' | 'l' | 'xl' | 'xxl';

interface Props extends TouchableOpacityProps {
  size?: Sizes;
}

export const AppButton = (props: Props) => {
  const {children, size = 'm', style, ...otherProps} = props;
  return (
    <TouchableOpacity {...otherProps} style={[styles.wrap, style]}>
      <Text style={[styles.text, styles[size]]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.first,
    padding: 4,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  text: {
    color: colors.second,
  },
  s: {
    fontSize: 14,
  },
  m: {
    fontSize: 20,
    marginRight: 8,
    marginLeft: 8,
  },
  l: {
    fontSize: 26,
  },
  xl: {
    fontSize: 32,
  },
  xxl: {
    fontSize: 38,
  },
});
