import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import tailwind from 'tailwind-rn';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from '@pages/Login';
import HomeRoutes from 'pages/HomeRoutes';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={tailwind('flex flex-1 bg-gray-100')}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <Stack.Navigator initialRouteName="Login" mode="modal">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Home"
            component={HomeRoutes}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
