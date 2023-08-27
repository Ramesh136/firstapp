import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {


  const dataListener = (expensedata) =>{
    const expenseobject = {
      ...expensedata,
      id: Math.random().toString()
    };
    props.onChangevariable(expenseobject)
  }
  return (
    <div className='new-expense'>
      
      <ExpenseForm onChangeState = {dataListener}/>
      
    </div>
  );
};

export default NewExpense;