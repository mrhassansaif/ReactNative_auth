import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const SSignup = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleLogin = () => {
    // Perform login logic here (e.g., API calls, authentication, etc.)
    // For this example, we'll simply navigate to another screen
    if (isNewUser) {
      navigation.navigate('SignUp');
    } else {
      navigation.navigate('LoggedIn');
    }
  };

  const handleToggleUserType = () => {
    setIsNewUser(!isNewUser);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, width: 200 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, width: 200 }}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={{ marginTop: 10 }}>
        Already a user{' '}
        <Text
          style={{ color: 'blue', textDecorationLine: 'underline' }}
          onPress={() => navigation.navigate('Login')}
        >
          Login In
        </Text>
      </Text>
    </View>
  );
};

export default SSignup;
