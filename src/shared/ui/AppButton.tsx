import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';
import {colors} from './Colors';

type Sizes = 's' | 'm' | 'l' | 'xl' | 'xxl';
type Modes = 'background' | 'outline' | 'clear';

interface Props extends TouchableOpacityProps {
  size?: Sizes;
  mode?: Modes;
}

export const AppButton = (props: Props) => {
  const {children, size = 'm', mode: mode = 'background', style, ...otherProps} = props;
  return (
    <TouchableOpacity {...otherProps} style={[styles[`${mode}Wrap`], style]}>
      <Text style={[styles[`${mode}Text`], styles[size]]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundWrap: {
    backgroundColor: colors.first,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  backgroundText: {
    color: colors.second,
  },
  outlineWrap: {},
  outlineText: {},
  clearWrap: {
    padding: 4,
  },
  clearText: {
    color: colors.third,
  },

  s: {
    fontSize: 14,
  },
  m: {
    fontSize: 20,
  },
  l: {
    fontSize: 20,
    margin: 8,
  },
  xl: {
    fontSize: 32,
  },
  xxl: {
    fontSize: 38,
  },
});
