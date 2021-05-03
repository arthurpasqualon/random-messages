import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  Container,
  Image,
  LeftContainer,
  LeftIcon,
  HeaderContainer,
} from './styles';

function Header({backButton}: {backButton?: boolean}) {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const exit = require('assets/images/exit.png');
  const logo = require('assets/images/logo.png');

  return (
    <Container>
      <HeaderContainer style={{height: top + 80}}>
        {backButton && (
          <LeftContainer
            accessible={true}
            accessibilityLabel="Go back"
            accessibilityHint="Navigates to the previous screen"
            onPress={() => navigation.goBack()}>
            <LeftIcon source={exit} style={{marginTop: top}} />
          </LeftContainer>
        )}
        <Image style={{marginTop: top}} source={logo} />
      </HeaderContainer>
    </Container>
  );
}

export default Header;
