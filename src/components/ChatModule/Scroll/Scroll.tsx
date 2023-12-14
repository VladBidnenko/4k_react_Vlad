import { ScrollView } from "react-native";
import defaultStyles from './styles';
import MessageContainer from "../Message/Message";

export default function Scroll({ messages, userId }: any) {
  const styles = defaultStyles();

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {messages.map((message: any) => 
        <MessageContainer
        key={message.id}
          id={message.id}
          text={message.text}
          sourceReply={message.sourceReply}
          isMyMessage={userId === message.from.id}
          from={message.from}
        />
      )}
    </ScrollView>
  );
}
