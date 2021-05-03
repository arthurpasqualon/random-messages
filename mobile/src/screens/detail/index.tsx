import React from 'react';
import { StatusBar } from 'react-native';
import colors from '../../resources/Colors';
import {DetailProps} from '../../types';
import formatDate from '../../utils/formatDate';
import {Container, Title, Text, Content} from './styles';

function Detail({route}: DetailProps) {
  const {item} = route.params;

  return (
    <Container>
      <StatusBar backgroundColor={colors.primary} />
      <Content>
        <Title accessible={true} accessibilityLabel={item?.subject}>
          {item?.subject}
        </Title>
        <Text accessible={true} accessibilityLabel={item?.timestamp}>
          {formatDate(item.timestamp)}
        </Text>
        <Text accessible={true} accessibilityLabel={item?.detail}>
          {item.detail}
        </Text>
      </Content>
    </Container>
  );
}

export default Detail;
