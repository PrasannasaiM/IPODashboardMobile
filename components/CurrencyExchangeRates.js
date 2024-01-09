import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CurrencyExchangeRates = ({ exchangeRates }) => {
  // Sample data structure of exchangeRates:
  // exchangeRates = [
  //   { id: 1, currencyPair: 'USD/EUR', rate: '0.85' },
  //   { id: 2, currencyPair: 'USD/GBP', rate: '0.73' },
  //   ...
  // ];

  const renderExchangeRateItem = ({ item }) => {
    return (
      <View style={styles.exchangeRateItem}>
        <Text style={styles.currencyPair}>{item.currencyPair}</Text>
        <Text>Exchange Rate: {item.rate}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Currency Exchange Rates</Text>
      <FlatList
        data={exchangeRates}
        keyExtractor={item => item.id.toString()}
        renderItem={renderExchangeRateItem}
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
  exchangeRateItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  currencyPair: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default CurrencyExchangeRates;
