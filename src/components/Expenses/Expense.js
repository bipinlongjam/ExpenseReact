import { useState } from "react";
import Card from "../UI/Card";
import './Expense.css'
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";



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
        {filterExpense.map(expense =><ExpenseItem 
        key ={expense.id} title={expense.title} amount={expense.amount} date={expense.date} location={expense.location}/>)}
        
    </Card>
    )
}
export default Expense;