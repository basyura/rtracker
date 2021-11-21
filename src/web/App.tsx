import './App.scss';
import { TaskList } from './TaskList';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <TaskList></TaskList>
    </div>
  );
};
