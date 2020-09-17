import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const data = [
  {key: 1, district: 'Humla', zone: 'Karnali'},
  {key: 2, district: 'Mugu', zone: 'Karnali'},
  {key: 3, district: 'Kalikot', zone: 'Karnali'},
  {key: 4, district: 'Jumla', zone: 'Karnali'},
  {key: 5, district: 'Dolpa', zone: 'Karnali'},
  {key: 6, district: 'Dailekh', zone: 'Bheri'},
  {key: 7, district: 'Jajarkot', zone: 'Bheri'},
  {key: 8, district: 'Rukum', zone: 'Rapti'},
  {key: 9, district: 'Surkhet', zone: 'Bheri'},
  {key: 10, district: 'salyan', zone: 'Rapti'},
];

const Province6 = () => {
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

export default Province6;
