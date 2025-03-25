// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // If you're using Expo, otherwise use another icon library

// Import your screens
import HomeScreen from '../screens/Home/HomeScreen';
import BuyAnimalScreen from '../screens/BuyAnimal/BuyAnimalScreen';
import AnimalSellScreen from '../screens/AnimalSell/AnimalSellScreen';
import MarketplaceScreen from '../screens/Marketplace/MarketplaceScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home Stack
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Buy Animals Stack
const BuyStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Buy Animals" component={BuyAnimalScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Sell Animals Stack
const SellStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Sell Animals" component={AnimalSellScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Marketplace Stack
const MarketplaceStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Marketplace" component={MarketplaceScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Profile Stack
const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeTab') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'BuyTab') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'SellTab') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'MarketplaceTab') {
              iconName = focused ? 'grid' : 'grid-outline';
            } else if (route.name === 'ProfileTab') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#005F45', // Use your primary color
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false, title: 'Home' }} />
        <Tab.Screen name="BuyTab" component={BuyStack} options={{ headerShown: false, title: 'Buy' }} />
        <Tab.Screen name="SellTab" component={SellStack} options={{ headerShown: false, title: 'Sell' }} />
        <Tab.Screen name="MarketplaceTab" component={MarketplaceStack} options={{ headerShown: false, title: 'Market' }} />
        <Tab.Screen name="ProfileTab" component={ProfileStack} options={{ headerShown: false, title: 'Profile' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;