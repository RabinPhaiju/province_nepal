import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const data = [
  {key: 1, district: 'Chitwan', zone: 'Narayani'},
  {key: 2, district: 'Dhading', zone: 'Bagmati'},
  {key: 3, district: 'Rasuwa', zone: 'Bagmati'},
  {key: 4, district: 'Nuwakot', zone: 'Bagmati'},
  {key: 5, district: 'Sindupalchowk', zone: 'Bagmati'},
  {key: 6, district: 'Kathmandu', zone: 'Bagmati'},
  {key: 7, district: 'Bhaktapur', zone: 'Bagmati'},
  {key: 8, district: 'Lalitpur', zone: 'Bagmati'},
  {key: 9, district: 'Makwanpur', zone: 'Narayani'},
  {key: 10, district: 'Kavrepalanchowk', zone: 'Bagmati'},
  {key: 11, district: 'Ramechhap', zone: 'Janakpur'},
  {key: 12, district: 'Sindhuli', zone: 'Janakpur'},
  {key: 13, district: 'Dolkha', zone: 'Janakpur'},
];

const Province3 = () => {
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

export default Province3;
