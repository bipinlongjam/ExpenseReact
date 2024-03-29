import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const [enteredTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');
    const [enterLocation, setEnterLocation] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:"",
    //     enterAmount:"",
    //     enterDate:"",
    //     enterLocation:"",
    // })
    const titleChangeHandler =(event)=>{
        setEnterTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // })
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle:event.target.value}
        // })
    }
    const amountChangeHandler =(event)=>{
        setEnterAmount(event.target.value)
    //    setUserInput({
    //     ...userInput,
    //     enterAmount:event.target.value,
    // })
    }
    const dateChangeHandler =(event)=>{
        setEnterDate(event.target.value)
    //    setUserInput({
    //     ...userInput,
    //     enterDate:event.target.value,
    // })
    }
    const locationChangeHandler =(event)=>{
        setEnterLocation(event.target.value)
    //    setUserInput({
    //     ...userInput,
    //     enterLocation:event.target.value,
    // })
    }

    const submitHandler =(event)=>{
        event.preventDefault();
        const expenseData ={
            title:enteredTitle,
            amount:enterAmount,
            date: new Date(enterDate),
            location: enterLocation
        }
        props.onSaveExpenseData(expenseData)
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
        setEnterLocation('');
    }
    const cancelHandler = () => {
        props.onCancel();
    };

    return(
        <form onSubmit={submitHandler} >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value ={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"  value ={enterAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2024-12-31" value={enterDate} onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Location</label>
                    <input type="text" value={enterLocation} onChange={locationChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={cancelHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;