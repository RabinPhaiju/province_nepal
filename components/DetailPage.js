import React, {Fragment} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Province1 from './province/Province1';
import Province2 from './province/Province2';
import Province3 from './province/Province3';
import Province4 from './province/Province4';
import Province5 from './province/Province5';
import Province6 from './province/Province6';
import Province7 from './province/Province7';
import Header from './Header';

const Tab = createMaterialTopTabNavigator();

const DetailPage = ({navigation}) => {
  return (
    <Fragment>
      <Header navigation={navigation} />
      <Tab.Navigator>
        <Tab.Screen name="1" component={Province1} />
        <Tab.Screen name="2" component={Province2} />
        <Tab.Screen name="3" component={Province3} />
        <Tab.Screen name="4" component={Province4} />
        <Tab.Screen name="5" component={Province5} />
        <Tab.Screen name="6" component={Province6} />
        <Tab.Screen name="7" component={Province7} />
      </Tab.Navigator>
    </Fragment>
  );
};
export default DetailPage;
