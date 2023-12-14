import React from "react";
import { TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function IconButton({ name, size, onPress }: any) {
  return (
    <TouchableHighlight onPress={onPress}>
        <View>
          <Icon
            name={name}
            size={size}
            color={'#007300'}
          />
        </View>
      </TouchableHighlight>
  );
}
