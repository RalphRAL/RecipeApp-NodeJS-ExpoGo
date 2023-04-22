import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import Details from './components/Details';
import LandingPage from './components/LandingPage';
import 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='LandingPage' component={LandingPage} options={{title:"Cram Gaming Recipe App", 
        headerStyle:{backgroundColor:'#1d1d29'
          },headerTintColor:"#1d1d29", headerTitleStyle:{fontWeight:'bold', color:'white'}}}/>
        <Stack.Screen name ='Home' component={HomeScreen} options={{title:"Home", 
        headerStyle:{backgroundColor:'#1d1d29'
          },headerTintColor:"white", headerTitleStyle:{fontWeight:'bold', color:'white'}}}/>
        <Stack.Screen name ='Details' component={Details} options={{title:"Details", 
        headerStyle:{backgroundColor:'#1d1d29'
          },headerTintColor:"white", headerTitleStyle:{fontWeight:'bold', color:'white',}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
