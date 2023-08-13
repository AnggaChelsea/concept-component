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
      <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date} />
      <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date} />
      <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date} />
      <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date} />
    </Card>
    </div>
  )
}
