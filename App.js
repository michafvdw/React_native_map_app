import React, {useState, useEffect} from 'react';

//import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from "./components/homeScreen"; // Import a component from another file
import  ReviewsScreen  from "./components/reviewsScreen"; // Import a component from another file
import { EventRegister } from 'react-native-event-listeners'; //https://www.youtube.com/watch?v=EfIHqvJraRQ
import themeContext from './components/themeContext'
import theme from './components/theme'



const Stack = createNativeStackNavigator();

function App() {

  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
        console.log(data);
      }
    );
    /*
    return () => {
      EventRegister.removeEventlistener(eventListener);
    };*/
  });

  return (
    

    <themeContext.Provider value ={mode === true ? theme.dark : theme.light}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
         
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
          
        />
        <Stack.Screen
          name="Reviews"
          component={ReviewsScreen}
          options={{
            title: 'My Reviews ',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>


    </NavigationContainer>
    </themeContext.Provider>


    
  );
}

export default App;