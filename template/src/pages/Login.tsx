import React from 'react';
import { Button, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import tailwind from 'tailwind-rn';

interface LoginProps {
  navigation: NavigationProp<any, any>;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <View style={tailwind('flex flex-1 items-center justify-center')}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Login;
