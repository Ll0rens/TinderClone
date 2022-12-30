import 'react-native-gesture-handler'
import {View, StyleSheet} from "react-native";
import Card from './src/components/TinderCard';
import users from './assets/data/users'
import AnimatedStack from './src/components/AnimatedStack';


const App = () => {

  const onSwipeRight = (user) => {
    console.warn('Swipe Right', user.name)
  }

  const onSwipeLeft = (user) => {
    console.warn('Swipe Left', user.name)
  }

  return(
    <View style={styles.root}>
      <AnimatedStack
        data={users}
        renderItem={({item}) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
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