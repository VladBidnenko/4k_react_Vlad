import { StyleSheet } from "react-native";

export default () => {
  return StyleSheet.create({
    root: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      fontSize: 20,
      textTransform: 'capitalize',
      marginLeft: -6,
    },
  });
};
