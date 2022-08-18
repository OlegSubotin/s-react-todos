const TodoItem = ({ id, text, completed, toggleCompleted, deleteTodo }) => {
  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      />
      <span>{text}</span>
      <span className="deleteBtn" onClick={() => deleteTodo(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
