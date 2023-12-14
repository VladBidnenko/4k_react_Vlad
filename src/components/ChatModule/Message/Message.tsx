import { Text, View, Image} from "react-native";
import defaultStyles from './styles';
import Icon from "react-native-vector-icons/MaterialIcons";

export default function MessageContainer(props: any) {
  const styles = defaultStyles({ isMyMessage: props.isMyMessage });

  return (
    <>
      <View style={styles.root}>
        <View style={styles.content}>
          <View>
            <View>
              <Image
                style={styles.image}
                source={require('../../../assets/img/rector.jpeg')}
              />
            </View>
          </View>
          <View style={styles.contentContainer}>
            {props.sourceReply && 
            <>
              <View style={styles.iconContainer}>
                <Icon name={'reply'} />
                <Text style={styles.iconText}>
                  Replied to {props.from.fistName}
                </Text>
              </View>

              <View style={styles.replyContainer}>
                <Text style={styles.replyText}>
                  {props.sourceReply?.text}
                </Text>
              </View>
            </>
            }
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {props.text}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}
