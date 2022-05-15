import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity} from "react-native";
import LogInScreen from './LogInScreen';

const SignUpScreen = () => {
    function handleLogIn(){
        setSigned(true)
    }
    return(
        <View style = {styles.container}>
            <Text style = {styles.Text1}>
                Create Account
            </Text>

            <View style = {{marginTop: 30, backgroundColor: 'white', width: '100%', height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput style = {{fontSize: 15, color: '#EC407A'}} placeholder="Enter first name"/>
            </View>

            <View style = {{marginTop: 30, backgroundColor: 'white', width: '100%', height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput style = {{fontSize: 15, color: '#EC407A'}} placeholder="Enter middle name"/>
            </View>

            <View style = {{marginTop: 30, backgroundColor: 'white', width: '100%', height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput style = {{fontSize: 15, color: '#EC407A'}} placeholder="Enter last name"/>
            </View>

            <View style = {{marginTop: 30, backgroundColor: 'white', width: '100%', height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput style = {{fontSize: 15, color: '#EC407A'}} placeholder="Enetr Email" />
            </View>

            <View style = {{marginTop: 30, backgroundColor: 'white', width: '100%', height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput style = {{fontSize: 15, color: '#EC407A'}} placeholder="Create Password" />
            </View>

            <View style = {{marginTop: 20, backgroundColor: 'white', width: '100%', height: 40, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput style = {{fontSize: 15, color: '#EC407A'}} placeholder="Confirm Password" />
            </View>

            <TouchableOpacity style = {styles.Button} onPress = {LogInScreen}>
                <Text style = {{fontSize: 15, fontWeight: 'bold', letterSpacing: 1, color: '#EC407A'}}>
                    Submit
                </Text>
            </TouchableOpacity>

            <Text style = {{fontSize: 15, fontWeight: 'bold', letterSpacing: 1, color: '#EC407A', marginTop: 20, marginBottom: 10}}>
                Already have an Account ?
            </Text>
                <Pressable onPress = {{handleLogIn}}>
                    <View style = {{height: 40, width: 150, alignContent: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', marginTop: 5, borderRadius: 20}}>
                        <Text style = {{fontSize: 15, color: '#EC407A'}}>
                            Log In
                        </Text>
                    </View>
                </Pressable>
            </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        width: '100%',
        height: '100%',
    },

    Text1: {
        fontSize: 20,
        marginBottom: 5,
        color: '#EC407A',
    },

    Button: {
        marginTop: 20,
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: 'white'
    },


})   