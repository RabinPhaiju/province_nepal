import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const data = [
  {key: 1, district: 'Rukum East', zone: 'Rapti'},
  {key: 2, district: 'Baglung West', zone: 'Dhaulagiri'},
  {key: 3, district: 'Rolpa', zone: 'Rapti'},
  {key: 4, district: 'Gulmi', zone: 'Lumbini'},
  {key: 5, district: 'Pyuthan', zone: 'Rapti'},
  {key: 6, district: 'Arghakhanchi', zone: 'Lumbini'},
  {key: 7, district: 'Palpa', zone: 'Lumbini'},
  {key: 8, district: 'Bardiya', zone: 'Bheri'},
  {key: 9, district: 'Banke', zone: 'Bheri'},
  {key: 10, district: 'Dang', zone: 'Rapti'},
  {key: 11, district: 'Kapilbastu', zone: 'Lumbini'},
  {key: 12, district: 'Rupandehi', zone: 'Lumbini'},
  {key: 13, district: 'Nawalparasi West', zone: 'Lumbini'},
];

const Province5 = () => {
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

export default Province5;
