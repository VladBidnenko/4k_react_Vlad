import { StyleSheet } from "react-native";

export default () => {
  return StyleSheet.create({
    root: {
      width: '100%',
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
      borderRadius: 5,
      borderColor: '#333',
    },
    textInput: {
      width: '90%',
      padding: 10,
      fontSize: 16,
      borderWidth: 1,
      borderRadius: 6,
      borderColor: '#333',

    }
  })
}
