// import React from 'react';
// // Simple rendering with div
// class App extends React.Component {
//     render() {
//         return (
//             // Extraneous div element
//             <div>
//                 <h1>Hello</h1>
//                 <p>How you doin?</p>
//             </div>
//         )
//     }
// }
// export default App;

// import React , {useRef} from 'react';
// function MyComponent(){
//     const inputRef = useRef(null);
//     const focusInput = () => {
//         inputRef.current.focus();
//     };
//     return (
//         <div>
//             <input ref={inputRef} type="text" />
//             <button onClick={focusInput}>Focus Input</button>
//         </div>
//     );
// }
// export default MyComponent;

// import React, {useReducer} from "react";
// // Step 1 : Define the initial state
// const initialState = {count : 0};
// // Step 2 : Define the reducer
// function reducer(state,action){
//     switch(action.type){
//         case "increment":
//             return {count : state.count + 1};
//             case "decrement":
//                 return {count : state.count - 1};
//                 case "reset":
//                     return {count : 0};
//                     default:
//                         throw new Error("Unknown action type");
//     }
// }
// export default function Counter(){
//     // Step 3: Use the useReducer hook
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div style={{ textAlign: "center", marginTop:"50px"}}>
//             <h1>Counter: {state.count}</h1>
//             <button onClick={() => dispatch({ type:"increment"})}>Increment</button>
//             <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
//             <button onClick={() => dispatch({ type:"reset"})}>Reset</button>
//         </div>
//     );
// }
// use CallBack()
// import React, { useState, useCallback } from 'react';
//
// const Child = React.memo(({handleClick}) => {
//     console.log("Child rendered");
//     return <button onClick={handleClick}>Click me!</button>;
// });
// const Parent = () => {
//     const [count, setCount] = useState(0);
//     // Without useCallback, a new handleClick function is created on every render
//     const handleClick = useCallback(() => {
//         alert("Button clicked!");
//     },[]);
//     return (
//         <div>
//             <h1>
//                 Count: {count}
//             </h1>
//             <button onClick={() => setCount(count+1)}>Increment</button>
//          <Child handleClick={handleClick} />
//         </div>
//     );
// };
// export default Parent;
