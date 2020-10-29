import React from 'react';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';

import Text from './Text';

const NumberPad = ({ onPress }) => {
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "#",
    "0",
    
    <MaterialIcons  name="keyboard-backspace" size={24} />,
  ]
  
  return (
    <KeyPad>
      {buttons.map((item, index) => {
        return (
          <Number key={index} onPress={() => onPress(item, index)} delayPressIn={0} >
            <Text large heavy>
              {item}
            </Text>
          </Number>
        )
      })}
    </KeyPad>
  );
}

export default NumberPad;

const KeyPad = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
  
`

const Number = styled.TouchableOpacity`
  width: 68px;
  height: 68px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  margin: 5px 20px;
  border-width: 1px;
  border-color: #fff
`