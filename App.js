/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Flurry from 'react-native-flurry-sdk';

function LogFlurry() {
    Flurry.getVersions().then(
        (versions) => {
            console.log("Flurry Versions: " + versions.agentVersion + " : " + versions.releaseVersion + " : " + versions.sessionId);
        },
        (msg) => {
            console.log(msg);
        }
    );

    // Log Flurry events.
    Flurry.logEvent('React Native Event');

    Flurry.setAge(36);
    Flurry.setGender(Flurry.Gender.MALE);
    Flurry.setGender(Flurry.Gender.FEMALE);
    Flurry.setReportLocation(true);
    Flurry.setSessionOrigin('my_session', 'http://mysession.net');
    Flurry.setUserId('ReactNativeUser');
    Flurry.setVersionName('7.777');

    Flurry.UserProperties.set(Flurry.UserProperties.PROPERTY_REGISTERED_USER, 'True');
    Flurry.UserProperties.add(Flurry.UserProperties.PROPERTY_CURRENCY_PREFERENCE, 'USD');
    Flurry.UserProperties.remove(Flurry.UserProperties.PROPERTY_SUBSCRIBER);
    Flurry.UserProperties.flag(Flurry.UserProperties.PROPERTY_PURCHASER);

    Flurry.setIAPReportingEnabled(true);

    Flurry.addOrigin('my_origin', '2.0');
    Flurry.addOrigin('my_origin', '2.0', {param: 'true'});
    Flurry.addSessionProperty('my_property', 'property_value');

    Flurry.logBreadcrumb('crashBreadcrumb');
    Flurry.logPayment('productName', 'productId', 36, 100, 'currency', 'transactionId', {param: 'true'});

    Flurry.logEvent("React Native 1", true);
    Flurry.logEvent("React Native 2", false);
    Flurry.endTimedEvent("React Native 1");
    Flurry.logEvent("React Native 2", false);
    Flurry.logEvent("React Native 3");
    Flurry.logEvent('React Native 4', {param: 'true'});
    Flurry.logEvent('React Native 5', {param: 'true'}, true);
    Flurry.endTimedEvent("React Native 5", {param: 'true'});

    Flurry.onError('errorId1', 'message', 'errorClass');
    Flurry.onError('errorId2', 'message', 'errorClass', {param: 'true'});
}

const App: () => React$Node = () => {

  LogFlurry();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
