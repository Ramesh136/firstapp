import React ,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditing , setIsEditing] = useState(false)

  const dataListener = (expensedata) =>{
    const expenseobject = {
      ...expensedata,
      id: Math.random().toString()
    };
    props.onChangevariable(expenseobject)
  }

  const clickHandler = ()=>{
    setIsEditing(true)
  }

  const stopEditing = ()=>{
    setIsEditing(false)
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={clickHandler}>Add More Expense</button>}
      {isEditing && <ExpenseForm onCancel = {stopEditing} onChangeState = {dataListener}/>} 
    </div>
  );
};

export default NewExpense;