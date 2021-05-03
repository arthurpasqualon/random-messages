import styled from 'styled-components/native';
import fonts from '../../resources/Fonts';
import colors from '../../resources/Colors';
import {ReadProps} from '../../types';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.secondary};
`;

export const ItemContainer = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  border-bottom-color: ${({read}: ReadProps) =>
  read ? colors.read : colors.white};
  border-bottom-width: 1px;
  width: 90%;
  align-self: flex-end;
  padding: 5px 0px;
`;

export const ListTitle = styled.Text`
  font-family: ${fonts.normal};
  text-align: center;
  font-size: 25px;
  padding: 10px;
  color: ${colors.white};
`;

export const ItemDetail = styled.Text`
  font-family: ${fonts.normal};
  font-size: 18px;
  padding: 10px 5px;
  color: ${({read}: ReadProps) => (read ? colors.read : colors.white)};
`;

export const ItemTitle = styled.Text`
  font-family: ${fonts.normal};
  padding: 5px;
  font-size: 22px;
  padding: 5px;
  color: ${({read}: ReadProps) => (read ? colors.read : colors.white)};
  flex: 1;
`;

export const TitleContainer = styled.View`
flex-direction: row;
justify-content: space-between;
flex: 1;
`;
