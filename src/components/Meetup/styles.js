import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin-top: 30px;
  background: #fff;
  border-radius: 4px;
`;

export const Container = styled.View`
  padding: 20px;
`;

export const Banner = styled.Image`
  height: 150px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
export const Info = styled.View`
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: left;
`;

export const Schedule = styled.View`
  align-self: stretch;
  flex-direction: row;
  margin-top: 15px;
`;

export const ScheduleText = styled.Text`
  font-size: 13px;
  color: #999;
  margin: 0 5px;
`;

export const Place = styled.View`
  align-self: stretch;
  flex-direction: row;
  margin-top: 15px;
`;

export const PlaceText = styled.Text`
  font-size: 13px;
  color: #999;
  margin: 0 5px;
`;

export const Owner = styled.View`
  align-self: stretch;
  flex-direction: row;
  margin-top: 15px;
`;

export const OwnerText = styled.Text`
  font-size: 13px;
  color: #999;
  margin: 0 5px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background: #f94d6a;
  margin-top: 15px;
  border-radius: 4px;
  padding: 11px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;
