
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type Device = {
  id: string;
  name: string;
  type: string;
  location: string;
  enabled: boolean;
};

const initialDevices: Device[] = [
  {
    id: 'NODE-001',
    name: 'Emergency Node 1',
    type: 'Emergency Node',
    location: 'Bosque La Primavera',
    enabled: true,
  },
  {
    id: 'NODE-002',
    name: 'Relay Node 1',
    type: 'Relay Node',
    location: 'Sendero Norte',
    enabled: true,
  },
  {
    id: 'NODE-003',
    name: 'Relay Node 2',
    type: 'Relay Node',
    location: 'Zona Montañosa',
    enabled: true,
  },
  {
    id: 'NODE-004',
    name: 'Gateway Node',
    type: 'Gateway',
    location: 'Estación Central',
    enabled: false,
  },
];

export default function DeviceAdminScreen() {
  const router = useRouter();
  const [devices, setDevices] = useState<Device[]>(initialDevices);

  const toggleDevice = (id: string) => {
    setDevices((current) =>
      current.map((device) =>
        device.id === id
          ? { ...device, enabled: !device.enabled }
          : device
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Device Administration</Text>
      <Text style={styles.subtitle}>
        Manage RESQ-MESH network devices
      </Text>

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Registered Devices</Text>
        <Text style={styles.summaryNumber}>{devices.length}</Text>
        <Text style={styles.summaryText}>
          Enabled: {devices.filter((device) => device.enabled).length}
        </Text>
      </View>

      {devices.map((device) => (
        <View key={device.id} style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.deviceName}>{device.name}</Text>
            <Text
              style={[
                styles.status,
                {
                  color: device.enabled ? '#2E7D32' : '#D32F2F',
                },
              ]}
            >
              {device.enabled ? 'Enabled' : 'Disabled'}
            </Text>
          </View>

          <Text style={styles.info}>ID: {device.id}</Text>
          <Text style={styles.info}>Type: {device.type}</Text>
          <Text style={styles.info}>
            Location: {device.location}
          </Text>

          <TouchableOpacity
            style={[
              styles.actionButton,
              {
                backgroundColor: device.enabled
                  ? '#D32F2F'
                  : '#2E7D32',
              },
            ]}
            onPress={() => toggleDevice(device.id)}
          >
            <Text style={styles.actionText}>
              {device.enabled ? 'Disable Device' : 'Enable Device'}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.note}>
        Device changes are simulated and are not saved permanently.
      </Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>Back to Administration</Text>
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
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1565C0',
  },
  summaryNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1565C0',
    marginVertical: 8,
  },
  summaryText: {
    color: '#455A64',
    fontSize: 14,
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
    alignItems: 'center',
    marginBottom: 12,
  },
  deviceName: {
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
    marginBottom: 6,
  },
  actionButton: {
    padding: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  actionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  note: {
    color: '#78909C',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 15,
  },
  backButton: {
    backgroundColor: '#1565C0',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
  backText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
