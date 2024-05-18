import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';
import {colors} from './Colors';

interface Props extends TouchableOpacityProps {
  title: string;
}

export const AppButton = (props: TouchableOpacityProps) => {
  const {children, style, ...otherProps} = props;
  return (
    <TouchableOpacity {...otherProps} style={[styles.wrap, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.first,
    padding: 4,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.second,
    fontSize: 32,
  },
});
