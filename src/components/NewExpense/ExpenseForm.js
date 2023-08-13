import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [title,setTitle ] = useState("title");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  //   const {incre, setIncre} = useState(1);

  const titleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };
  const numberChange = (event) => {
    setAmount(event.target.value);
    console.log(amount);
    // Cascadia Code
  };
  const dateChange = (event) => {
    setDate(event.target.value);
    console.log(date);
    // Cascadia Code
  };
  //   const dataIncremnt = () => {
  //     let data = incre += 1;
  //     setIncre(data);
  //   }

//   const staticChangeIndifier = (indefir, eventValue) => {
//     if (indefir === "title") {
//       setTitle(eventValue.target.value);
//     } else if (indefir === "amount") {
//       setAmount(eventValue.target.value);
//     } else {
//       setDate(eventValue.target.value);
//     }
//   };

  //    const [inputState, setInputState] = useState({
  //         titleState: '',
  //         amountState: '',
  //         dateState: '',
  //     })

  const submitHandler = (event) => {
    event.preventDefault();
    const body = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log(body);
    props.saveDataHandler(body);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      {/* <h4>{dataIncremnt}</h4> */}
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>title</label>
            {/* <input type="text" onChange={(event) => staticChangeIndifier('title', event)} /> */}
            <input type="text" value={title} onChange={titleChange} />
          </div>
          <div className="new-expense__control">
            <label>amount</label>
            <input
              type="number"
              onChange={numberChange}
              min="0.01"
              step="0.01"
              value={amount}
            />
          </div>
          <div className="new-expense__control">
            <label>date</label>
            <input
              value={date}
              onChange={dateChange}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
}
