import React from 'react';
import axios from 'axios';
import {View, Text, Alert, StyleSheet, Image} from 'react-native';
import {Loading} from '../../shared/ui/Loading';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/types/route';

interface dataType {
  title: string;
  description: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'FullPost'>;

export const FullPostScreen = ({route, navigation}: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState<dataType>();
  const {id, title} = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title,
    });
    axios
      .get('https://webitem.ru/api/items/' + id)
      .then(({data}) => {
        setData(data);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статью');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={{padding: 20}}>
      <Image
        source={{uri: `https://webitem.ru/static/items/${data?.title}.png`}}
        style={styles.postImage}
      />
      <Text style={styles.postText}>{data?.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postImage: {
    borderRadius: 10,
    width: '100%',
    height: 250,
    marginBottom: 20,
  },
  postText: {
    fontSize: 18,
    lineHeight: 24,
  },
});
