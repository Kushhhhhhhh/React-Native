import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Kush Sharma</Text>
      <Text style={styles.passion}>Passionate Full Stack Developer</Text>
      <Image
        source={require('./assets/image.png')} // Update the path accordingly
        style={styles.image}
      />
    </View>
  );
};

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My name is Kush Sharma</Text>
    </View>
  );
};

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text>You're on the Menu Page</Text>
    </View>
  );
};

const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>I'm a Full Stack Developer and trying App Development for the first time but it's going too well.</Text>
    </View>
  );
};

const Navbar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="Services" component={ServicesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <Navbar />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Text color
    marginBottom: 10,
  },
  passion: {
    fontSize: 18,
    color: '#666', // Text color
  },
  image: {
    width: 300, // Set the desired width
    height: 300, // Set the desired height
    resizeMode: 'contain', // Adjust the resizeMode as needed
    marginBottom: 20, // Adjust the margin as needed
    },
  });
  
export default App;