import React from 'react';
import styled from 'styled-components';

import Text from '../../components/Text';

const Home = () => {
  return (
    <Container>
      <Text>Home Screen</Text>

      <StatusBar barStyle="light-content" />
    </Container>
  );
}

export default Home;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const StatusBar = styled.StatusBar``;