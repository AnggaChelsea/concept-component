import React from 'react'

export default function ExpendFilter(props) {
//   const date = useState('')
  const changeFilteSelect = (event) => {
    props.onChangeFilter(event.target.value)
  }
  
  return ( 
    <div className='expense-filter'>
        <div className='expense-filter__control'>
            <label>Filter by year</label>
            <select onChange={changeFilteSelect}>
                <option value="2022" key="">2022</option>
                <option value="2021" key="">2021</option>
                <option value="2020" key="">2020</option>
                <option value="2019" key="">2019</option>
            </select>
        </div>
    </div>
  )
}
