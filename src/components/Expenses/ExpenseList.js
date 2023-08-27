import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'

const ExpenseList = (props) => {

    return <ul className='expenses-list'>
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