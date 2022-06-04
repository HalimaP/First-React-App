import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import React, {useState} from 'react';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
 const [title, setTitle] = useState(props.title);
   const clickHandler =() =>{
   setTitle('updated')
    console.log(title)
   }
   
    const amounts ='294.52';
  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>{" "}
      <div className='expense-item__price'>${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
