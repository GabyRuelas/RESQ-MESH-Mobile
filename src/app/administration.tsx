
import { useRouter } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function AdministrationScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Administration</Text>
      <Text style={styles.subtitle}>
        RESQ-MESH System Management
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Device Management</Text>
        <Text style={styles.description}>
          Manage registered nodes and network devices.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/devices')}
        >
          <Text style={styles.buttonText}>Manage Devices</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Network Monitoring</Text>
        <Text style={styles.description}>
          Review node connectivity and network status.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/nodes/index')}
        >
          <Text style={styles.buttonText}>View Node Status</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Emergency Records</Text>
        <Text style={styles.description}>
          Review previous alerts and incident records.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/history')}
        >
          <Text style={styles.buttonText}>View Alert History</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>System Information</Text>
        <Text style={styles.info}>Application: RESQ-MESH</Text>
        <Text style={styles.info}>Version: 1.0 Prototype</Text>
        <Text style={styles.info}>Platform: React Native + Expo</Text>
        <Text style={styles.info}>Backend: Not connected</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace('/dashboard')}
      >
        <Text style={styles.backText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FA',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1565C0',
    marginTop: 25,
  },
  subtitle: {
    fontSize: 14,
    color: '#607D8B',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#263238',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#607D8B',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1565C0',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: '#455A64',
    marginBottom: 8,
  },
  backButton: {
    backgroundColor: '#1565C0',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 40,
  },
  backText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
