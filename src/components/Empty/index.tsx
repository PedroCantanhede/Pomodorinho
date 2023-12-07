import { Image, Text, View } from "react-native";
import annoyed from "../../assets/annoyed.png";
import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.emptyContainer}>
      <Image source={annoyed} style={styles.image} />
      <Text style={styles.textBold}>Você ainda não possui tarefas!</Text>
      <Text style={[styles.textBold, styles.textRegular]}>
        Crie suas tarefas e aplique o pomodoro
      </Text>
    </View>
  );
}
