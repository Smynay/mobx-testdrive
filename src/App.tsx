import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from 'routes/MainRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <MainRoutes />
      </div>
    </Router>
  );
};

export default App;
