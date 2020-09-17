import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const data = [
  {key: 1, district: 'Solukhumbu', zone: 'Sagarmatha'},
  {key: 2, district: 'Sankhuwasabha', zone: 'Koshi'},
  {key: 3, district: 'Taplejung', zone: 'Mechi'},
  {key: 4, district: 'Okhaldhunga', zone: 'Sagarmatha'},
  {key: 5, district: 'Khotang', zone: 'Sagarmatha'},
  {key: 6, district: 'Bhojpur', zone: 'Koshi'},
  {key: 7, district: 'Terhathum', zone: 'Koshi'},
  {key: 8, district: 'Panchthar', zone: 'Koshi'},
  {key: 9, district: 'Udayapur', zone: 'Sagarmatha'},
  {key: 10, district: 'Dhankuta', zone: 'Koshi'},
  {key: 11, district: 'Illam', zone: 'Mechi'},
  {key: 12, district: 'Sunsari', zone: 'Koshi'},
  {key: 13, district: 'Morang', zone: 'Koshi'},
  {key: 14, district: 'Jhapa', zone: 'Mechi'},
];

const Province1 = () => {
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
    backgroundColor: '#5552',
    margin: 2,
  },
});

export default Province1;
