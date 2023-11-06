import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/views/Home.js';
import AboutScreen from './app/views/About.js';
import RegisterScreen from './app/views/Register.js';
import LoginScreen from './app/views/Login.js';
import GloboHeader from './app/components/Header.js';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
      >
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='About'
          component={AboutScreen}
          options={{ title: 'About Us' }}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ header: ()=><GloboHeader />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
