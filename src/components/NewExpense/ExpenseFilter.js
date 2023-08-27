import React from "react";

const ExpenseFilter = (props)=>{
    const filterHandler = (e)=>{
        const selectedYear = e.target.value
        console.log(selectedYear)
        props.onFilter(selectedYear)
    }
    return <div>
        <select value={props.selected} name="year" onChange={filterHandler}> 
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
    </div>

}

export default ExpenseFilter