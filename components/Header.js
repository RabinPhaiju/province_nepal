import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({navigation}) => {
  return (
    <View style={styles.background}>
      <Text style={styles.logoStyle}> Province Nepal </Text>
      <Text style={styles.iconStyle} onPress={() => navigation.push('List')}>
        <Icon name="search" size={40} selectionColor="grey" color="#0008" />
      </Text>
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
  },
  logoStyle: {
    fontSize: 22,
  },

  iconStyle: {
    paddingHorizontal: 16,
  },
});

export default Header;
