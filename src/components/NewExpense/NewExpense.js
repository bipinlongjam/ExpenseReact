import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense =(props)=>{
    const [isAddingExpense, setIsAddingExpense] = useState(false)

    const startAddingExpenseHandler = () => {
        setIsAddingExpense(true);
    };

    const stopAddingExpenseHandler = () => {
        setIsAddingExpense(false);
    };
    const saveExpenseDataHandler = (enteredExpensedata)=>{
        const expenseData ={
            ...enteredExpensedata,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        stopAddingExpenseHandler();
    }
    return(
        <div className='new-expense'>
        {!isAddingExpense && <button onClick={startAddingExpenseHandler}>Add Expense</button>}
        {isAddingExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopAddingExpenseHandler} />}
    </div>
    )
}
export default NewExpense;