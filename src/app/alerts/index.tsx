import { useRouter } from 'expo-router';
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
  },
  {
    id: '002',
    type: 'Medical Assistance',
    location: 'Sendero Norte',
    time: '11:10 AM',
    priority: 'High',
  },
  {
    id: '003',
    type: 'Lost Hiker',
    location: 'Zona Montañosa',
    time: '12:20 PM',
    priority: 'Medium',
  },
];

export default function ActiveAlertsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Active Alerts</Text>
      <Text style={styles.subtitle}>
        Emergency notifications received by RESQ-MESH
      </Text>

      {alerts.map((alert) => (
        <TouchableOpacity
          key={alert.id}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: '/alerts/[id]',
              params: { id: alert.id },
            })
          }
        >
          <View style={styles.row}>
            <Text style={styles.alertType}>{alert.type}</Text>
            <Text
              style={[
                styles.priority,
                {
                  color:
                    alert.priority === 'High'
                      ? '#D32F2F'
                      : '#F57C00',
                },
              ]}
            >
              {alert.priority}
            </Text>
          </View>

          <Text style={styles.info}>Location: {alert.location}</Text>
          <Text style={styles.info}>Time: {alert.time}</Text>
          <Text style={styles.id}>Alert ID: {alert.id}</Text>
          <Text style={styles.details}>View Details →</Text>
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
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
    borderLeftWidth: 5,
    borderLeftColor: '#D32F2F',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  alertType: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#263238',
    flex: 1,
  },
  priority: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: '#546E7A',
    marginBottom: 5,
  },
  id: {
    fontSize: 12,
    color: '#90A4AE',
    marginTop: 8,
  },
  details: {
    fontSize: 14,
    color: '#1565C0',
    fontWeight: 'bold',
    marginTop: 12,
  },
  backButton: {
    backgroundColor: '#1565C0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 40,
  },
  backText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
