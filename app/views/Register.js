import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const cancelRegister = () => {
        Alert.alert('Registration cancelled');
        console.log('Registration cancelled');
        navigation.navigate('Home');
    };

    const registerAccount = () => {
        if (!userName) {
            Alert.alert('Please enter a username');
            console.log('Please enter a username');
        }
        else if ( password !== passwordConfirm){
            Alert.alert('Passwords do not match');
            console.log('Passwords do not match');
        }
        else {
            AsyncStorage.getItem(userName, (err, result) => {
                if (result !== null) {
                    Alert.alert(`Username '${userName}' already exists`);
                    console.log(`Username '${userName}' already exists`);
                }
                else {
                    AsyncStorage.setItem(userName, password, (err, result) => {
                        Alert.alert(`${userName} account created`);
                        console.log(`${userName} account created`);
                        navigation.navigate('Home');
                    });
                }
            });
        }
    };
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Register account</Text>
            <TextInput 
                style={styles.inputs}
                onChangeText={setUserName}
                value={userName}
            />
            <Text style={styles.labels}>Enter Username</Text>
            <TextInput 
                style={styles.inputs}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <Text style={styles.labels}>Enter password</Text>
            <TextInput 
                style={styles.inputs}
                onChangeText={setPasswordConfirm}
                value={passwordConfirm}
                secureTextEntry={true}
            />
            <Text style={styles.labels}>Confirm password</Text>

            <Pressable onPress={registerAccount} underlayColor='#000000'>
                <Text style={styles.buttons}>Register</Text>
            </Pressable>

            <Pressable onPress={cancelRegister} underlayColor='#000000'>
                <Text style={styles.buttons}>Cancel</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '5%'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputs: {
        width: '80%',
        marginTop: 12,
        borderWidth: 1,
        height: 45,
        fontSize: 16,
        color: '#000000'
    },
    buttons: {
        padding: 15,
        margin: 5,
        fontSize: 16,
        backgroundColor: '#DDDDDD',
        width: 150,
        height: 50,
        textAlign: 'center'
    },
    labels: {
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default RegisterScreen;