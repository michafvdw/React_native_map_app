//import * as React from 'react';
import React, {useState, useContext} from 'react';


import { Button, View, Text, Switch, Stylesheet } from 'react-native';
//
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Map  from "./mapView"; // Import a component from another file
import { EventRegister  } from 'react-native-event-listeners'; //https://www.youtube.com/watch?v=EfIHqvJraRQ
import themeContext from './themeContext'


function HomeScreen({ navigation }) {
    const theme = useContext(themeContext);
    const [mode, setMode] = useState(false);
    return (
      <View style={{ backgroundColor: theme.background, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: theme.color}}>Home Screen</Text>
        <Switch value = {mode} 
            onValueChange = {(value) => {
            setMode(value);
            EventRegister.emit("changeTheme", value);
            }} />
        <Button
          title="Go to Reviews"
          onPress={() => navigation.navigate('Reviews')}
        />
        <Map>

        </Map>
      </View>
    );
  }

  export default HomeScreen;