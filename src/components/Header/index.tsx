import {View, Text} from 'react-native';
import React from 'react';
import {Title, Label} from '@components';
import {Container} from './styles';

type HeaderProps = {
  completed: number;
  todos: number;
};

export const Header = (props: HeaderProps) => {
  return (
    <Container>
      <Title>My Tasks</Title>
      <Label fontSize={'fontSenary'}>
        {props?.completed} tasks Completed, and {props?.todos} tasks in todo
      </Label>
    </Container>
  );
};
