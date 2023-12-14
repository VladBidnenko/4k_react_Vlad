import { Text, View } from "react-native";
import Avatar from "@app/components/Avatar/Avatar";
import defaultStyles from './styles';

export default function Personal() {
  const styles = defaultStyles();
  const textContainers = [
    { first: 'Освітній ступінь: ', second: 'Бакалавр' },
    { first: 'Факультет: ', second: 'ФЕТАМ' },
    { first: 'Спеціальність: ', second: 'Кібербезпека' },
    { first: 'Освітня програма: ', second: 'Кібербезпека' },
    { first: 'Хобі: ', second: 'Метання ядра' },
  ];
  const source = require('@app/assets/img/rector.jpeg');

  return (
    <View style={styles.root}>
        <Avatar source={source} size={100} />
        <View>
          {textContainers.map((textContainer, index) => 
            <View key={index}>
              <Text >
                {textContainer.first}
                {textContainer.second}
              </Text>
            </View>
          )}
        </View>
      </View>
  )
}
