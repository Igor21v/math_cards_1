import React from 'react';
import {View, Text, Alert, StyleSheet, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';

type Props = NativeStackScreenProps<RootStackParamList, 'Compare'>;

export const ComparePage = ({route, navigation}: Props) => {
  const {maxNum, type} = route.params;

  return (
    <View>
      <Text style={styles.postText}>Compare Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postText: {
    fontSize: 18,
    lineHeight: 24,
  },
});
