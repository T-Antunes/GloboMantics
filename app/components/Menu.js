import {
    StyleSheet,
    View,
    Pressable,
    Text,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <Pressable
                    style={styles.buttonStyles}
                    onPress={() => navigation.navigate('Videos')}
                >
                    <Text style={styles.buttonText}>Lessons</Text>
                </Pressable>
                <Pressable
                    style={styles.buttonStyles}
                    onPress={() => navigation.navigate('Quiz')}
                >
                    <Text style={styles.buttonText}>Quiz</Text>
                </Pressable>
            </View>
            <View style={[styles.buttonRow , styles.border]}>
                <Pressable
                    style={styles.buttonStyles}
                    onPress={() => navigation.navigate('Blog')}
                >
                    <Text style={styles.buttonText}>Blog</Text>
                </Pressable>
                <Pressable
                    style={styles.buttonStyles}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </Pressable>
            </View>
            <View style={styles.bottomRow}>
                <Pressable
                    style={styles.bottomButtonStyles}
                    onPress={() => navigation.navigate('About')}
                >
                    <Text style={styles.buttonText}>About GloboMantics</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#35605a'
    },
    bottomRow: {
        alignSelf: 'flex-end',
    },
    bottomButtonStyles: {
        alignSelf: 'flex-end',
        backgroundColor: '#35605a',
        width: '100%',
        paddingRight: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        backgroundColor: '#35605a',
    },
    buttonRow: {
        flexDirection: 'row',
    },
    buttonStyles: {
        backgroundColor: '#35605a',
        width: '50%',
        alignItems: 'center'
    },
    border: {
        borderColor: '#ffffff',
        borderBottomWidth: 1
    }
});

export default Menu;