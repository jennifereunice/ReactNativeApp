import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer, DrawerActions, useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RNApxorSDK from 'react-native-apxor-sdk';

// Import screens
import { ActionScreen } from './Screens/ActionScreen';
import { BasicViewScreen } from './Screens/BasicViewScreen';
import BottomNavigationScreen from './Screens/BottomNavigationScreen';
import { ViewPager } from './Screens/ViewPager';
import { ListView } from './Screens/ListView';
import { WebViewScreen } from './Screens/WebViewScreen';
import { SwipeRefreshLayout } from './Screens/SwipeRefreshLayout';
import { PossibleSizes } from './Screens/PossibleSizes';
import { ScrollViews } from './Screens/ScrollViews';
import { VisibilityViews } from './Screens/VisibilityViews';
import { RecyclerView } from './Screens/RecyclerView';
import { PopUpScreen } from './Screens/PopUpScreen';
import { ChangeScreen } from './Screens/ChangeScreen';
import { SetFontActivity } from './Screens/SetFontActivity';
import { SetAttributes } from './Screens/SetAttributes';
import { FragmentScreen } from './Screens/FragmentScreen';
import { HorizontalScrollViews } from './Screens/HorizontalScrollViews';

import FabComponent from './Components/FabComponent';
import HomeTopBar from './Components/HomeTopBar';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Actions: undefined;
  'DrawerScreens': undefined;
  'Basic Views': undefined;
  'Bottom Navigation': undefined;
  'View Pager': undefined;
  'Web View': undefined;
  'main-activity-event': undefined;
  'Pop Up Activity': undefined;
  'Agora Activity': undefined;
  'Change Screen': undefined;
  'List View': undefined;
  'Fragments': undefined;
  'Recycler View': undefined;
  'Visibility Views': undefined;
  'Possible Sizes': undefined;
  'Scroll Views': undefined;
  'Horizontal Scroll Views': undefined;
  'Swipe Refresh Layout': undefined;
  'Set Font Activity': undefined;
  'Set Attributes': undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavProp>();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Bar */}
      <HomeTopBar />

      {/* Scrollable content for all buttons */}
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Actions')}>
          <Text style={styles.buttonText}>Actions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Basic Views')}>
          <Text style={styles.buttonText}>Basic Views</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bottom Navigation')}>
          <Text style={styles.buttonText}>Bottom Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('View Pager')}>
          <Text style={styles.buttonText}>View Pager</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Web View')}>
          <Text style={styles.buttonText}>Web View</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pop Up Activity')}>
          <Text style={styles.buttonText}>Pop Up Activity</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Set Font Activity')}>
          <Text style={styles.buttonText}>Set Font Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Set Attributes')}>
          <Text style={styles.buttonText}>Set Attributes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// Drawer screens
function ProfileScreen() {
  return (
    <View style={styles.centered}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.centered}>
      <Text>Settings Screen</Text>
    </View>
  );
}

// Drawer Navigator
function DrawerScreens() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 220,
          backgroundColor: '#F0F8FF',
        },
        drawerType: 'front',
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Actions" component={ActionScreen} />
      <Drawer.Screen name="Basic Views" component={BasicViewScreen} />
    </Drawer.Navigator>
  );
}

// Main App
export default function App() {
  const navigationRef = useNavigationContainerRef();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            const currentRoute = navigationRef?.getCurrentRoute();
            if (currentRoute) RNApxorSDK.trackScreen(currentRoute.name);
          }}
          onStateChange={() => {
            const currentRoute = navigationRef?.getCurrentRoute();
            if (currentRoute) RNApxorSDK.trackScreen(currentRoute.name);
          }}
        >
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrawerScreens" component={DrawerScreens} />
            <Stack.Screen name="Actions" component={ActionScreen} />
            <Stack.Screen name="Basic Views" component={BasicViewScreen} />
            <Stack.Screen name="Change Screen" component={ChangeScreen} />
            <Stack.Screen name="Bottom Navigation" component={BottomNavigationScreen} />
            <Stack.Screen name="View Pager" component={ViewPager} />
            <Stack.Screen name="Possible Sizes" component={PossibleSizes} />
            <Stack.Screen name="Web View" component={WebViewScreen} />
            <Stack.Screen name="List View" component={ListView} />
            <Stack.Screen name="Swipe Refresh Layout" component={SwipeRefreshLayout} />
            <Stack.Screen name="Scroll Views" component={ScrollViews} />
            <Stack.Screen name="Visibility Views" component={VisibilityViews} />
            <Stack.Screen name="Horizontal Scroll Views" component={HorizontalScrollViews} />
            <Stack.Screen name="Recycler View" component={RecyclerView} />
            <Stack.Screen name="Fragments" component={FragmentScreen} />
            <Stack.Screen name="Pop Up Activity" component={PopUpScreen} />
            <Stack.Screen name="Set Font Activity" component={SetFontActivity} />
            <Stack.Screen name="Set Attributes" component={SetAttributes} />
          </Stack.Navigator>
        </NavigationContainer>
        <FabComponent />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topbar: {
    width: '100%',
    backgroundColor: '#7b57adff',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    marginVertical: 8,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: '#7b5ad8',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
