import React from 'react';
import { View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import SLogin from './Componenets/Screens/StudentLogin/Login';
import SSignup from './Componenets/Screens/StudentLogin/SignUp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SLogin" component={SLogin} />
        <Stack.Screen name="SSignup" component={SSignup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('./assets/icon.png')}
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />
      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};

export default App;
