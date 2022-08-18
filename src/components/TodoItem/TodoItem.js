import { useDispatch } from 'react-redux';
import { deleteTodo, toggleCompeted } from 'store/todoSlice';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const removeTask = id => {
    dispatch(deleteTodo({ id }));
  };

  const toggleTask = id => {
    dispatch(toggleCompeted({ id }));
  };

  return (
    <li>
      <input
        className="checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
      />
      <span>{text}</span>
      <span className="deleteBtn" onClick={() => removeTask(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
