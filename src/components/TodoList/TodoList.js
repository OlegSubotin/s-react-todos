import TodoItem from 'components/TodoItem';

const TodoList = ({ todo, toggleCompleted, deleteTodo }) => {
  return (
    <ul>
      {todo.map(el => (
        <TodoItem
          key={el.id}
          id={el.id}
          text={el.text}
          completed={el.completed}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
