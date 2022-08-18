import { useSelector } from 'react-redux';
import TodoItem from 'components/TodoItem';

const TodoList = () => {
  const todo = useSelector(state => state.todos.todos);
  return (
    <ul>
      {todo.map(el => (
        <TodoItem
          key={el.id}
          id={el.id}
          text={el.text}
          completed={el.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
