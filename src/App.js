
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { expenses } from './constants';
import { useState } from 'react';

function App() {

  const [expenseList , setExpenseList] = useState(expenses)
  const variablelIstener = (expensedata)=>{
    console.log('Inside App')
    console.log(expensedata)
    setExpenseList(prevExpense => {
      return [expensedata , ...prevExpense]
    })
  }

  


  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense  onChangevariable = {variablelIstener}/>
      <Expenses items={expenseList} />
    </div>
  );

}

export default App;