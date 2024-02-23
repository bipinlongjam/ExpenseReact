import { useState } from "react";
import Card from "../UI/Card";
import './Expense.css'
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";



const Expense = (props) =>{
    const[filteredYear, setFilteredYear] = useState('All');

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear)
    }
    const filterExpense = filteredYear === 'All' ? props.items : props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    })

       
    
    return(
    <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChange={filterChangeHandler}/>
        <ExpenseList items={filterExpense}/>
    </Card>
    )
}
export default Expense;