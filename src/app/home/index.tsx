import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodo, updateStatus} from '@redux/actions';
import {Label, Header} from '@components';
import {
  Container,
  TodoItem,
  TodoTitle,
  AddTodoContainer,
  AddTodoInput,
  AddTodoButton,
  CircleBar,
  TodoItemRowContainer,
  SpaceContainer,
} from './style';
import {Todo} from '@redux/types';
import {Title, CompletedTodo} from '../../components/Text/index';
import {FadeInUp, FadeInDown} from 'react-native-reanimated';
const Home = () => {
  const dispatch = useDispatch();
  // lists
  const todos = useSelector((state: any) => state.todoReducer?.todos);
  const completeds = useSelector((state: any) => state.todoReducer?.completeds);
  // local todo state
  const [newTodo, setNewTodo] = useState('');

  // add todo
  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(
        addTodo({
          id: todos.length + 1, // Assigning a unique id for the new todo
          title: newTodo,
          status: 'todo',
        }),
      );
      setNewTodo('');
    }
  };

  //delete todo
  const handleDeleteTodo = (todo: Todo) => {
    dispatch(deleteTodo(todo));
  };

  // update todo status
  const handleUpdateStatus = (todo: Todo) => {
    const newStatus = todo.status === 'todo' ? 'completed' : 'todo';
    dispatch(updateStatus({...todo, status: newStatus}));
  };

  // render todo item
  const RenderTodoItem = useCallback(
    ({item}) => (
      <TodoItem
        entering={FadeInUp}
        exit={FadeInDown}
        key={`todos-${item?.id}-${item?.status}`}>
        <TodoItemRowContainer onPress={() => handleUpdateStatus(item)}>
          {/* circle bar */}
          <CircleBar isCompleted={item.status === 'completed'}>
            {item.status === 'completed' && (
              <Label fontSize={'fontQuinary'}>✔️</Label>
            )}
          </CircleBar>
          {/* todo title */}
          {item.status === 'completed' ? (
            <CompletedTodo
              color={'textPrimary'}
              numberOfLines={4}
              style={{flex: 0.9}}>
              {item.title}
            </CompletedTodo>
          ) : (
            <Label color={'textPrimary'} numberOfLines={4} style={{flex: 0.9}}>
              {item.title}
            </Label>
          )}
        </TodoItemRowContainer>
        {/* delete button */}
        <AddTodoButton onPress={() => handleDeleteTodo(item)}>
          <Label fontSize={'fontQuinary'}>❌</Label>
        </AddTodoButton>
      </TodoItem>
    ),
    [],
  );

  return (
    <>
      {/* header */}
      <Header completed={completeds?.length} todos={todos?.length} />
      <Container bounces={false}>
        {/* todo title */}
        <Title marginBottom={4}> Todos </Title>
        {/* todo list */}
        {todos.map(item => (
          <RenderTodoItem
            key={`todos-${item?.id}-${item?.status}`}
            item={item}
          />
        ))}

        {/* completed title */}
        <Title marginTop={16} marginBottom={4}>
          Completed
        </Title>
        {/* completed list */}
        {completeds.map(item => (
          <RenderTodoItem
            key={`completeds-${item?.id}-${item?.status}`}
            item={item}
          />
        ))}
        <SpaceContainer />
      </Container>
      {/* add container */}
      <AddTodoContainer entering={FadeInUp}>
        {/* input */}
        <AddTodoInput
          placeholder="Add new todo..."
          value={newTodo}
          onChangeText={setNewTodo}
        />
        {/* add button */}
        <AddTodoButton onPress={handleAddTodo}>
          <Label>➕</Label>
        </AddTodoButton>
      </AddTodoContainer>
    </>
  );
};

export default Home;
