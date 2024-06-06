import React from 'react';
import {View, Text, Alert, StyleSheet, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';

type Props = NativeStackScreenProps<RootStackParamList, 'Line'>;

export const LinePage = ({route, navigation}: Props) => {
  return (
    <View>
      <Text style={styles.postText}>Line Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postText: {
    fontSize: 18,
    lineHeight: 24,
  },
});
