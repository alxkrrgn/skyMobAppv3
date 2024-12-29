// src/components/About.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function About() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>About Us</Text>
      <Text style={styles.paragraph}>
        Welcome to our website! We are a team of passionate developers working
        on building great web applications. Our mission is to create high-quality
        and user-friendly software that solves real-world problems.
      </Text>
      <Text style={styles.subheading}>Our Story</Text>
      <Text style={styles.paragraph}>
        It all started with a simple idea: to help businesses grow by providing
        powerful, yet easy-to-use digital solutions. Since then, we’ve worked with
        a variety of clients and industries, and our team has expanded to include
        designers, engineers, and strategists.
      </Text>
      <Text style={styles.subheading}>Our Values</Text>
      <View style={styles.list}>
        <Text style={styles.listItem}>• Innovation</Text>
        <Text style={styles.listItem}>• Collaboration</Text>
        <Text style={styles.listItem}>• Customer-centricity</Text>
        <Text style={styles.listItem}>• Excellence</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff', // Adjust background color if needed
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subheading: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  list: {
    marginTop: 8,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 4,
  },
});

export default About;


