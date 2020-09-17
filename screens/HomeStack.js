import React, {useState, Fragment} from 'react';
import {View, Button, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ListItem from '../components/ListItem';
import DetailPage from '../components/DetailPage';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Fragment>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Province"
          component={DetailPage}
          // options={({route}) => ({
          //   title: route.params.name,
          // })}
        />
        <Stack.Screen name="List" component={ListItem} />
      </Stack.Navigator>
    </Fragment>
  );
};

export default HomeStack;
