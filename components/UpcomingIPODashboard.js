import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const UpcomingIPODashboard = ({ upcomingIPOs }) => {
  // Sample data structure of upcomingIPOs:
  // upcomingIPOs = [
  //   { id: 1, companyName: 'Company A', offeringDate: '2024-01-15', offeringPrice: '$20' },
  //   { id: 2, companyName: 'Company B', offeringDate: '2024-01-20', offeringPrice: '$25' },
  //   ...
  // ];

  const renderIPOItem = ({ item }) => {
    return (
      <View style={styles.ipoItem}>
        <Text style={styles.companyName}>{item.companyName}</Text>
        <Text>Offering Date: {item.offeringDate}</Text>
        <Text>Offering Price: {item.offeringPrice}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upcoming IPOs</Text>
      <FlatList
        data={upcomingIPOs}
        keyExtractor={item => item.id.toString()}
        renderItem={renderIPOItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  ipoItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default UpcomingIPODashboard;
