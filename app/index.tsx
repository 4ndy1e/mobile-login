import React from 'react';
import {Text, View, StyleSheet, ImageBackground, TextInput, Button, Pressable} from 'react-native';
import { JumpingTransition } from 'react-native-reanimated';

const image = {uri:'https://img.freepik.com/premium-photo/purple-wallpaper-iphone-is-best-high-definition-iphone-wallpaper-you-can-make-this-wallpaper-your-iphone-x-backgrounds-mobile-screensaver-ipad-lock-screen-wallpaper-mobile_899894-1815.jpg'};

const index = () => {
  const [number, onChangeNumber] = React.useState('');


  return (
    <View style={styles.bodyContainer}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}> 
        <Text style={styles.signUp}> Sign Up! </Text>
        <Text style={styles.phonePrompt}> Enter your phone number </Text>
        <View style={{alignItems:'center', flex:1,}}> 
          <TextInput
          style={styles.phoneContainer}
          placeholder='+1 (000) (000)-(0000)'>
          </TextInput>
          <Pressable style={styles.enterButton}> 
            <Text style={styles.enterText}> Enter </Text> 
          </Pressable>
          <Text style={styles.alternativeText}> OR ENTER WITH </Text>
        </View>
        
      </View>

    </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex:3,
    backgroundColor: 'red',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    width: '100%',
    backgroundColor: 'white',
    height: '50%',
    borderRadius: 40,
  },
  signUp: {
    textAlign: 'center',
    padding: 20,
    fontSize: 40,
    fontFamily: 'Freemono',  },
  phonePrompt: {
    color: 'gray',
    textAlign: 'center',
    padding: 10,
  },
  phoneContainer: {
    borderWidth: 1,
    width: '90%',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(250, 250, 250)',
    marginBottom: 20,

  },
  enterButton: {
    borderWidth: 1,
    borderColor: '#17121a',
    borderRadius: 10,
    width: '90%',
    backgroundColor: '#c58ae3',
    textAlign: 'center',
    padding: 20,
    shadowColor: '#17121a',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  enterText: {
    textAlign: 'center',
    color: '#17121a',
  },
  alternativeText: {
    marginTop: 40,
    color: 'gray',
  },

});

export default index;