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

  // filtered expenses
  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // ternary alternative
  let expensesContent = <p>No Expenses found.</p>

  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem 
        key= {expense.id}
        title= {expense.title}
        amount= { expense.amount }
        date= { expense.date }
      />
    ));
  }

  return (
    <div>
      
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler}
        />

        {/* {
          filteredExpenses.length == 0 ? 
          (<p>No expenses found.</p>) :
          (
            filteredExpenses.map((expense) => 
              <ExpenseItem 
                key= { expense.id }
                title= {expense.title}
                amount= { expense.amount }
                date= { expense.date }
              />
            )
          )
        } */}

        {/* ternary alternative 

        { !filteredExpenses.length &&  (<p>No expenses found.</p>) }
        {
          (
            filteredExpenses.map((expense) => 
              <ExpenseItem 
                key= { expense.id }
                title= {expense.title}
                amount= { expense.amount }
                date= { expense.date }
              />
            )
          )
        }
        */}

        { expensesContent }

       
        {/* {
          filteredExpenses.map((expense) => 
          <ExpenseItem 
          key= {expense.id}
          title={expense.title} 
          date={expense.date}
          amount={expense.amount} />)
        }; */}

          
        {/* 
        Removed the static method which consider to add multiple objects
        
        <ExpenseItem 
              title={props.expenses[0].title} 
              date={props.expenses[0].date}
              amount={props.expenses[0].amount}
              /> */}
      </Card>
    </div>
  )
}

export default Expenses;