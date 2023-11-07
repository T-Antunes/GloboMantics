import { StyleSheet, Text, View, Pressable } from 'react-native';

const QuizFinish = ({ route, navigation }) => {
    const { score, missed, questions } = route.params;

    const exitQuiz = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text>Your quiz score was {score}</Text>
            <Text>You missed on {missed} out of {questions} questions</Text>

            <Pressable onPress={exitQuiz} style = {styles.button}>
                <Text>Finish Quiz</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        backgroundColor: '#ffffff',
        width: 100
    }
});

export default QuizFinish;