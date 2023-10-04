import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <Card className="expenses">
        <ExpenseItem 
              title={props.expenses[0].title} 
              date={props.expenses[0].date}
              amount={props.expenses[0].amount}
              />
      </Card>
    </div>
  )
}

export default Expenses;