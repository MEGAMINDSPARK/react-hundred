import React from 'react';
import './ExpenseItem.css';
function ExpenseDetails(props) {
  return (
    <div className='expense-details'>
      <h2>{props.title}</h2>
      <div className='expense-details__price'>${props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
// this