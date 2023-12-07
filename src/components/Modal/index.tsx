import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import logo from "../../assets/logo3.png";

interface ModalProps {
  isVisible: boolean;
  onBackdropPress: () => void;
  modalContent: string;
  handleCloseButton: () => void;
}

const CustomModal: React.FC<ModalProps> = ({
  isVisible,
  onBackdropPress,
  modalContent,
  handleCloseButton,
}) => {
  const [workTime, setWorkTime] = useState(1500); // 25 minutes in seconds
  const [breakTime, setBreakTime] = useState(300); // 5 minutes in seconds
  const [timer, setTimer] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkMode, setIsWorkMode] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimer(isWorkMode ? workTime : breakTime);
  }, [workTime, breakTime, isWorkMode]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            clearInterval(intervalId);
            setIsRunning(false);
            handleTimerFinish();
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, isWorkMode, workTime, breakTime]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const handleTimerFinish = () => {
    if (isWorkMode) {
      setTimer(breakTime);
      setIsWorkMode(false);
      setMessage("Momento de Descanso");
      startTimer();
    } else {
      setTimer(workTime);
      setIsWorkMode(true);
      setMessage("Voltando ao Trabalho!");
      startTimer();
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handleTimerButtonClick = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      startTimer();
    }
  };

  const handleModalClose = () => {
    resetTimer();
    handleCloseButton();
  };

  const resetTimer = () => {
    setTimer(workTime);
    setIsRunning(false);
    setIsWorkMode(true);
    setMessage("");
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={handleModalClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.7}
    >
      <View style={styles.containerModal}>
        <View style={styles.headerTopModal}>
          <Text style={styles.titleModal}>{modalContent}</Text>
          <TouchableOpacity onPress={handleModalClose}>
            <MaterialCommunityIcons name="close" size={22} color={"#FFFFFF"} />
          </TouchableOpacity>
        </View>
        <Image source={logo} style={styles.imageModal} />
        <Text style={styles.timerModal}>{formatTime(timer)}</Text>
        {message !== "" && <Text style={styles.message}>{message}</Text>}

        <View style={styles.inputContainer}>
          <Text style={styles.captionInput}>Tempo de trabalho (segundos)</Text>
          <TextInput
            style={styles.input}
            placeholder="Tempo de trabalho (segundos)"
            keyboardType="numeric"
            value={workTime.toString()}
            onChangeText={(text) => setWorkTime(parseInt(text) || 0)}
          />
          <Text style={styles.captionInput}>Tempo de Pausa (segundos)</Text>
          <TextInput
            style={styles.input}
            placeholder="Tempo de pausa (segundos)"
            keyboardType="numeric"
            value={breakTime.toString()}
            onChangeText={(text) => setBreakTime(parseInt(text) || 0)}
          />
        </View>

        <TouchableOpacity
          style={styles.buttonModal}
          onPress={handleTimerButtonClick}
        >
          <View style={styles.buttonContent}>
            <MaterialCommunityIcons
              name={isRunning ? "pause" : "play"}
              size={22}
              color={"#FFFFFF"}
            />
            <Text style={styles.buttonModalText}>
              {isRunning ? "Pausar Pomodoro" : "Iniciar Pomodoro"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CustomModal;
