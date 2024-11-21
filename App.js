import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
//Lecture 25 to start
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(entered_text) {
    setEnteredGoalText(entered_text);
  }

  function addGoalHandler() {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    console.log(courseGoals);
  }

  return (
    <View style={[styles.container, { marginTop: 20, padding: 10 }]}>
      <View style={styles.row}>
        <TextInput
          placeholder="Your course goals!"
          style={styles.inputBox}
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //marginTop: 40,
    backgroundColor: '#fffaf0',
    flex: 1,
    gap: 1,
  },
  row: {
    backgroundColor: 'oldlace',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    columnGap: 6,
    flex: 1,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'deepskyblue',
    width: '70%',
    padding: 12,
    borderRadius: 5,
  },
  btn: {
    // width: '20%',
  },
  goalListContainer: {
    backgroundColor: 'aliceblue',
    flex: 5,
  },
  goalItem: {
    borderRadius: 4,
    backgroundColor: '#5e0acc',
    shadowOpacity: 1,
    borderWidth: 1,
    marginBottom: 4,

    //textAlign: 'center',
  },
  goalText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 400,
    padding: 16,
  },
});
/*
borderColor string
borderTopColor string
borderRightColor string
borderBottomColor string
borderLeftColor string
borderRadius number
borderTopLeftRadius number
borderTopRightRadius number
borderBottomLeftRadius number
borderBottomRightRadius number
borderStyle enum('solid', 'dotted', 'dashed')
borderWidth number
borderTopWidth number
borderRightWidth number
borderBottomWidth number
borderLeftWidth number
*/
