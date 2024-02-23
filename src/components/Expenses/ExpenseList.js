import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = (props) =>{

    let allItemIist = props.items.map((expense) =>(<ExpenseItem 
        key ={expense.id} title={expense.title} amount={expense.amount} 
        date={expense.date} location={expense.location}
        />
        ))
        
    if(props.items.length === 0){
        return <h2 className="expense-list__fallback">Found no expense</h2>
    } 
    else if(props.items.length === 1){
        return <div>{allItemIist} <h2 className="expense-list__fallback">Only single Expense here. Please add more...</h2></div>
    }

    return(
        <ul className="expense-list">
        {
        //      props.items.map((expense) =>(<ExpenseItem 
        // key ={expense.id} title={expense.title} amount={expense.amount} 
        // date={expense.date} location={expense.location}
        // />
        // ))
        allItemIist
        }
        </ul>
    )
}

export default ExpenseList;