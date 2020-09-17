import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const data = [
  {key: 1, district: 'Darchula', zone: 'Mahakali'},
  {key: 2, district: 'Baitadi', zone: 'Mahakali'},
  {key: 3, district: 'Bajhang', zone: 'Seti'},
  {key: 4, district: 'Bajura', zone: 'Seti'},
  {key: 5, district: 'Dadeldhura', zone: 'Mahakali'},
  {key: 6, district: 'Doti', zone: 'Seti'},
  {key: 7, district: 'Accham', zone: 'Seti'},
  {key: 8, district: 'Kanchanpur', zone: 'Mahakali'},
  {key: 9, district: 'Kailali', zone: 'Seti'},
];

const Province7 = () => {
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

export default Province7;
