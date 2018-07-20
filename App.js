/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, WebView, ActivityIndicator} from 'react-native';


export default class App extends Component {
  renderLoading = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator
        size="large"
      />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.webview}
          source={{
            uri: 'https://www.google.com',
          }}
          startInLoadingState
          renderLoading={() => this.renderLoading()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    paddingTop: 0,
  },

  webview: {
    backgroundColor: '#000',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
