import 'react-native-gesture-handler'
import {View, StyleSheet} from "react-native";
import Card from '../components/TinderCard';
import users from '../../assets/data/users'
import AnimatedStack from '../components/AnimatedStack';


const HomeScreen = () => {

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
    width: '100%'
  }
});

export default HomeScreen;