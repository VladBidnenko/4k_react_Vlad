import { StyleSheet } from "react-native";

export default ({ size }: { size: number }) => {
  return StyleSheet.create({
    root: {
      alignItems: 'center'
    },
    image: {
      width: size,
      borderRadius: size / 2,
      height: size,
    },
    label: {
      width: '100%',
      maxWidth: size,
      textAlign: 'center',
      fontWeight: '700',
    }
  })
}