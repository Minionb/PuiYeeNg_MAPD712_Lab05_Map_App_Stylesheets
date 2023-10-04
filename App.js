import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
    const [backgroundColor, setBackgroundColor] = useState('white')
    // set background color to Cyan
    const handleButton1Click = () => {
      setBackgroundColor('#008598');
    };
  
    // set background color to Yellow
    const handleButton2Click = () => {
      setBackgroundColor('#fed520');
    };

    // set background color to Purple
    const handleButton3Click = () => {
      setBackgroundColor('#841592');
    };
  
    // set background color to Orange
    const handleButton4Click = () => {
      setBackgroundColor('#ef7c13');
    };

  
  return (
    <View style={[styles.viewStyle, {backgroundColor}]}>   
    <View style={styles.buttonContainer1}>
      <TouchableOpacity style={styles.button1} onPress={() => handleButton1Click()}>
        <Text style={styles.textStyle}>Cyan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => handleButton2Click()}>
        <Text style={styles.textStyle}>Yellow</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer2}>
      <TouchableOpacity style={styles.button3} onPress={() => handleButton3Click()}>
        <Text style={styles.textStyle}>Purple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4} onPress={() => handleButton4Click()}>
        <Text style={styles.textStyle}>Orange</Text>
      </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  viewStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer1:{
    marginBottom: 120,
    flexDirection: 'row',
  },
  buttonContainer2:{
    flexDirection: 'row',
  },
  button1:{
    height: 50,
    width: 150,
    marginRight:30,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
    padding: 5,
    backgroundColor: '#008598',
    alignItems: 'center',
  },
  button2:{
    height: 50,
    width: 150,
    marginLeft:30,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
    padding: 5,
    backgroundColor: '#fed520',
    alignItems: 'center',
  },
  button3:{
    height: 80,
    width: 165,
    marginRight:30,
    borderWidth: 2,
    padding: 16,
    borderColor: 'black',
    backgroundColor: '#841592',
    alignItems: 'center',
  },
  button4:{
    height: 80,
    width: 165,
    marginLeft:30,
    borderWidth: 2,
    padding: 16,
    borderColor: 'black',
    backgroundColor: '#ef7c13',
    alignItems: 'center',
  },
  textStyle:{
    fontSize: 30,
    color: 'white'
  }
});
