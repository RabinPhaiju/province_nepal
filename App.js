import React, {useState, Fragment} from 'react';
import {View, Button, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from './screens/HomeStack';
import About from './screens/About';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Province">
          <Drawer.Screen name="Province" component={HomeStack} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Fragment>
  );
};

export default App;
