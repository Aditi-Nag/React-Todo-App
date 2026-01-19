import React,{useReducer} from 'react';

const initialState = {
       count:0
}

const INCREMENT = "INCREMENT"
const RESET = "RESET"
const DECREMENT ="DECREMENT"

type IncrementActionType = {type: "INCREMENT"};
type ResetActionType = {type: "RESET"};
type DecrementActionType = {type: "DECREMENT"};
type CounterActionType = IncrementActionType | ResetActionType | DecrementActionType

const reducer = (state:typeof initialState , action:CounterActionType) =>{
         switch (action.type) {
          case "INCREMENT":
            return {count: state.count + 1}
            
         case "RESET":
            return {count: 0}
           case "DECREMENT":
            return {count: state.count - 1}
          default:
            throw new Error();
         }
};


const Counter = () => {
  const [state ,dispatch] = useReducer(reducer , initialState)
  return (
    <div>
      <h1> Count:0</h1>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  )
};

export default Counter;