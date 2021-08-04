import classNames from 'classnames';
import Typography, {
  TypographyVariants,
} from 'components/atoms/typography/Typography';
import TodoPlate from 'components/molecules/todoPlate/TodoPlate';
import { ITodo } from 'models/TodoModel';

import './TodoList.scss';

type PropTypes = {
  todoArray: ITodo[];
  title?: string;
  className?: string;
};

const TodoList: React.FC<PropTypes> = ({ todoArray, title, className }) => {
  return (
    <div className={classNames('todo-list', className)}>
      {title && (
        <Typography variant={TypographyVariants.SUBTITLE}>{title}</Typography>
      )}

      {todoArray.map((todo, index) => (
        <TodoPlate key={todo.id} number={index + 1} item={todo} />
      ))}
    </div>
  );
};

export default TodoList;
