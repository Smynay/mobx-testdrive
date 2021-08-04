import MainTemplate from 'components/templates/main/MainTemplate';
import { observer } from 'mobx-react-lite';
import todoStore from 'stores/TodoStore';

const HomePage: React.FC = observer(() => {
  return <MainTemplate title="Home page" todoArray={todoStore.todos} />;
});

export default HomePage;
