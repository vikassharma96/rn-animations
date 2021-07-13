import React, {useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];

  const moveCircle = () => {
    Animated.timing(value, {
      toValue: {x: 100, y: 100},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={[backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Animated.View style={value.getLayout()}>
        <View style={styles.round} />
      </Animated.View>
      <TouchableOpacity onPress={moveCircle}>
        <Text style={styles.text}>Click to Animate!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  round: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 100 / 2,
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default App;
