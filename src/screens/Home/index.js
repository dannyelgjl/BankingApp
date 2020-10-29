import React from 'react';
import styled from 'styled-components';
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons';

import Text from '../../components/Text';

import purchaseData from '../../services/purchase';

const Home = () => {
  const renderPurchase = ({ item }) => (
    <Purchase>
    <PurchaseInfo>
      <Text heavy>{item.product}</Text>
      <Text bold margin="2px 0 2px 0" >{item.store}</Text>
      <Text small color="#727479" >{item.address}</Text>
    </PurchaseInfo>
      <Text heavy>{item.price}</Text>
    </Purchase>
  );
    

  return (
    <Container>
      <Header>
        <ProfilePhoto source={require('../../assets/me.png')}/>

        <Welcome>
          <Text heavy medium >Welcome,</Text>
          <Text>Daniel UI/UX</Text>
        </Welcome>
        <FontAwesome5  name="cog" size={24} color="#565656"/>
      </Header>

      <Text center title black >
        $9,184.17
      </Text>

      <Text center black color="#727479" >
        Current Balance
      </Text>

      <Purchases ListHeaderComponent={
        <>
         <TransactionsHeader>
           <Text>Last Purchases</Text>
           <MaterialIcons name="sort" size={24} color="#5196f4" />
         </TransactionsHeader>


         <SearchContainer>
            <AntDesign  name="search1" size={18} color="#5196f4" />
            <Search placeholder="Search Transactions..." />
           </SearchContainer>
        </>

      }

        data={purchaseData} 
        renderItem={renderPurchase} 
        showVerticalScrollIndicator={false} 
      />

      <StatusBar barStyle="light-content" />
    </Container>
  );
}

export default Home;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 16px 32px 16px;
`;

const ProfilePhoto = styled.Image`
  width: 40;
  height: 40px;
  border-radius: 20px
`;

const Welcome = styled.View`
  flex: 1;
  padding: 0 16px;
`

const Purchases = styled.FlatList `
  background-color: #2c2c2c;
  padding: 16px;
`;

const TransactionsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchContainer = styled.View`
  background-color: #3d3d3d;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  border-radius: 5px;
  margin: 16px 0;
`;

const Search = styled.TextInput`
  flex: 1;
  padding: 8px 16px;
  color: #dbdbdb
`;

const Purchase = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #393939;
  padding-bottom: 12px;
  margin-bottom: 12px
`;

const PurchaseInfo = styled.View``

const StatusBar = styled.StatusBar``;



