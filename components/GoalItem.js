import { StyleSheet, View, Text, Pressable } from 'react-native';
function GoalItem(props) {
  // function deleteGoal(id) {
  //   props.deleteGoal(id);
  // }

  return (
    <View style={styles.goalItem}>
      <Pressable
        // onPress={() => {
        //   //deleteGoal(props.id);
        //   props.deleteGoal.bind(this, props.id);
        // }}
        android_ripple={{ color: '#dddddd' }}
        //For IOS ripple effect
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.deleteGoal.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 4,
    backgroundColor: '#5e0acc',
    shadowOpacity: 1,
    borderWidth: 1,
    marginBottom: 4,

    //textAlign: 'center',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 400,
    padding: 16,
  },
});
