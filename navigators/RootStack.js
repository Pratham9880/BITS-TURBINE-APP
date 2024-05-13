import React from 'react'

import{Colors}  from './../Components/styles'
const {primary,black, tertiary}=Colors;
//screens
import Login from './../Screen/Login';
import Signup from './../Screen/Signup';
import Welcome from './../Screen/Welcome';

import Plant1 from './../Screen/Plant1';
import Plant2 from'./../Screen/Plant2';
//React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack= createNativeStackNavigator();

const  RootStack=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyled:{
                    backgroundColor: 'transparent'
                },
                headerTintColor:tertiary,
                headerTranspert: true,
                headerTitle:'',
                headerLeftContainerStyle:{
                    paddingLeft:20
                }
            }}
            initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>

                <Stack.Screen name="Plant1" component={Plant1}/>
                <Stack.Screen options={{headerTintColor:black}} name="Welcome" component={Welcome}/>
                <Stack.Screen name="Plant2" component={Plant2}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;