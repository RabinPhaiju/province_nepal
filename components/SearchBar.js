import React from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Math.round(Dimensions.get('window').width);

const SearchBar = ({navigation, serach, onSearchChagne}) => {
  return (
    <View style={styles.background}>
      <Icon
        onPress={() => navigation.pop()}
        name="arrow-back"
        size={30}
        color="#000"
        style={styles.iconStyle}
      />
      <TextInput
        placeholder="Search District / Zone"
        style={styles.inputStyle}
        value={serach}
        onChangeText={(newText) => onSearchChagne(newText)}
      />
      <Icon name="search" size={32} color="#0008" style={styles.iconStyle} />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f0eeee',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  logoStyle: {
    fontSize: 20,
  },
  inputStyle: {
    width: screenWidth * 0.6,
    fontSize: 18,
  },
  iconStyle: {
    marginHorizontal: 10,
  },
});

export default SearchBar;
