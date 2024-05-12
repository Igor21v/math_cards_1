import {Image, StyleSheet, Text, View} from 'react-native';

const truncateTitle = str => {
  if (str.length >= 50) {
    return str.substring(0, 50) + '...';
  }

  return str;
};

// date-fns => format

export const Post = ({title, imageUrl, createdAt}) => {
  return (
    <View style={styles.postView}>
      <Image source={{uri: imageUrl}} style={styles.postImage} />
      <View style={styles.postDetails}>
        <Text style={styles.postTitle}>{truncateTitle(title)}</Text>
        <Text style={styles.postDate}>
          {new Date(createdAt).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postView: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderStyle: 'solid',
  },
  postImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  postTitle: {
    fontSize: 17,
    fontWeight: 700,
  },
  postDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  postDate: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.4)',
    marginTop: 2,
  },
});
