import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
//Lecture 25 to start
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(entered_text) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: entered_text, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
    console.log(courseGoals);
  }

  function deleteGoal(goal_id) {
    //alert(`Goal with id ${goal_id} deleted successfully.`);
    setCourseGoals(courseGoals.filter((goalitem) => goalitem.id !== goal_id));
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={[styles.container, { padding: 10 }]}>
        <View style={{ marginBottom: 10 }}>
          <Button
            title="Add New Goal"
            visible={modalIsVisible}
            color="#2196F3"
            animationType="slide"
            onPress={startAddGoalHandler}
          />
        </View>

        {modalIsVisible && <GoalInput addGoalHandler={addGoalHandler} />}
        <View style={styles.goalListContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteGoal={deleteGoal}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    gap: 1,
  },
  goalListContainer: {
    flex: 5,
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
