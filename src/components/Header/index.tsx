import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Title, Label} from '@components';
import {Container, RowContainer} from './styles';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  completed: number;
  todos: number;
};

export const Header = (props: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Container>
      <RowContainer>
        <Pressable onPress={() => navigation.goBack()} style={{marginRight: 8}}>
          <Title>🔙</Title>
        </Pressable>
        <Title>My Tasks</Title>
      </RowContainer>
      <Label fontSize={'fontSenary'}>
        {props?.completed} tasks Completed, and {props?.todos} tasks in todo
      </Label>
    </Container>
  );
};
