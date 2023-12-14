import { StyleSheet } from "react-native";

export default () => {
  return StyleSheet.create({
    root: {
      flex: 1,
      gap: 20,
      backgroundColor: '#fff',
    },
    board: {
      flex: 1,
      padding: 20,
      paddingBottom: 0,
    },
  });
}
