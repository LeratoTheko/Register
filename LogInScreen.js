import React from "react";
import { StyleSheet, Text, Veiw, TextInput, TouchableOpacity } from "react-native";
import {  } from "react-native-web";
import SignUpScreen from './SignUpScreen';

const LogInScreen = () => {
    return (
        <Veiw style = {styles.container}>
            <Text style = {{color: '#EC407A', fontSize: 20}}>
                Sign In
            </Text>

            <View style = {{marginTop: 30, backgroundColor: 'white', width: '100%', height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput style = {{fontSize: 15, color: '#EC407A'}} placeholder="Enetr Email" />
            </View>

            <View style = {{marginTop: 30, backgroundColor: 'white', width: '100%', height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput style = {{fontSize: 15, color: '#EC407A'}} placeholder="Enetr password" />
            </View>

            <Text style = {{fontSize: 15, color: 'white', marginTop: 20,}}>
                Not Registered ?
            </Text>

            <TouchableOpacity onPress = {SignUpScreen}>
                <Veiw style = {{alignContent: 'center', alignItems: 'center', backgroundColor: 'green', height: 25, width: 100, }}>
                    <Text style = {{fontSize: 15, color: 'white'}}>
                        Sign Up
                    </Text>
                </Veiw>
            </TouchableOpacity>
        </Veiw>
        
    )
}

export default LogInScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        width: '100%',
        height: '100%',
    }
})