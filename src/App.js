import { useState } from 'react';
import { nanoid } from 'nanoid';
import Container from 'components/Container';
import TodoList from 'components/TodoList';
import Form from 'components/Form';

const App = () => {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);

  const onInputChange = e => {
    setText(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    if (text.trim().length) {
      setTodo([
        ...todo,
        {
          id: nanoid(),
          completed: false,
          text,
        },
      ]);
      setText('');
    }
  };

  const deleteTodo = todoId => {
    setTodo(todo.filter(({ id }) => id !== todoId));
  };

  const toggleCompleted = todoId => {
    setTodo(
      todo.map(el => {
        if (el.id !== todoId) {
          return el;
        }
        return {
          ...el,
          completed: !el.completed,
        };
      })
    );
  };

  return (
    <Container>
      <Form text={text} onInputChange={onInputChange} addTodo={addTodo} />
      <TodoList
        todo={todo}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
    </Container>
  );
};

export default App;
