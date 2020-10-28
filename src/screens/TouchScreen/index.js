import React from 'react';
import styled from 'styled-components';
import { Fontisto, MaterialIcon } from '@expo/vector-icons';

import Text from './components/Text';

export default TouchScreen = () => {
  return (
    <Container>
      <Text >MyBank</Text>
    </Container>
  )
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;