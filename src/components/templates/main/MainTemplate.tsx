import Typography, {
  TypographyAlign,
  TypographyVariants,
} from 'components/atoms/typography/Typography';
import TodoList from 'components/organisms/todoList/TodoList';
import { ITodo } from 'models/TodoModel';

type PropTypes = {
  title: string;
  todoArray: ITodo[];
};

/**
 * Renders main pages template by reciewed data
 */
const MainTemplate: React.FC<PropTypes> = ({ title, todoArray }) => {
  return (
    <>
      <Typography
        variant={TypographyVariants.TITLE}
        align={TypographyAlign.CENTER}
      >
        {title}
      </Typography>
      <TodoList todoArray={todoArray} />
    </>
  );
};

export default MainTemplate;
