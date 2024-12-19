import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from './screens/UserListScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';
import AddUserScreen from './screens/AddUserScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={{ title: 'User Directory' }}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetailsScreen}
          options={{ title: 'User Details' }}
        />
       <Stack.Screen name="AddUser" component={AddUserScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
