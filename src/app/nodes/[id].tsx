
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const nodes = [
  {
    id: 'NODE-001',
    location: 'Bosque La Primavera',
    status: 'Emergency',
    battery: 85,
    signal: 'Strong',
    lastSeen: '10:35 AM',
    type: 'Emergency Node',
  },
  {
    id: 'NODE-002',
    location: 'Sendero Norte',
    status: 'Online',
    battery: 72,
    signal: 'Strong',
    lastSeen: '11:10 AM',
    type: 'Relay Node',
  },
  {
    id: 'NODE-003',
    location: 'Zona Montañosa',
    status: 'Online',
    battery: 48,
    signal: 'Moderate',
    lastSeen: '12:20 PM',
    type: 'Relay Node',
  },
  {
    id: 'NODE-004',
    location: 'Estación Central',
    status: 'Offline',
    battery: 15,
    signal: 'No signal',
    lastSeen: '09:15 AM',
    type: 'Gateway Node',
  },
];

export default function NodeDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const node = nodes.find((item) => item.id === id);

  if (!node) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Node not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Node Details</Text>
      <Text style={styles.subtitle}>Network device information</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Node ID</Text>
        <Text style={styles.value}>{node.id}</Text>

        <Text style={styles.label}>Node Type</Text>
        <Text style={styles.value}>{node.type}</Text>

        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>{node.location}</Text>

        <Text style={styles.label}>Connection Status</Text>
        <Text
          style={[
            styles.value,
            {
              color:
                node.status === 'Offline'
                  ? '#D32F2F'
                  : node.status === 'Emergency'
                  ? '#F57C00'
                  : '#2E7D32',
            },
          ]}
        >
          {node.status}
        </Text>

        <Text style={styles.label}>Battery Level</Text>
        <Text style={styles.value}>{node.battery}%</Text>

        <View style={styles.batteryBackground}>
          <View
            style={[
              styles.batteryFill,
              {
                width: `${node.battery}%`,
                backgroundColor:
                  node.battery < 20 ? '#D32F2F' : '#2E7D32',
              },
            ]}
          />
        </View>

        <Text style={styles.label}>Signal Strength</Text>
        <Text style={styles.value}>{node.signal}</Text>

        <Text style={styles.label}>Last Communication</Text>
        <Text style={styles.value}>{node.lastSeen}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Back to Nodes</Text>
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
    marginTop: 15,
  },
  value: {
    fontSize: 16,
    color: '#263238',
    marginTop: 5,
    fontWeight: '500',
  },
  batteryBackground: {
    height: 10,
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
    marginTop: 10,
    overflow: 'hidden',
  },
  batteryFill: {
    height: '100%',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#1565C0',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
