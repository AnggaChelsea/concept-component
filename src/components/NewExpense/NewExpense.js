import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
export default function NewExpense(props) {

  const onSaveHandler = (handlerInput) => {
    const dataHanlderInput = {
      ...handlerInput,
      id: Math.random().toString(),
    }
    // console.log(dataHanlderInput);
    props.onGetDataExpenses(dataHanlderInput)
  }




  return (
    <div className='new-expense'>
        <ExpenseForm saveDataHandler={onSaveHandler} />
    </div>
  )
}
