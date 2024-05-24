import React from 'react';
import {StyleSheet} from 'react-native';
import {AppText} from '../../../shared/ui/AppText';

export const HelpContent = () => {
  return <AppText style={styles.text}>Здесь будет объяснение что к чему</AppText>;
};

const styles = StyleSheet.create({
  text: {},
});
