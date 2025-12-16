import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Colors } from '../constants/Colors';

const LoginScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login pressed', { username, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        {/* Header/Kom Veilig Thuis section */}
        <View style={styles.header}>
          {/* This would be your logo/header content */}
        </View>

        <View style={styles.formContainer}>
          {/* Username Field */}
          <Text style={styles.label}>Gebruikersnaam</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="Voer uw gebruikersnaam in"
              placeholderTextColor="#999"
            />
          </View>

          {/* Password Field */}
          <Text style={styles.label}>Wachtwoord</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Voer uw wachtwoord in"
              placeholderTextColor="#999"
              secureTextEntry
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 80,
    marginTop: 90,
    marginBottom: 90,
    borderRadius: 20,
  },
  header: {
    height: 326,
    width: '100%',
    backgroundColor: '#920f69',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 60,
  },
  label: {
    color: '#1e1e1e',
    fontSize: 32,
    fontFamily: 'Merriweather',
    marginBottom: 10,
    marginLeft: 10,
  },
  inputContainer: {
    backgroundColor: '#757575',
    height: 80,
    borderRadius: 8,
    marginBottom: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  input: {
    color: '#ffffff',
    fontSize: 28,
    fontFamily: 'Merriweather',
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#ad1313',
    height: 176,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 64,
    fontFamily: 'Merriweather',
    letterSpacing: -2.3,
  },
});

export default LoginScreen;
