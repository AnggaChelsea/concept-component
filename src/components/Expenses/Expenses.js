import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpendFilter from './ExpendFilter'
import './Expense.css'

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')


  const filterChange = filterDataChange => {
    setFilteredYear(filterDataChange)
  }
  const filterExpense = props.item.filter(exp => {
    return exp.date.getFullYear().toString() === filteredYear
  })
  return (
    <div>
    <Card className='expenses'>
    <ExpendFilter className="filter" selected={filteredYear} onChangeFilter={filterChange} />
    {
      filterExpense.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
    }
    </Card>
    </div>
  )
}
