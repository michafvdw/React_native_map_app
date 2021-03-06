import * as React from 'react';
import { Button, View, Text } from 'react-native';

function ReviewsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Reviews Screen</Text>
        <Button
          title="Go to Reviews. again"
          onPress={() => navigation.push('Reviews')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }

  export default ReviewsScreen;