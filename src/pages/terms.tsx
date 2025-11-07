import React, { useState } from 'react';
import { View, Text, ScrollView, Button, Modal, StyleSheet } from 'react-native';

const TermsAndConditionsScreen = ({ onAccept }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const termsContent = `
    Welcome to our app! Please read these terms and conditions carefully.

    1. Acceptance of Terms: By accessing and using this application, you accept and agree to be bound by the terms and provisions of this agreement.

    2. Privacy Policy: Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and disclose personal information.

    3. User Conduct: You agree to use the application only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the application.

    4. Disclaimers: The application and its content are provided "as is" without any warranties of any kind.

    5. Limitation of Liability: We shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the application.

    6. Changes to Terms: We reserve the right to modify these terms at any time. Your continued use of the application after any such changes constitutes your acceptance of the new terms.
  `;

  return (
    <View style={styles.container}>
      <Button title="View Terms and Conditions" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Terms and Conditions</Text>
          <ScrollView style={styles.termsScrollView}>
            <Text style={styles.termsText}>{termsContent}</Text>
          </ScrollView>
          <Button title="I Accept" onPress={() => {
            setModalVisible(false);
            onAccept(); // Call a function to handle acceptance
          }} />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  termsScrollView: {
    flex: 1,
    marginBottom: 20,
  },
  termsText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default TermsAndConditionsScreen;