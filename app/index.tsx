import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      {/* text styles */}
      <View> 
        <Text style={styles.bigBlue}> I am big blue text </Text>
        <Text style={styles.red}> I am red text muhahah</Text>
        <Text style={styles.bigYellow}> I am big yellow bird </Text>
      </View>

      {/* height and width with container */}
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingTop: 10,
    flex:1,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  bigYellow: {
    color: 'orange',
    fontSize: 50,
    fontWeight: 'bold'
  },
  box1: {
    flex: 1,
    backgroundColor: 'powderblue',
    width: '25%',
    height: 50,
  },
  box2: {
    flex: 1,
    backgroundColor: 'skyblue',
    width: '50%',
    height: 100,
  },
  box3: {
    flex: 1,
    backgroundColor: 'steelblue',
    height: 200,
    width: '100%',
  },

});

export default index;