import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const data = [
  {key: 1, district: 'Mustang', zone: 'Dhaulagiri'},
  {key: 2, district: 'Manang', zone: 'Gandaki'},
  {key: 3, district: 'Myagdi', zone: 'Dhaulagiri'},
  {key: 4, district: 'Kaski', zone: 'Gandaki'},
  {key: 5, district: 'Gorkha', zone: 'Gandaki'},
  {key: 6, district: 'Baglung', zone: 'Dhaulagiri'},
  {key: 7, district: 'Parbat', zone: 'Dhaulagiri'},
  {key: 8, district: 'Lamjung', zone: 'Gandaki'},
  {key: 9, district: 'Syangja', zone: 'Gandaki'},
  {key: 10, district: 'Tanahu', zone: 'Gandaki'},
  {key: 11, district: 'Nawalparasi', zone: 'Lumbini'},
];

const Province4 = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({item}) => {
          return (
            <TouchableHighlight activeOpacity={0.8} underlayColor="#ddd">
              <View style={styles.viewItem}>
                <Text style={styles.items}>
                  {item.district} {'  '}--
                </Text>
                <Text style={styles.items}>{item.zone}</Text>
              </View>
            </TouchableHighlight>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  items: {
    fontSize: 20,
    padding: 10,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  viewItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#6662',
    margin: 2,
  },
});

export default Province4;
