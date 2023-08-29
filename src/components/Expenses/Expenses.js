import React from 'react';

import ExpenseList from './ExpenseList'
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import { useState } from 'react';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const newList = props.items.filter((item)=>{  
    return item.date.getFullYear().toString() === filteredYear
  })

  const filterHandler= (year)=>{ 
    setFilteredYear(year)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected = {filteredYear} onFilter ={filterHandler}/>
      <ExpenseChart exp = {newList} />
      <ExpenseList items = {newList}/>
    </Card>
  );
}

export default Expenses;