import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../theme";
import { TaskDTO } from "../../dtos/TaskDTO";

type TasksProps = TaskDTO & {
  onTaskDone: (id: string) => void;
  onTaskDeleted: (id: string) => void;
  onPress: () => void;
};

export function Task({
  id,
  title,
  isCompleted,
  onTaskDone,
  onTaskDeleted,
  onPress,
}: TasksProps) {
  const handleDonePress = () => {
    onTaskDone(id);
  };

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.taskContainer}>
          <MaterialCommunityIcons
            name={
              isCompleted
                ? "checkbox-marked-circle-outline"
                : "checkbox-blank-circle-outline"
            }
            size={22}
            color={
              isCompleted ? theme.colors.brand.green : theme.colors.brand.red
            }
            onPress={handleDonePress}
          />
          <View style={styles.textContainer}>
            <Text style={isCompleted ? styles.textDone : styles.textCreated}>
              {title}
            </Text>
          </View>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={20}
            color={theme.colors.base.gray300}
            onPress={() => onTaskDeleted(id)}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
