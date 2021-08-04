import classNames from 'classnames';
import Plate from 'components/atoms/plate/Plate';
import { ITodo } from 'models/TodoModel';

import './TodoPlate.scss';

type PropTypes = {
  item: ITodo;
  number?: number;
};

const TodoPlate: React.FC<PropTypes> = ({ item, number }) => {
  return (
    <Plate
      className={classNames('todo-plate', {
        'todo-plate_completed': item.completed,
      })}
    >{`${number}. ${item.title}`}</Plate>
  );
};

export default TodoPlate;
