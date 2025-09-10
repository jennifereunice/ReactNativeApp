/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Button , Text } from 'react-native';
import { NavigationContainer , ParamListBase,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator ,NativeStackNavigationProp} from '@react-navigation/native-stack';



import {ActionScreen} from "./Screens/ActionScreen";

import {BasicViewScreen} from "./Screens/BasicViewScreen";

import BottomNavigationScreen from "./Screens/BottomNavigationScreen";

import {ViewPager} from "./Screens/ViewPager";

import {ListView} from "./Screens/ListView";

import {WebViewScreen} from "./Screens/WebViewScreen";

import {SwipeRefreshLayout} from "./Screens/SwipeRefreshLayout";

import { PossibleSizes } from "./Screens/PossibleSizes";

import {ScrollViews} from "./Screens/ScrollViews";

import {VisibilityViews} from "./Screens/VisibilityViews";

import {RecyclerView} from "./Screens/RecyclerView";

import {PopUpScreen} from "./Screens/PopUpScreen";

import {ChangeScreen} from "./Screens/ChangeScreen";

import { SetFontActivity } from "./Screens/SetFontActivity";

import {FragmentScreen} from "./Screens/FragmentScreen";
import { HorizontalScrollViews } from "./Screens/HorizontalScrollViews";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Actions: undefined;
  'Basic Views': undefined;


  'Bottom Navigation': undefined;
  'View Pager': undefined;
  'Web View': undefined;
  'main-activity-event': undefined;
  'Pop Up Activity': undefined;
  'Agora Activity': undefined;
   // add all Basic Views children
  "Change Screen": undefined;
  "List View": undefined;
  "Fragments": undefined;
  "Recycler View": undefined;
  "Visibility Views": undefined;
  "Possible Shapes": undefined;
  "Possible Sizes": undefined;
  "Scroll Views": undefined;
  "Horizontal Scroll Views": undefined;
  "Swipe Refresh Layout": undefined;
  "Set Font Activity":undefined;
  "Set Attributes":undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
type HomeScreenNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;


function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello Jennifer!</Text>
      <Text style={styles.subtitle}>
        If you see this update, Fast Refresh is working 
      </Text>

      <TouchableOpacity
  style={[styles.button, { backgroundColor: "#634ba7ff" }]}
  onPress={() => navigation.navigate('Details')}>

  <Text style={styles.buttonText}>Go to Details</Text>
</TouchableOpacity>

<TouchableOpacity
        style={[styles.button, { backgroundColor: "#634ba7ff" }]}
        onPress={() => navigation.navigate("Actions")}
      >
        <Text style={styles.buttonText}>Actions</Text>
      </TouchableOpacity>

      <TouchableOpacity
       style={[styles.button, { backgroundColor: "#634ba7ff" }]}
        onPress={() => navigation.navigate("Basic Views")}
      >
        <Text style={styles.buttonText}>Basic Views</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#634ba7ff" }]}
        onPress={() => navigation.navigate("Bottom Navigation")}
      >
        <Text style={styles.buttonText}>Bottom Navigation</Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={[styles.button, { backgroundColor: "#634ba7ff" }]}
        onPress={() => navigation.navigate("View Pager")}
      >
        <Text style={styles.buttonText}>View Pager</Text>
      </TouchableOpacity>

      <TouchableOpacity
       style={[styles.button, { backgroundColor: "#634ba7ff" }]}
        onPress={() => navigation.navigate("Web View")}
      >
        <Text style={styles.buttonText}>Web View</Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={[styles.button, { backgroundColor: "#634ba7ff" }]}
        onPress={() => navigation.navigate("main-activity-event")}
      >
        <Text style={styles.buttonText}>Main Activity Event</Text>
      </TouchableOpacity>

      <TouchableOpacity
       style={[styles.button, { backgroundColor: "#634ba7ff" }]}
        onPress={() => navigation.navigate("Pop Up Activity")}
      >
        <Text style={styles.buttonText}>Pop Up Activity</Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={[styles.button, { backgroundColor: "#634ba7ff" }]}
        onPress={() => navigation.navigate("Agora Activity")}
      >
        <Text style={styles.buttonText}>Agora Activity</Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={[styles.button, { backgroundColor: "#634ba7ff" }]}
        onPress={() => navigation.navigate("Set Font Activity")}
      >
        <Text style={styles.buttonText}>Set Font Activity</Text>
      </TouchableOpacity>

      
      
      

    </SafeAreaView>
  );
}
// export function ActionScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>⚡ Actions Screen</Text>
//     </SafeAreaView>
//   );
// }







export function MainActivityEventScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Main Activity Event Screen</Text>
    </SafeAreaView>
  );
}


export function AgoraActivityScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🎥 Agora Activity Screen</Text>
    </SafeAreaView>
  );
}

function DetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>This is the Details Screen</Text>
    </SafeAreaView>
  );
}

function App() {
//  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>               
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={HomeScreen} />     
        <Stack.Screen name="Details" component={DetailsScreen} />
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
        <Stack.Screen name="main-activity-event" component={MainActivityEventScreen} />  
        <Stack.Screen name="Pop Up Activity" component={PopUpScreen} />  
        <Stack.Screen name="Set Font Activity" component={SetFontActivity} /> 
        <Stack.Screen name="Agora Activity" component={AgoraActivityScreen} />  
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF4500',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
  },

  button: {
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 8,
  marginVertical: 6,
},
buttonText: {
  color: "white",
  fontSize: 16,
  fontWeight: "bold",
  textAlign: "center",
},
});




export default App;
