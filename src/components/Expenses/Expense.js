import { useState } from "react";
import Card from "../UI/Card";
import './Expense.css'
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";



const Expense = (props) =>{
    const[filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear)
    }

    return(
    <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChange={filterChangeHandler}/>
        {props.items.map(expense =><ExpenseItem 
        key ={expense.id} title={expense.title} amount={expense.amount} date={expense.date} location={expense.location}/>)}
        
    </Card>
    )
}
export default Expense;