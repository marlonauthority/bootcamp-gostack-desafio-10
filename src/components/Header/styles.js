import styled from 'styled-components/native';
import logo from '../../assets/m.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: rgba(0, 0, 0, 0.1);
  flex-direction: row;
`;
export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.1);
  height: 64px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 24px;
  height: 24px;
`;
