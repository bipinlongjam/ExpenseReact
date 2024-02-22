import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props)=>{
    const [isVisible, setIsVisible] = useState(true)
    const clickHandler =() =>{
        setIsVisible(false)
    }
    return isVisible ?(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
               <h2>{props.title}</h2> 
               <div className='expense-item__price'>Rs: {props.amount}</div>
               <div className='expense-item__location'>Loaction: {props.location}</div>
            </div>
            <button onClick={clickHandler}>Delete</button>
        </Card>
    ): null
}
export default ExpenseItem;