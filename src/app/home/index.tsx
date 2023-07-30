import {View, Text} from 'react-native';
import React from 'react';
import {Container} from './style';
import {
  Title,
  Subtitle,
  Label,
  Text as CustomText,
  SmallText,
  ErrorText,
  CompletedTodo,
  HighlightedText,
} from '@components';

const Home = () => {
  return (
    <Container>
      {/* Title */}
      <Title color={'textPrimary'} fontSize={'fontPrimary'}>
        Hello world - Title with color and fontSize
      </Title>

      <Title fontSize={'fontPrimary'}>
        Hello world - Title with fontSize only
      </Title>

      <Title color={'textPrimary'}>Hello world - Title with color only</Title>

      <Title>Hello world - Title without color and fontSize</Title>

      {/* Subtitle */}
      <Subtitle color={'secondary'} fontSize={'fontSecondary'}>
        Hello world - Subtitle with color and fontSize
      </Subtitle>

      <Subtitle fontSize={'fontSecondary'}>
        Hello world - Subtitle with fontSize only
      </Subtitle>

      <Subtitle color={'secondary'}>
        Hello world - Subtitle with color only
      </Subtitle>

      <Subtitle>Hello world - Subtitle without color and fontSize</Subtitle>

      {/* Label */}
      <Label color={'error'} fontSize={'fontTertiary'}>
        Hello world - Label with color and fontSize
      </Label>

      <Label fontSize={'fontTertiary'}>
        Hello world - Label with fontSize only
      </Label>

      <Label color={'error'}>Hello world - Label with color only</Label>

      <Label>Hello world - Label without color and fontSize</Label>

      {/* CustomText */}
      <CustomText color={'text'} fontSize={'fontQuinary'}>
        Hello world - CustomText with color and fontSize
      </CustomText>

      <CustomText fontSize={'fontQuinary'}>
        Hello world - CustomText with fontSize only
      </CustomText>

      <CustomText color={'text'}>
        Hello world - CustomText with color only
      </CustomText>

      <CustomText>
        Hello world - CustomText without color and fontSize
      </CustomText>

      {/* SmallText */}
      <SmallText color={'blue'} fontSize={'fontSenary'}>
        Hello world - SmallText with color and fontSize
      </SmallText>

      <SmallText fontSize={'fontSenary'}>
        Hello world - SmallText with fontSize only
      </SmallText>

      <SmallText color={'blue'}>
        Hello world - SmallText with color only
      </SmallText>

      <SmallText>Hello world - SmallText without color and fontSize</SmallText>

      {/* ErrorText */}
      <ErrorText color={'error'} fontSize={'fontSeptenary'}>
        Hello world - ErrorText with color and fontSize
      </ErrorText>

      <ErrorText fontSize={'fontSeptenary'}>
        Hello world - ErrorText with fontSize only
      </ErrorText>

      <ErrorText color={'error'}>
        Hello world - ErrorText with color only
      </ErrorText>

      <ErrorText>Hello world - ErrorText without color and fontSize</ErrorText>

      {/* CompletedTodo */}
      <CompletedTodo color={'grey'} fontSize={'fontQuinary'}>
        Hello world - CompletedTodo with color and fontSize
      </CompletedTodo>

      <CompletedTodo fontSize={'fontQuinary'}>
        Hello world - CompletedTodo with fontSize only
      </CompletedTodo>

      <CompletedTodo color={'grey'}>
        Hello world - CompletedTodo with color only
      </CompletedTodo>

      <CompletedTodo>
        Hello world - CompletedTodo without color and fontSize
      </CompletedTodo>

      {/* HighlightedText */}
      <HighlightedText color={'textPrimary'} fontSize={'fontQuinary'}>
        Hello world - HighlightedText with color and fontSize
      </HighlightedText>

      <HighlightedText fontSize={'fontQuinary'}>
        Hello world - HighlightedText with fontSize only
      </HighlightedText>

      <HighlightedText color={'textPrimary'}>
        Hello world - HighlightedText with color only
      </HighlightedText>

      <HighlightedText>
        Hello world - HighlightedText without color and fontSize
      </HighlightedText>
    </Container>
  );
};

export default Home;
