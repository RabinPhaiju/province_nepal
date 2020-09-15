import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';

const ListItem = () => {
  const [people, setPeople] = useState([
    {key: '1', title: 'First Item'},
    {key: '2', title: 'Second Item'},
    {key: '3', title: 'Third Item'},
    {key: '4', title: 'First Item'},
    {key: '5', title: 'Second Item'},
    {key: '6', title: 'Third Item'},
    {key: '7', title: 'First Item'},
    {key: '8', title: 'Second Item'},
    {key: '9', title: 'Third Item'},
    {key: '10', title: 'First Item'},
    {key: '11', title: 'Second Item'},
    {key: '12', title: 'Third Item'},
    {key: '13', title: 'First Item'},
    {key: '14', title: 'Second Item'},
    {key: '15', title: 'Third Item'},
    {key: '16', title: 'First Item'},
    {key: '17', title: 'Second Item'},
    {key: '18', title: 'Third Item'},
    {key: '19', title: 'First Item'},
    {key: '20', title: 'Second Item'},
    {key: '21', title: 'Third Item'},
    {key: '22', title: 'First Item'},
    {key: '23', title: 'Second Item'},
    {key: '24', title: 'Third Item'},
  ]);
  return (
    <FlatList
      data={people}
      renderItem={({item}) => {
        return (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => alert('Pressed!')}>
            <Text style={styles.item}>{item.title}</Text>
          </TouchableHighlight>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 14,
    margin: 2,
    borderRadius: 4,
    backgroundColor: '#6662',
  },
});

export default ListItem;
