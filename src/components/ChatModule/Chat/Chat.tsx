import { View } from 'react-native';
import defaultStyles from './styles';
import { useState } from 'react';
import Header from '../Header/Header';
import Send from '../Send/Send';
import Scroll from '../Scroll/Scroll';

export default function Chat() {
  const styles = defaultStyles();
  const users = [
    { id: '1', name: 'User1', surname: 'User1' },
    { id: '2', name: 'User2', surname: 'User2' },
    { id: '3', name: 'User3', surname: 'User3' },
  ];
  const initialMessages = [
    { id: '1', text: 'Message id 1', from: users[0] },
    { id: '2', text: 'Message id 2', from: users[1] },
    { id: '3', text: 'Message id 3', from: users[2] },
    { id: '4', text: 'Message id 3', from: users[2], sourceReply: { id: '1', text: 'Message id 1', from: users[0] } },
    { id: '5', text: 'Message id 4', from: users[0] },
    { id: '6', text: 'Message id 5', from: users[0], sourceReply: { id: '2', text: 'Message id 2', from: users[1] }  },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const addMessage = (text: string): void => {
    setMessages([...messages, {
      id: (messages.length + 1).toString(),
      text: text,
      from: users[2],
    }]);
  };

  return (
    <View style={styles.root}>
      <Header />
      <View style={styles.board}>
        <Scroll messages={messages} userId={'3'} />
      </View>
      <Send onAddMessage={addMessage} />
    </View>
  );
}
