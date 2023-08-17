import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import { useState } from 'react'


function ExpenseItem(props){

    const [price , setPrice] = useState(props.amount)

    return (
      <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className='expense-item__price'>${price}</div>
      </div>
      <button
        onClick = {()=>{
          setPrice(0)
        }}
      >delete</button>
    </div>
    )
}

export default ExpenseItem