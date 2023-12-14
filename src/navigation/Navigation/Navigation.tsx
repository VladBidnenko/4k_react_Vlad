import React from "react";
import Posts from "@app/screens/posts/Posts";
import TabNavigation from "@app/navigation/Tabs/Tabs";
import ChatScreen from "@app/screens/ChatScreen/ChatScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Drawer from "@app/navigation/Drawer/Drawer";
const createDrawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <createDrawer.Navigator
          initialRouteName='Info'
          drawerContent={(props) => <Drawer {...props} />}
        >
          <createDrawer.Screen
            name='Chat'
            component={ChatScreen}
            options={{
              drawerLabel: 'Чат',
            }}
          />

          <createDrawer.Screen
            name='Info'
            component={TabNavigation}
            options={{
              drawerLabel: 'Інфо',
            }}
          />

          <createDrawer.Screen
            name='Posts'
            component={Posts}
            options={{
              drawerLabel: 'Новини'
            }}
          />
        </createDrawer.Navigator>
      </NavigationContainer>
  )
}
