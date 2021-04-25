import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'tailwind-rn';
import Login from '@pages/Login';
import HomeRoutes from 'pages/HomeRoutes';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <SafeAreaView style={tailwind('flex flex-1 bg-gray-100')}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={HomeRoutes} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
