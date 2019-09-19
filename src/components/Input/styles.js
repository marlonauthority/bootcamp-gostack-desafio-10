import styled from 'styled-components/native';

export const Container = styled.View`
  height: 50px;
  padding: 0 15px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.6)',
})`
  flex: 1;
  font-size: 18px;
  margin-left: 20px;
  color: #fff;
`;
