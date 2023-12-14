import React from "react";
import Personal from "@app/screens/personal/personal";
import Icon from "react-native-vector-icons/MaterialIcons";
import Kafedra from "@app/screens/Kafedra/Kafedra";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tabs = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <>
      <Tabs.Navigator initialRouteName='AboutUs' screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name='AboutUs'
          component={Kafedra}
          options={{
            tabBarLabel: 'Кафедра',
            tabBarIcon: ({ color, size }) => ( <Icon name='apartment' color={color} size={size} />)
          }}
        />
        <Tabs.Screen
          name='Profile'
          component={Personal}
          options={{
            tabBarLabel: 'Я',
            tabBarIcon: ({ color, size }) => ( <Icon name='person' color={color} size={size} />),
          }}
        />
      </Tabs.Navigator>
    </>
  )
}
