import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Login, Home, Splash} from '../Pages';
import ShowBottomTabs from './BottomTabs';

const Stack = createStackNavigator();
export default function LoginNavigation(){
    return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name ="Splash" component={Splash}/>
        <Stack.Screen name ="Login" component={Login} />
        <Stack.Screen name ="Home" component={ShowBottomTabs}/>
    </Stack.Navigator>
    )
}

export function HomeNavigation(){

    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}