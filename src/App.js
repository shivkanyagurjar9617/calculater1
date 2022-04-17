import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { divideCreator, minusCreator, multipalCreator, plusCreator } from './actionCreator';

function App() {
// state/hook variable

const data = useSelector((store)=>{
 return store ;
})
 
let dispatch = useDispatch()
// function defination

let divide = ()=>{
  //alert('ok')
  let amount = parseInt(prompt('enter value by divide'))
  alert (amount)
  dispatch(divideCreator(amount))
}

let multipal = ()=>{
  //alert ('hello')
  let amount =parseInt (prompt('enter value multiplication'))
  alert(amount)
  dispatch(multipalCreator(amount))
}
let plus = ()=>{
  //alert ('hello')
  let amount =parseInt (prompt('enter value plus'))
  alert(amount)
  dispatch(plusCreator(amount))
}
let minus = ()=>{
  //alert ('hello')
  let amount =parseInt (prompt('enter value plus'))
  alert(amount)
  dispatch(minusCreator(amount))
}
// return statement


  return (
          <>
            
            <h1 style={{color :'red'}}>Divide/Multipal/Addition/Subtraction</h1>
            <br/>
            {data}
            <br/>
            <br/>
          <button onClick={()=>{divide()}}>divide</button>
          <button onClick={()=>{multipal()}}>multipal</button>
          <button onClick={()=>{plus()}}>plus</button>
          <button onClick={()=>{minus()}}>minus</button>
          </>
  );
}

export default App;
