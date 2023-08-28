//import './ExpenseItem.css';

// function ExpenseItem(props) {
//   return (
//     <div className='expense-item'>
//       <div>
//         <div>Month</div>
//         <div>Year</div>
//         <div>Day</div>

//       </div>
//       <div>{props.date.toISOString()}</div>
//       <div className='expense-item__description'>
//         <h2>{props.title}</h2>
//         <div className='expense-item__price'>${props.amount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;

import React from 'react';
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} />
    </div>
  );
}

export default ExpenseItem;
