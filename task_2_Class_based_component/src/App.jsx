import ClassCounter from './components/ClassCounter';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <div>
        <ClassCounter count={10} initialName="John" />
      </div>
    </div>
  );
};
