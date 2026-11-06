
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const alerts = [
  {
    id: '001',
    type: 'SOS Emergency',
    location: 'Bosque La Primavera',
    time: '10:35 AM',
    priority: 'High',
    status: 'Pending',
    description: 'Emergency SOS signal received from a hiker.',
  },
  {
    id: '002',
    type: 'Medical Assistance',
    location: 'Sendero Norte',
    time: '11:10 AM',
    priority: 'High',
    status: 'In Progress',
    description: 'Medical assistance requested by a visitor.',
  },
  {
    id: '003',
    type: 'Lost Hiker',
    location: 'Zona Montañosa',
    time: '12:20 PM',
    priority: 'Medium',
    status: 'Pending',
    description: 'A hiker reported being lost.',
  },
];

export default function AlertDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const alert = alerts.find((item) => item.id === id);

  if (!alert) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Alert not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Alert Details</Text>
      <Text style={styles.subtitle}>Emergency information</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Alert ID</Text>
        <Text style={styles.value}>{alert.id}</Text>

        <Text style={styles.label}>Emergency Type</Text>
        <Text style={styles.value}>{alert.type}</Text>

        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>{alert.location}</Text>

        <Text style={styles.label}>Time</Text>
        <Text style={styles.value}>{alert.time}</Text>

        <Text style={styles.label}>Priority</Text>
        <Text
          style={[
            styles.value,
            {
              color: alert.priority === 'High' ? '#D32F2F' : '#F57C00',
            },
          ]}
        >
          {alert.priority}
        </Text>

        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>{alert.status}</Text>

        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>{alert.description}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push({
            pathname: '/alerts/update',
            params: { id: alert.id },
          })
        }
      >
        <Text style={styles.buttonText}>Update Incident</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>Back to Alerts</Text>
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
    padding: 22,
    borderRadius: 12,
    elevation: 2,
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    color: '#78909C',
    fontWeight: '600',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    color: '#263238',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#1565C0',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  backButton: {
    padding: 16,
    alignItems: 'center',
    marginBottom: 35,
  },
  backText: {
    color: '#1565C0',
    fontWeight: 'bold',
  },
});
