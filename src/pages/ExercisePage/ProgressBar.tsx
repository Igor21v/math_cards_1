import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface Props {
  ansArr: boolean[];
}

export const ProgressBar = (props: Props) => {
  const {ansArr} = props;
  const Emojis = () =>
    ansArr.map((item, index) => {
      if (item) {
        return (
          <Image
            source={require('../../shared/emojis/Happy.png')}
            style={styles.emoji}
            key={index}
          />
        );
      }
      return (
        <Image source={require('../../shared/emojis/Sad.png')} style={styles.emoji} key={index} />
      );
    });

  return (
    <View style={styles.bar}>
      <Emojis />
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  emoji: {width: 24, height: 24},
});
