import React from 'react';
import styled from 'styled-components';
import { Fontisto } from '@expo/vector-icons'

import Text from '../../components/Text'

const PinScreen = ({ navigation }) => {
  return (
      <Container>
        <Text center heavy title color="#964ff0" margin="32px 0 0 0" >MyBank</Text>
        <Text center heavy medium margin="32px 0 0 0" >Enter your PIN code.</Text>

        <AccessPin>

        </AccessPin>

        <Text center bold margin="8px 0 0 0" color="#9c9c9f" >Forgot PIN?</Text>

        <UseTouch onPress={() => navigation.navigate("TouchScreen")}>
          <Fontisto name="locked" color="#964ff0" size={16} />
          <Text bold margin="0 0 0 8px" color="#964ff0">Use Touch ID</Text>
        </UseTouch>

        <StatusBar barStyle="light-content" />      
      </Container>
  )
}

export default PinScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e
`;

const AccessPin = styled.View`

`;

const UseTouch = styled.TouchableOpacity`
  margin: 32px 0 64px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StatusBar = styled.StatusBar`

`;