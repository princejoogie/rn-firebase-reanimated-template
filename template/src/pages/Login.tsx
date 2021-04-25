import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import tailwind from 'tailwind-rn';

interface LoginProps {
  navigation: NavigationProp<any, any>;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <View style={tailwind('flex flex-1 items-center justify-center')}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={tailwind('px-4 py-2 bg-gray-300 rounded')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
