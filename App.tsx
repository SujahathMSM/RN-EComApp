import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text}>Welcome to My Profile</Text>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        style={styles.image}
      />
      <Text style={styles.textName}>Sujahath</Text>
      <Text style={styles.posName}>Software Engineer - AI/ML</Text>
      <TouchableOpacity style = {styles.locationContainer}>
        <Text style={styles.location}>Dubai📍- UAE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    margin: 20,
    marginTop: '50%',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 5,
    alignSelf: 'center',
  },

  text: {
    color: '#009dff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 10,
    alignSelf: 'center',
  },
  textName: {
    fontWeight: '500',
    marginTop: 6,
    alignSelf: 'center',
    textAlign: 'center',
  },
  posName: {
    fontWeight: '400',
    margin: 5,
    alignSelf: 'center',
    textAlign: 'center',
  },
  locationContainer: {
    backgroundColor: '#000',
    width: '60%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  location: {
    color: '#fff',
    fontWeight: '400',
    margin: 5,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 10,
  },
});
