import './App.css';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <Todo item="공부하기" name="csh1" />
      <Todo item="잠자기" name="csh2" />
      <Todo item="운동하기" name="csh2" />
    </div>
  );
}

export default App;
