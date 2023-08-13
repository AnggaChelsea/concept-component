import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpendFilter from './ExpendFilter'
import './Expense.css'

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')


  const filterChange = filterDataChange => {
    console.log('expenses.js')
    console.log(filterDataChange)
    setFilteredYear(filterDataChange)
  }
  return (
    <div>
    <Card className='expenses'>
    <ExpendFilter selected={filteredYear} onChangeFilter={filterChange} />
    {
      props.item.map((expense) => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)
    }
    </Card>
    </div>
  )
}
