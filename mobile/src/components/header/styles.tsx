import styled from 'styled-components/native';
import normalize from '../../utils/normalize';
import colors from '../../resources/Colors';

export const Container = styled.View`
  background-color: ${colors.secondary};
  width: 100%;
`;
export const HeaderContainer = styled.View`
  background-color: ${colors.primary};
  flex-direction: row;
  justify-content: center;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const Image = styled.Image`
  width: 54px;
  height: 54px;
  align-self: center;
`;

export const LeftIcon = styled.Image`
  width: ${normalize(25)}px;
  height: ${normalize(25)}px;
`;

export const LeftContainer = styled.TouchableOpacity`
  margin: 18px;
  position: absolute;
  left: 0px;
`;
