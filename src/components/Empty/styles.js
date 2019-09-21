import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Wrapper = styled.View`
  background: #fff;
  border-radius: 4px;
  opacity: ${props => (props.past ? 0.6 : 1)};
  margin-bottom: 20px;
`;

export const Container = styled.View`
  padding: 20px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Title = styled.Text.attrs({})`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
