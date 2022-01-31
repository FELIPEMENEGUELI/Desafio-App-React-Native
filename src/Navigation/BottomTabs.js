import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text} from 'react-native';
import {HomeNavigation} from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function ShowBottomTabs(){
    return(
        <Tab.Navigator 
        screenOptions={{
            headerShown:false, 
            unmountOnBlur:true, 
            tabBarShowLabel: false, 
            tabBarStyle: {height: 50}
            }}>

            <Tab.Screen 
                name="HomeTab" 
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({focused}) =>(
                        <>
                        <Icon name="home" size={20} color={focused ? '#00BFDF' : '#808080'} />
                        <Text
                         allowFontScaling={false}
                         style={{
                             color: focused ? '#00BFDF' : '#808080',
                             fontSize: 15,
                             textAlign: 'center'
                         }}>Home</Text>
                        </>
                    )
                }}
            />

        </Tab.Navigator>
    )
}