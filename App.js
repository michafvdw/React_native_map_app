import * as React from "react";

// Importing components from react-native library.
import { View, Text } from "react-native";
import  Map  from "./components/mapView"; // Import a component from another file


function App() {
return (
	// Using react-natives built in components.
	<View>
  
      
      <Text  
        style={{
        color: "black",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',

        fontSize: 50,
        width: 100,
        height: 100,
        }}>
        mislukte header
      </Text>
  <Map>

  </Map>

	</View>
);
}


 export default App; 