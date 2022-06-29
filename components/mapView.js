import * as React from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

 function Map() {
  const [pin, setPin] = React.useState ({
    latitude: 51.926517, 
    longitude: 4.462456,
  })

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAfeX4o0s12dDApm702kJh5f8ACcn91uuQ',
        language: 'en',
      }}
    />
       <MapView style={styles.map} 
       initialRegion={{
        latitude: 51.926517,
        longitude: 4.462456,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
        <Marker coordinate={pin}
        draggable={true}
        onDragStart={(e) =>{
          console.log("Drag start", e.nativeEvent.coordinates)
        }}
        onDragEnd={(e) =>{
          setPin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude

          })
        }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
        <Circle center = {pin}
          radius = {1000}></Circle>
      </MapView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'bottom',
    justifyContent: 'bottom',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map; 

//npm install react-native-google-places-autocomplete --save
//npm install react-native-maps
//https://www.youtube.com/watch?v=qlELLikT3FU