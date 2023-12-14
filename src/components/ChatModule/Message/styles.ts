import { StyleSheet } from "react-native";

export default ({ isMyMessage }: { isMyMessage: boolean}) => {
  return StyleSheet.create({
    root: {
      maxWidth: '100%',
      width: '100%',
      flexDirection: 'row',
      justifyContent: isMyMessage ? 'flex-end' : 'flex-start',
    },
    image: {
      width: 30,
      height: 30,
      borderRadius: 30,
    },
    contentContainer: {
      alignItems: isMyMessage ? 'flex-end' : 'flex-start',
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      paddingBottom: 10,
    },
    iconText: {
      color: '#666'
    },
    textContainer: {
      padding: 12,
      backgroundColor: '#ababab',
      borderRadius: 30,
    },
    content: {
      flexDirection: isMyMessage ? 'row-reverse' : 'row',
      alignItems: 'flex-end',
      maxWidth: '75%',
      width: '100%',
      gap: 5,
    },
    replyContainer: {
      padding: 10,
      backgroundColor: '#ddd',
      borderRadius: 40,
      marginBottom: -5,
      marginLeft: isMyMessage ? 0 : -10,
      marginRight: isMyMessage ? -10 : 0,
    },
    replyText: {
      color: '#555',
      fontSize: 16,
    },
    text: {
      color: '#000',
      fontSize: 16,
    },
  });
}
