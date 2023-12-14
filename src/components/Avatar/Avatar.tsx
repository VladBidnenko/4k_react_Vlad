import { Image, Text, View } from "react-native";

import defaultStyles from './styles';

export default function Avatar(props: any) {
  const styles = defaultStyles({ size: props.size });

  return (
    <View style={styles.root}>
    <Image
      style={styles.image}
      source={props.source}
    />
    { props.label !== '' && 
      <Text style={styles.label}>
        {props.label}
      </Text>
    }
  </View>
  )
}