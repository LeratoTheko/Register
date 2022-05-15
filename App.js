import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import LogInScreen from './LogInScreen';
import SignUpScreen from './SignUpScreen';

export default function App() {
  const [SignedUp, setSignedUp] = useState(false);
  return (
    <View style={styles.container}>
      <View style = {{width: '100%', height: 80, backgroundColor: '#EEEEEE', justifyContent: 'center'}}>
        <View style = {{marginLeft: 15}}>
          <TouchableOpacity>
            <AntDesign name = "menu-unfold" size = {30} color = "#EC407A" />
          </TouchableOpacity>
        
        </View>
      </View>

      {SignedUp ? <LogInScreen/> : <SignUpScreen setSignedUp = {setSignedUp}/>}
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',

  },
});
