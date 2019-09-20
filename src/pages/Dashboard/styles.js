import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const DateNavigator = styled.View`
  height: 30px;
  align-self: stretch;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const DateText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
})``;
