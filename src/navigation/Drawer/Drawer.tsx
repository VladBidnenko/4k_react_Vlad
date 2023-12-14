import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Linking } from "react-native";

export default function Drawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label='Сайт чдту'
          onPress={() => Linking.openURL('https://chdtu.edu.ua/')}
        />
    </DrawerContentScrollView>
  );
}
