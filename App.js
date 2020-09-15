import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  Sepa,
} from 'react-native';
import CenterImage from './test/CenterImage';
import Header from './components/Header';
import ListItem from './test/ListItem';

const App = () => {
  return (
    <SafeAreaView>
      <Header title="Nepal Province" />
      <View style={styles.container}>
        <CenterImage />
      </View>
      <ListItem />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 140,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
