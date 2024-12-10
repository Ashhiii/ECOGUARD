import React from 'react';
import { View, Text, Image, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const ReportDetails = ({ route, navigation }) => {
  const { report } = route.params;

  const handleApprove = () => {
    Alert.alert('Report Approved', 'The report has been approved.');
    navigation.goBack();
  };

  const handleReject = () => {
    Alert.alert('Report Rejected', 'The report has been rejected.');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Report Details</Text>
      <Text style={styles.description}>Description: {report.title}</Text>
      <Image source={{ uri: report.image }} style={styles.image} />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: report.location?.latitude || 0,
          longitude: report.location?.longitude || 0,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {report.location && (
          <Marker
            coordinate={report.location}
            title="Reported Location"
          />
        )}
      </MapView>

      <View style={styles.buttonContainer}>
        <Button title="Approve" onPress={handleApprove} color="green" />
        <Button title="Reject" onPress={handleReject} color="red" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',

  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ReportDetails;
