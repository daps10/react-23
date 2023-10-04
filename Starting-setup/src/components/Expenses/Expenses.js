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
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <p>Data for years {filterInfoText} is hidden.</p>
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