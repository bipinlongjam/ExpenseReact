
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem'
import NewExpense from './components/NewExpense/NewExpense';
import Card from './components/UI/Card';

const App = () => {
    const expenses =[
      {id:1, title:"Food", amount: 100, date:new Date(2023, 3, 12), location:"New Delhi"},
      {id:2, title:"Dress", amount: 500, date:new Date(2023, 5, 9), location:"New Delhi"},
      {id:3, title:"Petrol", amount: 300, date:new Date(2023, 5, 9), location:"New Delhi"},
      {id:4, title:"Movie", amount: 150, date:new Date(2023, 3, 8), location:"Mumbai"}
    ]

  return (
    <Card className="App">
      <NewExpense/>
       <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} location={expenses[0].location}/>
       <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} location={expenses[1].location}/>
       <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} location={expenses[2].location}/>
       <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} location={expenses[3].location}/>
    </Card>
  );
}

export default App;
