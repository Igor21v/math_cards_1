import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface Props {
  ansCount: number;
}

export const ProgressBar = (props: Props) => {
  const {ansCount} = props;
  const Emojis = () => (
    <>
      {Array.from(Array(10), (item, index) => {
        if (index < ansCount) {
          return (
            <Image
              source={require('../../shared/emojis/Happy.png')}
              style={styles.emoji}
              key={index}
            />
          );
        }
        return (
          <Image
            source={require('../../shared/emojis/Dotted.png')}
            style={styles.emoji}
            key={index}
          />
        );
      })}
    </>
  );

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
    gap: 2,
  },
  emoji: {width: 24, height: 24},
});
