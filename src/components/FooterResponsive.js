import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FooterResponsive = () => {
  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    email: '',
  });

  const [validationMessage, setValidationMessage] = useState('');
  const [serverMessage, setServerMessage] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (value) => {
    setFormData({ email: value });
    if (validateEmail(value)) {
      setValidationMessage('Valid Email');
    } else {
      setValidationMessage('Invalid Email');
    }
  };

  const handleSubmit = async () => {
    if (!formData.email) {
      setServerMessage('Please enter your email');
      return;
    }

    if (!validateEmail(formData.email)) {
      setServerMessage('Invalid email format');
      return;
    }

    try {
      const response = await fetch('http://localhost/getstartedGit.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();
      if (data.success) {
        setServerMessage('Subscribed successfully!');
      } else {
        setServerMessage('Subscription failed');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during the request.');
    }
  };

  return (
    <ScrollView style={styles.footer}>
      <View style={styles.container}>
        {/* Social Links */}
        <View style={styles.socialLinks}>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="facebook" size={20} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="twitter" size={20} color="#00acee" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="linkedin" size={20} color="#0e76a8" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="instagram" size={20} color="#E4405F" />
          </TouchableOpacity>
        </View>

        {/* Newsletter Subscription */}
        <View style={styles.subscription}>
          <Text style={styles.heading}>Subscribe to Newsletter</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={formData.email}
            onChangeText={handleChange}
            keyboardType="email-address"
          />
          {validationMessage ? <Text style={styles.validationMessage}>{validationMessage}</Text> : null}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>SUBSCRIBE</Text>
          </TouchableOpacity>
          {serverMessage ? <Text style={styles.serverMessage}>{serverMessage}</Text> : null}
        </View>

        {/* Quick Links */}
        <View style={styles.quickLinks}>
          <Text style={styles.heading}>Quick Links</Text>
          {['Home', 'About', 'Strategies', 'Contact', 'Privacy', 'Terms'].map((link) => (
            <TouchableOpacity key={link} style={styles.link}>
              <Text style={styles.linkText}>{link}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.copyRight}>
        <Text>Copyright &copy; {currentYear} Skyline Capital | All Rights Reserved</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  container: {
    marginBottom: 20,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  subscription: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  validationMessage: {
    color: 'red',
    marginBottom: 10,
  },
  serverMessage: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  quickLinks: {
    marginBottom: 20,
  },
  link: {
    marginBottom: 5,
  },
  linkText: {
    color: '#007bff',
  },
  copyRight: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default FooterResponsive;

