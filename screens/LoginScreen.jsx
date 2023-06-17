import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  Alert,
} from "react-native";

import Title from "../components/Title";
import RegistrationInput from "../components/RegistrationInput";
import HeroButton from "../components/HeroButton";
import RegistrationLink from "../components/RegistrationLink";
import MainBackground from "../components/MainBackground";
import { useState } from "react";
import { commonStyles } from "../components/commonStyles";
import { Pressable } from "react-native";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePressShowButton = () => {
    setShowPassword(true);
  };

  const HandleLogin = () => {
    Alert.alert(
      "Дані логінізації:",
      `
      електронна пошта: ${email}
      пароль: ${password}`
    );
  };
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <MainBackground>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingViewStyles}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View style={styles.form}>
            <Title
              customStyles={{
                marginTop: 92,
                marginBottom: 12,
              }}
            >
              Увійти
            </Title>
            <RegistrationInput
              name="email"
              value={email}
              placeholder="Адреса електронної пошти"
              keyboardType={"email-address"}
              onChangeText={setEmail}
            />
            <View>
              <RegistrationInput
                name="password"
                value={password}
                placeholder="Пароль"
                secureTextEntry={!showPassword}
                onChangeText={setPassword}
              ></RegistrationInput>
              {!showPassword && (
                <Pressable
                  style={styles.showButton}
                  onPress={handlePressShowButton}
                >
                  <Text style={styles.showButtonText}>Показати</Text>
                </Pressable>
              )}
            </View>
          </View>
          <HeroButton onPress={HandleLogin}>Увійти</HeroButton>
          <RegistrationLink>Немає акаунту? Зареєструватися</RegistrationLink>
        </View>
      </KeyboardAvoidingView>
    </MainBackground>
    /* </TouchableWithoutFeedback> */
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 549,
    color: commonStyles.vars.colorText,
    backgroundColor: commonStyles.vars.colorWhite,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
    gap: 16,
  },
  keyboardAvoidingViewStyles: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  showButton: {
    position: "absolute",
    top: "50%",
    right: 16,
    transform: [{ translateY: -8 }],
  },
  showButtonText: { ...commonStyles.fonts, color: "#1B4371" },
});

export default LoginScreen;
