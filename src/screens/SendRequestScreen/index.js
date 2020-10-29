import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';

import { MaterialIcons } from '@expo/vector-icons';

import NumberPad from '../../components/NumberPad';


import Me from '../../assets/me.png'

const SendRequestScreen = () => {
  const [amount, setAmount] = useState("0");

  const convertToDollars = (currentAmount) => {
    const newAmount = currentAmount / 100;

    return newAmount.toLocaleString("en-US", { styled: "currency", currency: "USD" });
  }

  const pressKey = (item, index) => {
    setAmount((prev) => {
      return index != 10 ? prev + item : prev.slice(o, prev.length - 1);
    });
  }

  return (
   <Container>
     <Text center large heavy margin="16px 0 0 0" >Send</Text>

     <Amount>
       <Text title heavy >${convertToDollars(amount)}</Text>
       <Text bold color="#727479" >Choose amount to send</Text>
     </Amount>

     <User>
       <ProfilePhoto source={Me} />
       <UserDetails>
         <Text medium heavy >Daniel</Text>
         <Text bold color="#727479">Patreon</Text>
       </UserDetails>

     </User>
    


     <Send>
       <Text medium heavy >Send ${convertToDollars(amount)} to Daniel</Text>
     </Send>
    
    <Scroll>
     <NumberPad onPress={pressKey} />
    </Scroll>

     <StatusBar barStyle="light-content" />
   </Container>
  );
}

export default SendRequestScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e
`;

const Amount = styled.View`
  margin-top: 64px;
  align-items: center;
`

const User = styled.View`
  margin: 32px 16px;
  flex-direction: row;
  align-items: center;
`;

const ProfilePhoto = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 50px
`;

const UserDetails = styled.View`
  flex: 1;
  margin: 0 16px
`;

const Send = styled.TouchableOpacity`
  margin: 16px;
  background-color: #5196f4;
  padding: 16px 32px;
  align-items: center;
  border-radius: 12px;
`;

const Scroll = styled.ScrollView``;

const StatusBar = styled.StatusBar``;