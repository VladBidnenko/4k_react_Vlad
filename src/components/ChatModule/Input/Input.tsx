import { TextInput, View } from "react-native";
import defaultStyles from './styles';
import { useState } from "react";
import IconButton from "../../IconButton/IconButton";

const Input = (props: any) => {
  const styles = defaultStyles();
  const [text, setText] = useState('');

  function change(text: string) {
    setText(text);
  };

  function submit() {
    props.onPressEnter(text);
    setText('');
  };

  return (
    <>
      <View style={styles.root}>
        <IconButton
          name={'mic'}
          size={22}
        />
        <TextInput
          placeholder={"Start typing..."}
          value={text}
          style={styles.textInput}
          onChangeText={change}
          onSubmitEditing={submit}
        />
      </View>
    </>
  )
}

export default Input;
