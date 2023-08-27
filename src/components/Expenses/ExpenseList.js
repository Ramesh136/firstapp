import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'

const ExpenseList = (props) => {

  if(props.items.length === 0){
    return <h2 className = "expenses-list__fallback">Found No Expense</h2>
  }
    return <ul className='expenses-list'>
      {props.items.length === 1 && <h2 className = "expenses-list__fallback">Only single Expense here</h2>}
    {
        props.items.map((item)=>{
          return  <ExpenseItem
            key = {item}
            title={item.title}
            amount={item.amount}
            date={item.date}
                  />
        })
    }
    </ul>  
}

export default ExpenseList