
import { useRouter } from 'expo-router';
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
  },
  {
    id: 'NODE-002',
    location: 'Sendero Norte',
    status: 'Online',
    battery: 72,
    signal: 'Strong',
  },
  {
    id: 'NODE-003',
    location: 'Zona Montañosa',
    status: 'Online',
    battery: 48,
    signal: 'Moderate',
  },
  {
    id: 'NODE-004',
    location: 'Estación Central',
    status: 'Offline',
    battery: 15,
    signal: 'No signal',
  },
];

export default function NodeStatusScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Node Status</Text>
      <Text style={styles.subtitle}>
        RESQ-MESH Network Monitoring
      </Text>

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Network Overview</Text>
        <Text style={styles.summaryText}>Total Nodes: 4</Text>
        <Text style={styles.summaryText}>Online: 3</Text>
        <Text style={styles.summaryText}>Offline: 1</Text>
      </View>

      <Text style={styles.sectionTitle}>Network Nodes</Text>

      {nodes.map((node) => (
        <TouchableOpacity
          key={node.id}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: '/nodes/[id]',
              params: { id: node.id },
            })
          }
        >
          <View style={styles.row}>
            <Text style={styles.nodeId}>{node.id}</Text>
            <Text
              style={[
                styles.status,
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
          </View>

          <Text style={styles.info}>
            Location: {node.location}
          </Text>
          <Text style={styles.info}>
            Battery: {node.battery}%
          </Text>
          <Text style={styles.info}>
            Signal: {node.signal}
          </Text>

          <Text style={styles.details}>View Node Details →</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
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
  summary: {
    backgroundColor: '#E3F2FD',
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 14,
    color: '#455A64',
    marginBottom: 5,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  nodeId: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#263238',
  },
  status: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: '#546E7A',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#1565C0',
    fontWeight: 'bold',
    marginTop: 12,
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
