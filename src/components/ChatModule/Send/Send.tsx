import { View } from "react-native";
import Input from "../Input/Input";
import defaultStyles from './styles';
import IconButton from "../../IconButton/IconButton";

export default function Send ({ addMessage }: any) {
  const styles = defaultStyles();
  function Enter (text: string) {
    addMessage(text);
  };

  return (
    <>
      <View style={styles.root}>
        <View>
          <IconButton
            name={'photo-camera'}
            size={30}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input onPressEnter={Enter} />
        </View>
        <View>
          <IconButton
            name={'send'}
            size={30}
          />
        </View>
      </View>
    </>
  );
}
