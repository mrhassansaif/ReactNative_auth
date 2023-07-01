import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Screen 2</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen1')}
      />
    </View>
  );
};

export default Screen1;
