
import { useRouter } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>RESQ-MESH</Text>
        <Text style={styles.subtitle}>Emergency Dashboard</Text>
      </View>

      <Text style={styles.sectionTitle}>System Overview</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Active Alerts</Text>
        <Text style={styles.cardNumber}>3</Text>
        <Text style={styles.cardDescription}>
          Emergency alerts requiring attention
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Connected Nodes</Text>
        <Text style={styles.cardNumber}>8</Text>
        <Text style={styles.cardDescription}>
          Nodes currently available in the network
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>System Status</Text>
        <Text style={styles.status}>Operational</Text>
        <Text style={styles.cardDescription}>
          Network monitoring active
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Quick Access</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/alerts' as any)}
      >
        <Text style={styles.buttonText}>View Active Alerts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/map' as any)}
      >
        <Text style={styles.buttonText}>GPS Map</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/nodes' as any)}
      >
        <Text style={styles.buttonText}>Node Status</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.replace('/')}
      >
        
    <TouchableOpacity
    style={styles.button}
    onPress={() => router.push('/history')}
    >
    <Text style={styles.buttonText}>Alert History</Text>
    </TouchableOpacity>
     
<TouchableOpacity
  style={styles.button}
  onPress={() => router.push('/administration')}
>
  <Text style={styles.buttonText}>Administration</Text>
</TouchableOpacity>

        <Text style={styles.logoutText}>Logout</Text>
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
  header: {
    backgroundColor: '#1565C0',
    padding: 25,
    borderRadius: 12,
    marginBottom: 25,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#E3F2FD',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#263238',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#455A64',
  },
  cardNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1565C0',
    marginVertical: 8,
  },
  cardDescription: {
    fontSize: 13,
    color: '#78909C',
  },
  status: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#1565C0',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  logoutText: {
    color: '#D32F2F',
    fontWeight: 'bold',
  },
});
