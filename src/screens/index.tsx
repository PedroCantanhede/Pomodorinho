import React, { useRef, useState } from "react";
import { FlatList, Text, View, Alert, TextInput } from "react-native";
import { Empty } from "../components/Empty";
import { Header } from "../components/Header";
import { Task } from "../components/Task";
import { TaskDTO } from "../dtos/TaskDTO";
import { uuid } from "../utils/uuid";
import { styles } from "./styles";

import CustomModal from "../components/Modal";

export function HomeScreen() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTask, setNewTask] = useState("");
  const newTaskInputRef = useRef<TextInput>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  function handleTaskAdd() {
    if (newTask !== "" && newTask.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: uuid(), isCompleted: false, title: newTask.trim() },
      ]);

      setNewTask("");

      newTaskInputRef.current?.blur();
    }
  }

  function handleTaskDone(id: string) {
    setTasks((task) =>
      task.map((task) => {
        task.id === id ? (task.isCompleted = !task.isCompleted) : null;
        return task;
      })
    );
  }

  const handleCloseButton = () => {
    setModalVisible(false);
  };

  function handleTaskDeleted(id: string) {
    Alert.alert("Excluir tarefa", "Deseja excluir esta tarefa?", [
      {
        text: "Sim",
        style: "default",
        onPress: () =>
          setTasks((tasks) => tasks.filter((task) => task.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const handleTaskPress = (id: string, title: string) => {
    setModalContent(`${title}`);
    setModalVisible(true);
    setButtonText("Texto do Botão");
  };

  const totalTasksCreated = tasks.length;
  const totalTasksCompleted = tasks.filter(
    ({ isCompleted }) => isCompleted
  ).length;

  const [buttonText, setButtonText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headerTop}></View>
      <Header
        inputRef={newTaskInputRef}
        task={newTask}
        onChangeText={setNewTask}
        onPress={handleTaskAdd}
      />

      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Tarefas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTasksCreated}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluídas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTasksCompleted}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              onTaskDone={() => handleTaskDone(item.id)}
              onTaskDeleted={() => handleTaskDeleted(item.id)}
              onPress={() => handleTaskPress(item.id, item.title)}
              {...item}
            />
          )}
          ListEmptyComponent={<Empty />}
        />
      </View>

      <CustomModal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        modalContent={modalContent}
        handleCloseButton={handleCloseButton}
      />
    </View>
  );
}
