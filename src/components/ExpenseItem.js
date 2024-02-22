import './ExpenseItem.css'

function ExpenseItem(props){
    const expenseDate = new Date(2024, 2, 19);
    const expenseTitle = 'Food';
    const expenseAmount = 200;
    const expenseLocation = "New Delhi"
    return(
        <div>   
            <div className="expense-item">
            <div>{props.date.toDateString()}</div>
            <div className='expense-item__description'>
               <h2>{props.title}</h2> 
               <div className='expense-item__price'>Rs: {props.amount}</div>
               <div className='expense-item__location'>Loaction: {props.location}</div>
            </div>
            {/* <div className='expense-item__description'>
               <h2>Petrol</h2> 
               <div className='expense-item__price'>Rs: 100</div>
            </div>
            <div className='expense-item__description'>
               <h2>Movies</h2> 
               <div className='expense-item__price'>Rs: 200</div>
            </div> */}
    </div>
        </div>
    
    )
}
export default ExpenseItem;