
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please complete all fields.');
      return;
    }

    router.push('/dashboard' as any);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>RESQ-MESH</Text>
      <Text style={styles.subtitle}>Emergency Communication System</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>RESQ-MESH | Mobile Application</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FA',
    justifyContent: 'center',
    padding: 30,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1565C0',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#607D8B',
    textAlign: 'center',
    marginBottom: 45,
  },
  form: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#263238',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CFD8DC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#1565C0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    textAlign: 'center',
    color: '#90A4AE',
    marginTop: 40,
    fontSize: 12,
  },
});
