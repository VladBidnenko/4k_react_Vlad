import { Text, View } from "react-native";

export default function Post(props: any) {
  return (
      <View style={{gap: 40, padding: 15}}>
        <Text>
          {props.title}
          {props.description}
          {props.author}
          {props.publishedAt}
        </Text>
      </View>
  );
};
