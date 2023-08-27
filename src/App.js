
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/NewExpense/ExpenseFilter';
import { expenses } from './constants';
import { useState } from 'react';

function App() {
  const [expenseList , setExpenseList] = useState(expenses)
  const [filteredYear, setFilteredYear] = useState('2020');

  const variablelIstener = (expensedata)=>{
    console.log('Inside App')
    console.log(expensedata)
  }

  const filterHandler= (year )=>{ 
    setFilteredYear(year)
    const newList = expenseList.filter((item)=>{
      
      return item.date.getFullYear() == year
    })
    setExpenseList(newList)

  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense selected = {filteredYear} onChangevariable = {variablelIstener}/>
      <ExpenseFilter onFilter ={filterHandler}/>
      <Expenses items={expenseList} />
    </div>
  );

}

export default App;