import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props)=>{
    const [expenseAmount, setExpenseAmount] = useState(props.amount);
    const [isVisible, setIsVisible] = useState(true)
    const clickHandler =() =>{
        setIsVisible(false)
    }
    const handleAmountChange = () => {
        setExpenseAmount(100); // Change the expense amount to $100
      };
    return isVisible ?(
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
               <h2>{props.title}</h2> 
               <div className='expense-item__price'>Rs:{expenseAmount}</div>
               <div className='expense-item__location'>Loaction: {props.location}</div>
            </div>
            <button onClick={clickHandler}>Delete</button>
            <button onClick={handleAmountChange}>Change Amount</button>
        </Card>
        </li>
    ): null
    
}
export default ExpenseItem;