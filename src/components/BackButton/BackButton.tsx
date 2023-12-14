import { Text, TouchableHighlight, View } from 'react-native';
import defaultStyles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BackButton({ iconName, label, onPress }: any) {
  const styles = defaultStyles();

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.root}>
        <Icon name={iconName} size={40} />
        <Text style={styles.label}>
          {label}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
