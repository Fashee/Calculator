import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
const App = () => {
  const [resultText, setResultText] = useState('');
  const [calcText, setCalcText] = useState('');
  const onButtonClick = text => {
    if (text == '=') {
      return calculation();
    }
    setResultText(resultText + text);
  };
  const calculation = () => {
    setCalcText(eval(resultText));
  };
  const onOperationClick = text => {
    let operation = ['DEL', 'AC', '+', '-', '*', '/'];
    if (text == 'AC') {
      setResultText('');
      setCalcText('0');
      return;
    }
    if (text == 'DEL') {
      return setResultText(
        resultText.toString().substring(0, resultText.length - 1),
      );
    }
    if (operation.includes(resultText.toString().split('').pop())) return;
    setResultText(resultText + text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{resultText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableHighlight
              style={styles.highlights}
              activeOpacity={1}
              underlayColor={'blue'}
              onPress={() => {
                onButtonClick(1);
              }}>
              <Text style={styles.number}>1</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.highlights}
              activeOpacity={1}
              underlayColor={'blue'}
              onPress={() => {
                onButtonClick(2);
              }}>
              <Text style={styles.number}>2</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.highlights}
              activeOpacity={1}
              underlayColor={'blue'}
              onPress={() => {
                onButtonClick(3);
              }}>
              <Text style={styles.number}>3</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <TouchableHighlight
              style={styles.highlights}
              activeOpacity={1}
              underlayColor={'blue'}
              onPress={() => {
                onButtonClick(4);
              }}>
              <Text style={styles.number}>4</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.highlights}
              activeOpacity={1}
              underlayColor={'blue'}
              onPress={() => {
                onButtonClick(5);
              }}>
              <Text style={styles.number}>5</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.highlights}
              activeOpacity={1}
              underlayColor={'blue'}
              onPress={() => {
                onButtonClick(6);
              }}>
              <Text style={styles.number}>6</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <TouchableHighlight
              style={styles.highlights}
              activeOpacity={1}
              underlayColor={'blue'}
              onPress={() => {
                onButtonClick(7);
              }}>
              <Text style={styles.number}>7</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.highlights}
              activeOpacity={1}
              underlayColor={'blue'}
              onPress={() => {
                onButtonClick(8);
              }}>
              <Text style={styles.number}>8</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.highlights}
              activeOpacity={1}
              underlayColor={'blue'}
              onPress={() => {
                onButtonClick(9);
              }}>
              <Text style={styles.number}>9</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <TouchableHighlight
              style={styles.highlights}
              activeOpacity={1}
              underlayColor={'blue'}
              onPress={() => {
                onButtonClick('.');
              }}>
              <Text style={styles.number}>.</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.highlights}
              activeOpacity={1}
              underlayColor={'blue'}
              onPress={() => {
                onButtonClick(0);
              }}>
              <Text style={styles.number0}>0</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.highlights}
              activeOpacity={1}
              underlayColor={'blue'}
              onPress={() => {
                onButtonClick('=');
              }}>
              <Text style={styles.number}>=</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.operations}>
          <TouchableHighlight
            style={styles.opHighlights}
            activeOpacity={1}
            underlayColor={'blue'}
            onPress={() => {
              onOperationClick('DEL');
            }}>
            <Text style={styles.operationButtons}>DEL</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.opHighlights}
            activeOpacity={1}
            underlayColor={'blue'}
            onPress={() => {
              onOperationClick('AC');
            }}>
            <Text style={styles.operationButtons}>AC</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.opHighlights}
            activeOpacity={1}
            underlayColor={'blue'}
            onPress={() => {
              onOperationClick('+');
            }}>
            <Text style={styles.operationButtons}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.opHighlights}
            activeOpacity={1}
            underlayColor={'blue'}
            onPress={() => {
              onOperationClick('-');
            }}>
            <Text style={styles.operationButtons}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.opHighlights}
            activeOpacity={1}
            underlayColor={'blue'}
            onPress={() => {
              onOperationClick('/');
            }}>
            <Text style={styles.operationButtons}>/</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.opHighlights}
            activeOpacity={1}
            underlayColor={'blue'}
            onPress={() => {
              onOperationClick('*');
            }}>
            <Text style={styles.operationButtons}>*</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    backgroundColor: '#',
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  calculation: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    backgroundColor: '#000000',
    flex: 3,
  },
  operations: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
  },
  resultText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingRight: 10,
  },
  calculationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingRight: 20,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  number: {
    fontSize: 30,
    backgroundColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 100,
    width: '100%',
    alignItems: 'center',
  },
  operationButtons: {
    fontSize: 25,
    backgroundColor: '#ff9506',
    paddingHorizontal: 15,
    borderRadius: 100,
  },
  highlights: {
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
  },
  opHighlights: {
    alignItems: 'center',
  },
  number0: {
    fontSize: 30,
    backgroundColor: 'gray',
    paddingHorizontal: 40,
    borderRadius: 100,
    width: '100%',
    alignItems: 'center',
  },
});
