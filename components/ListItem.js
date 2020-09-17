import React, {useState, useEffect} from 'react';
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
import SearchBar from './SearchBar';

const ListItem = ({navigation}) => {
  const DATA = [
    {key: 1, province: '1', district: 'Solukhumbu', zone: 'Sagarmatha'},
    {key: 2, province: '1', district: 'Sankhuwasabha', zone: 'Koshi'},
    {key: 3, province: '1', district: 'Taplejung', zone: 'Mechi'},
    {key: 4, province: '1', district: 'Okhaldhunga', zone: 'Sagarmatha'},
    {key: 5, province: '1', district: 'Khotang', zone: 'Sagarmatha'},
    {key: 6, province: '1', district: 'Bhojpur', zone: 'Koshi'},
    {key: 7, province: '1', district: 'Terhathum', zone: 'Koshi'},
    {key: 8, province: '1', district: 'Panchthar', zone: 'Koshi'},
    {key: 9, province: '1', district: 'Udayapur', zone: 'Sagarmatha'},
    {key: 10, province: '1', district: 'Dhankuta', zone: 'Koshi'},
    {key: 11, province: '1', district: 'Illam', zone: 'Mechi'},
    {key: 12, province: '1', district: 'Sunsari', zone: 'Koshi'},
    {key: 13, province: '1', district: 'Morang', zone: 'Koshi'},
    {key: 14, province: '1', district: 'Jhapa', zone: 'Mechi'},
    {key: 15, province: '2', district: 'Parsa', zone: 'Narayani'},
    {key: 16, province: '2', district: 'Bara', zone: 'Narayani'},
    {key: 17, province: '2', district: 'Rautahat', zone: 'Narayani'},
    {key: 18, province: '2', district: 'Sarlahi', zone: 'Janakpur'},
    {key: 19, province: '2', district: 'Mahottari', zone: 'Janakpur'},
    {key: 20, province: '2', district: 'Dhanusa', zone: 'Janakpur'},
    {key: 21, province: '2', district: 'Siraha', zone: 'Sagarmatha'},
    {key: 22, province: '2', district: 'Saptari', zone: 'Sagarmatha'},
    {key: 23, province: '3', district: 'Chitwan', zone: 'Narayani'},
    {key: 24, province: '3', district: 'Dhading', zone: 'Bagmati'},
    {key: 25, province: '3', district: 'Rasuwa', zone: 'Bagmati'},
    {key: 26, province: '3', district: 'Nuwakot', zone: 'Bagmati'},
    {key: 27, province: '3', district: 'Sindupalchowk', zone: 'Bagmati'},
    {key: 28, province: '3', district: 'Kathmandu', zone: 'Bagmati'},
    {key: 29, province: '3', district: 'Bhaktapur', zone: 'Bagmati'},
    {key: 30, province: '3', district: 'Lalitpur', zone: 'Bagmati'},
    {key: 31, province: '3', district: 'Makwanpur', zone: 'Narayani'},
    {key: 32, province: '3', district: 'Kavrepalanchowk', zone: 'Bagmati'},
    {key: 33, province: '3', district: 'Ramechhap', zone: 'Janakpur'},
    {key: 34, province: '3', district: 'Sindhuli', zone: 'Janakpur'},
    {key: 35, province: '3', district: 'Dolkha', zone: 'Janakpur'},
    {key: 36, province: '4', district: 'Mustang', zone: 'Dhaulagiri'},
    {key: 37, province: '4', district: 'Manang', zone: 'Gandaki'},
    {key: 38, province: '4', district: 'Myagdi', zone: 'Dhaulagiri'},
    {key: 39, province: '4', district: 'Kaski', zone: 'Gandaki'},
    {key: 40, province: '4', district: 'Gorkha', zone: 'Gandaki'},
    {key: 41, province: '4', district: 'Baglung', zone: 'Dhaulagiri'},
    {key: 42, province: '4', district: 'Parbat', zone: 'Dhaulagiri'},
    {key: 43, province: '4', district: 'Lamjung', zone: 'Gandaki'},
    {key: 44, province: '4', district: 'Syangja', zone: 'Gandaki'},
    {key: 45, province: '4', district: 'Tanahu', zone: 'Gandaki'},
    {key: 46, province: '4', district: 'Nawalparasi', zone: 'Lumbini'},
    {key: 47, province: '5', district: 'Rukum East', zone: 'Rapti'},
    {key: 48, province: '5', district: 'Baglung West', zone: 'Dhaulagiri'},
    {key: 49, province: '5', district: 'Rolpa', zone: 'Rapti'},
    {key: 50, province: '5', district: 'Gulmi', zone: 'Lumbini'},
    {key: 51, province: '5', district: 'Pyuthan', zone: 'Rapti'},
    {key: 52, province: '5', district: 'Arghakhanchi', zone: 'Lumbini'},
    {key: 53, province: '5', district: 'Palpa', zone: 'Lumbini'},
    {key: 54, province: '5', district: 'Bardiya', zone: 'Bheri'},
    {key: 55, province: '5', district: 'Banke', zone: 'Bheri'},
    {key: 56, province: '5', district: 'Dang', zone: 'Rapti'},
    {key: 57, province: '5', district: 'Kapilbastu', zone: 'Lumbini'},
    {key: 58, province: '5', district: 'Rupandehi', zone: 'Lumbini'},
    {key: 59, province: '5', district: 'Nawalparasi West', zone: 'Lumbini'},
    {key: 60, province: '6', district: 'Humla', zone: 'Karnali'},
    {key: 61, province: '6', district: 'Mugu', zone: 'Karnali'},
    {key: 62, province: '6', district: 'Kalikot', zone: 'Karnali'},
    {key: 63, province: '6', district: 'Jumla', zone: 'Karnali'},
    {key: 64, province: '6', district: 'Dolpa', zone: 'Karnali'},
    {key: 65, province: '6', district: 'Dailekh', zone: 'Bheri'},
    {key: 66, province: '6', district: 'Jajarkot', zone: 'Bheri'},
    {key: 67, province: '6', district: 'Rukum', zone: 'Rapti'},
    {key: 68, province: '6', district: 'Surkhet', zone: 'Bheri'},
    {key: 69, province: '6', district: 'salyan', zone: 'Rapti'},
    {key: 70, province: '7', district: 'Darchula', zone: 'Mahakali'},
    {key: 71, province: '7', district: 'Baitadi', zone: 'Mahakali'},
    {key: 72, province: '7', district: 'Bajhang', zone: 'Seti'},
    {key: 73, province: '7', district: 'Bajura', zone: 'Seti'},
    {key: 74, province: '7', district: 'Dadeldhura', zone: 'Mahakali'},
    {key: 75, province: '7', district: 'Doti', zone: 'Seti'},
    {key: 76, province: '7', district: 'Accham', zone: 'Seti'},
    {key: 77, province: '7', district: 'Kanchanpur', zone: 'Mahakali'},
    {key: 78, province: '7', district: 'Kailali', zone: 'Seti'},
    {key: 79, province: '', district: 'z', zone: ''},
  ];
  const [search, setSearch] = useState('');

  useEffect(() => {
    // DATA.sort((a, b) => (a.district > b.district ? 1 : -1));
  }, [search]);

  return (
    <SafeAreaView>
      <SearchBar
        navigation={navigation}
        search={search}
        onSearchChagne={(newSearch) => setSearch(newSearch)}
      />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.key.toString()}
        // horizontal
        // snapToInterval={100}
        // decelerationRate={'fast'}
        renderItem={({item}) => {
          return item.district.toLowerCase().includes(search.toLowerCase()) ? (
            <TouchableHighlight
              style={styles.items}
              activeOpacity={0.8}
              underlayColor="#ddd">
              <View style={styles.text}>
                <Text style={styles.text}>
                  {item.province}
                  {'. '}
                  {item.district} {'  --  '} {item.zone}
                </Text>
              </View>
            </TouchableHighlight>
          ) : null;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  items: {
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 10,
    borderRadius: 4,
    backgroundColor: '#6662',
  },
  text: {
    fontSize: 20,
  },
});

export default ListItem;
