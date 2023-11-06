import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const GloboHeader = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedUser, setLoggedUser] = useState('');
    const navigation = useNavigation();

    const toggleUser = () => {
        if (isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                setIsLoggedIn(false);
                setLoggedUser('');
                Alert.alert('User logged out');
                console.log('User logged out');
            })
        }
        else {
            navigation.navigate('Login');
        }
    };

    useEffect(() => {
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if (result === 'none') {
                console.log('NONE');
            }
            else if (result === null) {
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('Set user to NONE');
                })
            }
            else {
                setIsLoggedIn(true);
                setLoggedUser(result);
            }
        })
    });
    let display = isLoggedIn ? loggedUser : 'Tap to Login';

    return (
        <View style={styles.headStyle}>
            <Image
                style={styles.imageStyle}
                source={require('./img/Globo_logo_REV.png')}
            />
            <Text
                style={styles.headText}
                onPress={toggleUser}
            >
                {display}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headStyle: {
        backgroundColor: '#35605a',
        flexDirection: 'row',
    },
    imageStyle: {
        alignSelf: 'flex-start',
        height: 75,
        width: 150,
        flex: 1
    },
    headText: {
        textAlign: 'right',
        alignSelf: 'center',
        color: '#ffffff',
        flex: 1,
        paddingRight: 15
    }
});

export default GloboHeader;