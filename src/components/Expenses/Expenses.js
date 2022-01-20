import { useState } from 'react';
import './Expenses.css';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenesesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenesesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;    