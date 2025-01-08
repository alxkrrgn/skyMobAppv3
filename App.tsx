import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import Header from "./components/Header";
import FooterResponsive from "./src/components/FooterResponsive";
import Home from "./src/components/Home";
import About from "./src/components/About";
//import ContactGit from "./components/ContactGit";
//import Strategies from "./components/Strategies";
//import FlexBoxStockOptionsPage from "./components/FlexBoxStockOptionsPage";
//import Login from "./components/Login";
//import Register from "./components/Register";
//import GetStartedGit from "./components/GetStartedGit";
//import Dashboard from './components/Dashboard';
//import NavigationMenu from './components/NavigationMenu';

// Create a stack navigator for navigation
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/*<Header />*/}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Welcome' }} 
        />
        <Stack.Screen name="About" component={About} />
        {/*<Stack.Screen name="Contact" component={ContactGit} />*/}
        {/*<Stack.Screen name="Strategies" component={Strategies} />*/}
        {/*<Stack.Screen name="StockOptions" component={FlexBoxStockOptionsPage} />*/}
        {/*<Stack.Screen name="Login" component={Login} />*/}
        {/*<Stack.Screen name="Register" component={Register} />*/}
        {/*<Stack.Screen name="GetStarted" component={GetStartedGit} />*/}

        {/*<Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="NavigationMenu" component={NavigationMenu} />*/}
      </Stack.Navigator>
      <FooterResponsive />
    </NavigationContainer>
  );
}
