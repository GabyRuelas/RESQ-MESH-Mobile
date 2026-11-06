
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function GPSMapScreen() {
  const router = useRouter();
  const [selectedNode, setSelectedNode] = useState('NODE-001');

  const nodes = [
    {
      id: 'NODE-001',
      location: 'Bosque La Primavera',
      status: 'Emergency',
      latitude: '20.6540',
      longitude: '-103.5700',
    },
    {
      id: 'NODE-002',
      location: 'Sendero Norte',
      status: 'Online',
      latitude: '20.6600',
      longitude: '-103.5800',
    },
    {
      id: 'NODE-003',
      location: 'Zona Montañosa',
      status: 'Online',
      latitude: '20.6700',
      longitude: '-103.5900',
    },
  ];

  const node = nodes.find((item) => item.id === selectedNode);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>GPS Map</Text>
      <Text style={styles.subtitle}>
        RESQ-MESH Network Location Overview
      </Text>

      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapIcon}>📍</Text>
        <Text style={styles.mapTitle}>Network Map</Text>
        <Text style={styles.mapDescription}>
          Interactive map integration planned for future development
        </Text>

        <View style={styles.mapNodes}>
          {nodes.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.nodeMarker,
                selectedNode === item.id && styles.selectedMarker,
              ]}
              onPress={() => setSelectedNode(item.id)}
            >
              <Text style={styles.markerText}>{item.id}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Text style={styles.sectionTitle}>Selected Node</Text>

      {node && (
        <View style={styles.card}>
          <Text style={styles.label}>Node ID</Text>
          <Text style={styles.value}>{node.id}</Text>

          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>{node.location}</Text>

          <Text style={styles.label}>Status</Text>
          <Text
            style={[
              styles.value,
              {
                color:
                  node.status === 'Emergency'
                    ? '#D32F2F'
                    : '#2E7D32',
              },
            ]}
          >
            {node.status}
          </Text>

          <Text style={styles.label}>Latitude</Text>
          <Text style={styles.value}>{node.latitude}</Text>

          <Text style={styles.label}>Longitude</Text>
          <Text style={styles.value}>{node.longitude}</Text>
        </View>
      )}

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
  mapPlaceholder: {
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 25,
    minHeight: 280,
    justifyContent: 'center',
  },
  mapIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  mapTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1565C0',
  },
  mapDescription: {
    fontSize: 13,
    color: '#607D8B',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  mapNodes: {
    width: '100%',
    gap: 10,
  },
  nodeMarker: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedMarker: {
    borderWidth: 2,
    borderColor: '#1565C0',
  },
  markerText: {
    color: '#263238',
    fontWeight: 'bold',
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
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    color: '#78909C',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#263238',
    fontWeight: '600',
    marginTop: 4,
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
