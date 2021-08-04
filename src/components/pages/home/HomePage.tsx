import { observer } from 'mobx-react-lite';

import todoStore from 'stores/TodoStore';
import MainTemplate from 'components/templates/main/MainTemplate';

const HomePage: React.FC = observer(() => {
  return <MainTemplate title="Home page" todoArray={todoStore.todos} />;
});

export default HomePage;
