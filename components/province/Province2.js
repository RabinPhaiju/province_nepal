import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const data = [
  {key: 1, district: 'Parsa', zone: 'Narayani'},
  {key: 2, district: 'Bara', zone: 'Narayani'},
  {key: 3, district: 'Rautahat', zone: 'Narayani'},
  {key: 4, district: 'Sarlahi', zone: 'Janakpur'},
  {key: 5, district: 'Mahottari', zone: 'Janakpur'},
  {key: 6, district: 'Dhanusa', zone: 'Janakpur'},
  {key: 7, district: 'Siraha', zone: 'Sagarmatha'},
  {key: 8, district: 'Saptari', zone: 'Sagarmatha'},
];

const Province2 = () => {
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

export default Province2;
