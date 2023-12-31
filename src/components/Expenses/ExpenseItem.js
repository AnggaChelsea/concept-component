import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
export default function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // const clickedEvent = () => {
  //   setTitle('updated');
  //   console.log(title);
  // }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
        <div className='expense-item__description' >
        <h2>{ props.title }</h2>
        <div className='expense-item__price'>$ {props.amount}</div>
        </div>
        {/* <button onClick={clickedEvent}>Change title</button> */}
    </Card>
  )
}
