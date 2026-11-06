
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const history = [
  {
    id: 'H001',
    type: 'SOS Emergency',
    location: 'Bosque La Primavera',
    date: '2026-10-20',
    time: '10:35 AM',
    status: 'Resolved',
  },
  {
    id: 'H002',
    type: 'Medical Assistance',
    location: 'Sendero Norte',
    date: '2026-10-21',
    time: '11:10 AM',
    status: 'Resolved',
  },
  {
    id: 'H003',
    type: 'Lost Hiker',
    location: 'Zona Montañosa',
    date: '2026-10-22',
    time: '12:20 PM',
    status: 'In Progress',
  },
  {
    id: 'H004',
    type: 'SOS Emergency',
    location: 'Sendero Sur',
    date: '2026-10-23',
    time: '09:15 AM',
    status: 'Pending',
  },
];

type Filter = 'All' | 'Pending' | 'In Progress' | 'Resolved';

export default function AlertHistoryScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>('All');

  const filteredHistory = history.filter(
    (alert) => filter === 'All' || alert.status === filter
  );

  const filters: Filter[] = [
    'All',
    'Pending',
    'In Progress',
    'Resolved',
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Alert History</Text>
      <Text style={styles.subtitle}>
        Previous emergency notifications
      </Text>

      <Text style={styles.sectionTitle}>Filter by Status</Text>

      <View style={styles.filterContainer}>
        {filters.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.filterButton,
              filter === item && styles.activeFilter,
            ]}
            onPress={() => setFilter(item)}
          >
            <Text
              style={[
                styles.filterText,
                filter === item && styles.activeFilterText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>
        Emergency Records ({filteredHistory.length})
      </Text>

      {filteredHistory.map((alert) => (
        <View key={alert.id} style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.alertType}>{alert.type}</Text>
            <Text
              style={[
                styles.status,
                {
                  color:
                    alert.status === 'Resolved'
                      ? '#2E7D32'
                      : alert.status === 'Pending'
                      ? '#D32F2F'
                      : '#F57C00',
                },
              ]}
            >
              {alert.status}
            </Text>
          </View>

          <Text style={styles.info}>ID: {alert.id}</Text>
          <Text style={styles.info}>
            Location: {alert.location}
          </Text>
          <Text style={styles.info}>
            Date: {alert.date}
          </Text>
          <Text style={styles.info}>
            Time: {alert.time}
          </Text>
        </View>
      ))}

      {filteredHistory.length === 0 && (
        <Text style={styles.emptyText}>
          No emergency records found.
        </Text>
      )}

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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#263238',
    marginBottom: 12,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 25,
  },
  filterButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CFD8DC',
  },
  activeFilter: {
    backgroundColor: '#1565C0',
    borderColor: '#1565C0',
  },
  filterText: {
    color: '#455A64',
    fontSize: 13,
  },
  activeFilterText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
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
  alertType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#263238',
    flex: 1,
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: '#546E7A',
    marginBottom: 5,
  },
  emptyText: {
    textAlign: 'center',
    color: '#78909C',
    marginVertical: 25,
  },
  backButton: {
    backgroundColor: '#1565C0',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  backText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
