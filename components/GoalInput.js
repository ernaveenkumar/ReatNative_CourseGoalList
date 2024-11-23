import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';

function GoalInput({ addGoalHandler }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function addGoal() {
    addGoalHandler(enteredGoalText);

    setEnteredGoalText(' ');
  }

  function goalInputHandler(entered_text) {
    setEnteredGoalText(entered_text);
  }

  return (
    <Modal>
      <View style={styles.row}>
        <Image
          source={require('./../assets/images/goal.png')}
          style={{ width: 100, height: 100, margin: 20 }}
        />
        <TextInput
          placeholder="Your course goals!"
          style={styles.inputBox}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          //30
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoal} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="cancel" color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputBox: {
    borderWidth: 1,
    borderColor: '#f0f8ff',
    width: '100%',
    padding: 16,
    borderRadius: 5,
    color: 'white',
  },
  btn: {
    // width: '20%',
  },
  row: {
    flex: 1,
    backgroundColor: '#311d6d',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
    padding: 6,
    marginTop: 12,
  },
});
