
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type IncidentStatus = 'Pending' | 'In Progress' | 'Resolved';

export default function UpdateIncidentScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [status, setStatus] = useState<IncidentStatus>('Pending');

  const statuses: IncidentStatus[] = [
    'Pending',
    'In Progress',
    'Resolved',
  ];

  const handleSave = () => {
    const message = `Incident ${id} updated to ${status} (simulation).`;

    if (Platform.OS === 'web') {
      window.alert(message);
    } else {
      Alert.alert('Update Successful', message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Update Incident</Text>
      <Text style={styles.subtitle}>
        Modify emergency incident status
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Alert ID</Text>
        <Text style={styles.value}>{id}</Text>

        <Text style={styles.label}>Select New Status</Text>

        {statuses.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.statusButton,
              status === item && styles.selectedStatus,
            ]}
            onPress={() => setStatus(item)}
          >
            <Text
              style={[
                styles.statusText,
                status === item && styles.selectedText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.note}>
          Changes are simulated and will not be saved to a database.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSave}
      >
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>Back to Alert Details</Text>
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
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#455A64',
    marginTop: 15,
    marginBottom: 10,
  },
  value: {
    fontSize: 18,
    color: '#263238',
    marginBottom: 15,
  },
  statusButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#CFD8DC',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedStatus: {
    backgroundColor: '#1565C0',
    borderColor: '#1565C0',
  },
  statusText: {
    color: '#455A64',
    fontWeight: '600',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  note: {
    fontSize: 12,
    color: '#78909C',
    marginTop: 15,
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#2E7D32',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  saveText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  backButton: {
    padding: 16,
    alignItems: 'center',
    marginBottom: 40,
  },
  backText: {
    color: '#1565C0',
    fontWeight: 'bold',
  },
});
