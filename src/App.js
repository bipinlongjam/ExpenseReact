
import { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense';
import ExpenseItem from './components/Expenses/ExpenseItem'
import NewExpense from './components/NewExpense/NewExpense';
import Card from './components/UI/Card';


const DUMMY_EXPENSES =[
  {id:1, title:"Food", amount: 100, date:new Date(2023, 3, 12), location:"New Delhi"},
  {id:2, title:"Dress", amount: 500, date:new Date(2023, 5, 9), location:"New Delhi"},
  {id:3, title:"Petrol", amount: 300, date:new Date(2023, 5, 9), location:"New Delhi"},
  {id:4, title:"Movie", amount: 150, date:new Date(2023, 3, 8), location:"Mumbai"}
]
const App = () => {
   
    const[expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense =>{
      setExpenses((prevExpenses) =>{
        return [expense, ...prevExpenses]
      })
    }
  return (
    <Card className="app">
      <NewExpense onAddExpense={addExpenseHandler}/>
       <Expense items={expenses}/>
    </Card>
  );
}

export default App;
