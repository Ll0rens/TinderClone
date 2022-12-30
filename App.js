import 'react-native-gesture-handler'
import {View, StyleSheet} from "react-native";
import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';

const App = () => {

  return(
    <View style={styles.root}>
      <MatchesScreen />
    </View>
  );
};  

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});

export default App;