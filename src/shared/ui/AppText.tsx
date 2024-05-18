import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {colors} from './Colors';

type Sizes = 's' | 'm' | 'l' | 'xl';

interface Props extends TextProps {
  size?: Sizes;
  bold?: boolean;
}

export const AppText = (props: Props) => {
  const {children, style, bold, size = 'm', ...otherProps} = props;

  return (
    <Text style={[styles.text, styles[size], style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.third,
  },
  s: {
    fontSize: 12,
  },
  m: {
    fontSize: 24,
  },
  l: {
    fontSize: 36,
  },
  xl: {
    fontSize: 48,
  },
});
