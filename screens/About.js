import React from 'react';
import {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const About = () => {
  return (
    <Fragment>
      <View style={styles.background}>
        <Text style={styles.logoStyle}> Province Nepal </Text>
      </View>

      <View style={styles.about}>
        <Text style={styles.text}>
          This Nepal Province app is created using React Native. You can search
          District to find the Respective Zone and Province.
        </Text>
        <Text style={styles.text}>Developer - Rbnph</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  about: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  background: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f0eeee',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
  },
  text: {
    backgroundColor: '#f0eeee',
    paddingHorizontal: 20,
    fontSize: 20,
  },
  logoStyle: {
    fontSize: 22,
  },

  iconStyle: {
    paddingHorizontal: 16,
  },
});

export default About;
