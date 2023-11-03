import { StyleSheet, Text, ScrollView, Image } from 'react-native';

const aboutGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`

const whatGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`

const AboutScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.pics}
                source={require('../components/img/arch640.jpg')}
            />
            <Text style={styles.aboutTitle}>Who We Are</Text>
            <Text style={styles.aboutText}>{aboutGlobo}</Text>
            <Image
                style={styles.pics}
                source={require('../components/img/computer640.jpg')}
            />
            <Text style={styles.aboutTitle}>What We Do</Text>
            <Text style={styles.aboutText}>{whatGlobo}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingTop: 20
    },
    pics: {
        height: 300
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center'
    },
    aboutText: {
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default AboutScreen;