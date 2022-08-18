import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'components/Container';
import TodoList from 'components/TodoList';
import Form from 'components/Form';
import { addTodo } from 'store/todoSlice';

const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onInputChange = e => {
    setText(e.target.value);
  };

  const addTask = e => {
    e.preventDefault();
    if (text.trim().length) {
      dispatch(addTodo({ text }));
      setText('');
    }
  };

  return (
    <Container>
      <Form onInputChange={onInputChange} addTodo={addTask} text={text} />
      <TodoList />
    </Container>
  );
};

export default App;
