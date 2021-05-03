import React from 'react';
import Button from '../../components/button';
import {markAsShown} from '../../store/onboarding';
import {useDispatch} from 'react-redux';
import strings from '../../locale/en-us';

import {
  ItemContainer,
  Title,
  Description,
  ContentContainer,
  Container,
  ButtonContainer,
} from './styles';
import {useNavigation} from '@react-navigation/core';
import theme from './theme';

function Onboarding() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {OnboardingStrings} = strings;

  const onPress = () => {
    dispatch(markAsShown());
    navigation.navigate('App');
  };

  return (
    <Container>
      <ItemContainer>
        <ContentContainer>
          <Title accessible={true} accessibilityLabel={OnboardingStrings.title}>
            {OnboardingStrings.title}
          </Title>
          <Description
            accessible={true}
            accessibilityLabel={OnboardingStrings.description}>
            {OnboardingStrings.description}
          </Description>
        </ContentContainer>
        <ButtonContainer>
          <Button
            labelText={OnboardingStrings.nextButton}
            onPress={onPress}
            theme={theme.button}
          />
        </ButtonContainer>
      </ItemContainer>
    </Container>
  );
}

export default Onboarding;
