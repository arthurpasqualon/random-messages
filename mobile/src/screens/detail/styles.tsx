import styled from 'styled-components/native';
import fonts from '../../resources/Fonts';
import colors from '../../resources/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.secondary};
`;

export const Content = styled.View`
  padding: 10px 15px;
`;

export const Title = styled.Text`
  font-family: ${fonts.normal};
  margin: 10px;
  text-align: center;
  font-size: 28px;
  color: ${colors.white};
`;

export const Text = styled.Text`
  font-family: ${fonts.normal};
  margin: 10px;
  text-align: left;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.white};
`;

export const CenterContainer = styled.View`
  width: 100%;
  align-items: center;
`;
export const BottomContaienr = styled.View`
  width: 100%;
  align-items: center;
`;
