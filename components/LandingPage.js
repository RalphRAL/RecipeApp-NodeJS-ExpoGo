import * as React from 'react';
import { Button, ScrollView, Text,StyleSheet, TouchableOpacity, Image } from 'react-native';

function LandingPage({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
                Welcome to Cram Gaming Recipe App!
      </Text>
      <Image
        style={styles.logo}
        source={require('F:/BSIT CodesAndPrograms/ReactNativeApps/AppRecipe/AwesomeProject/assets/resto.png')}
      />
      
      <TouchableOpacity style={styles.bwwutton} onPress={() => navigation.navigate('Home')} title='Submit'>
       
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1d29',
  },
  heading: {
    fontSize: 43, 
    fontWeight: '800', 
    width: '90%', 
    color:'#ffffff', 
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '10vh',
    margin: '6%'
  },
  button: {
    backgroundColor: '#363b70',
    width: '40%',
    alignItems: 'center',
    margin: '30%',
    height: 35,
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 25,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
},
logo: {
  width: '80%',
  height: '50%',
  margin: '7%'
}
})

export default LandingPage;

