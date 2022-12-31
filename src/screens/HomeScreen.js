import 'react-native-gesture-handler'
import {View, StyleSheet} from "react-native";
import Card from '../components/TinderCard';
import users from '../../assets/data/users'
import AnimatedStack from '../components/AnimatedStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


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
      <View style={styles.icons}>
        <View style={styles.button}>
          <FontAwesome name="undo" size={30} color={'#e0a224'} />
        </View>
        <View style={styles.button}>
          <Entypo name="cross" size={30} color={'#c41b1b'} />
        </View>
        <View style={styles.button}>
          <FontAwesome name="star" size={30} color={'#0b87d4'} />
        </View>
          <View style={styles.button}>
        <FontAwesome name="heart" size={30} color={'#2fb023'} />
          </View>
        <View style={styles.button}>
          <Ionicons name="flash" size={30} color={'#2fb023'} />
        </View>
      </View>
    </View>
  );
};  

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%'
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    marginBottom: 30
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#dce3e2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 5
  }

});

export default HomeScreen;