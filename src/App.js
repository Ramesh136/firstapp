import ExpenseHeader from './components/ExpenseHeader';
import ExpenseList from './components/ExpenseList';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
      </header>
      <ExpenseHeader />
      <ExpenseList />
    </div>
  );
}

export default App;
