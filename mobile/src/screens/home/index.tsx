/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React, { useMemo } from 'react';
import {RefreshControl, StatusBar} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import ErrorContent from '../../components/error-content';
import useRequest from '../../hooks/useRequest';
import colors from '../../resources/Colors';
import {api} from '../../services/api';
import {setRead} from '../../store/list';
import {OnPressProps} from '../../types';
import formatDate from '../../utils/formatDate';
import {
  Container,
  ListTitle,
  ItemContainer,
  ItemDetail,
  ItemTitle,
  TitleContainer,
} from './styles';

function Home() {
  const url = `${api}`;
  const {data, error, loading, refresh} = useRequest({url});
  const readIds = useSelector((state: any) => state.list.readIds);
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const onPressItem = ({item}: OnPressProps) => {
    dispatch(setRead(item.id));
    navigate('Detail', {item});
  };

  const listData = useMemo(() => {
    if(!data?.messages?.length) return []
    const sorted = data?.messages.sort((a: any, b: any) => a.timestamp.localeCompare(b.timestamp))
    return sorted.reverse()
  },[data])

  const isRead = (id: string) => {
    return readIds.find((item: string) => item === id);
  };

  return (
    <>
      <Container>
      <StatusBar backgroundColor={colors.primary} />
        <ErrorContent condition={!!error && !data} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listData}
          keyExtractor={(item: any) => `${item?.id}`}
          refreshControl={
            <RefreshControl
              tintColor={colors.white}
              refreshing={loading}
              onRefresh={refresh}
            />
          }
          refreshing={loading}
          ListHeaderComponent={() => <ListTitle>Messages</ListTitle>}
          renderItem={({item}: any) => {
            const read = isRead(item.id);
            return (
              <ItemContainer
                accessibilityLabel={item.subject}
                accessibilityHint="Tap to read more"
                onPress={() => onPressItem({item})}>
                <TitleContainer read={!!read}>
                  <ItemTitle numberOfLines={1} read={read}>
                    {item.subject}
                  </ItemTitle>
                  <ItemDetail read={read}>{formatDate(item.timestamp)}</ItemDetail>
                </TitleContainer>
                <ItemDetail numberOfLines={1} read={read}>{item.detail}</ItemDetail>
              </ItemContainer>
            );
          }}
        />
      </Container>
    </>
  );
}

export default Home;
