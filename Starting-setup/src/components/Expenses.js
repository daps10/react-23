import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses (props) {
  return (
    <div className="expenses">
      <ExpenseItem 
            title={props.expenses[0].title} 
            date={props.expenses[0].date}
            amount={props.expenses[0].amount}
            />
    </div>
  )
}

export default Expenses;