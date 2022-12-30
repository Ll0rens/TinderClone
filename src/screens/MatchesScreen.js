import 'react-native-gesture-handler'
import {View, StyleSheet, SafeAreaView, Text, Image} from "react-native";
import users from '../../assets/data/users';



const MatchesScreen = () => {
  return(
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={{frontWeight: 'bold', fontSize: 24, color: '#F63A6E'}}>
          New Matches
        </Text>
      </View>
      <View style={styles.users}>
        {users.map(user => (
          <View style={styles.user1} key={user.id}>
            <View>
            <Text style={{frontWeight: 'bold', fontSize: 15, color: '#F63A6E', textAlign: 'center'}}>{user.name}</Text>
            </View>
            <View style={styles.user}>
            <Image source={{uri: user.image}} style={styles.image} />
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};  

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 2,
    borderColor: '#F63A6E',
    borderRadius: 50,
    padding: 2
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  user1: {
    width: 120,
    height: 140,
  },

});

export default MatchesScreen;