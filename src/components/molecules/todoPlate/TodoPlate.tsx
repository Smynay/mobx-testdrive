import classNames from 'classnames';

import './TodoPlate.scss';

import { ITodo } from 'models/TodoModel';
import Plate from 'components/atoms/plate/Plate';

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
