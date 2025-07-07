import './App.css'
//import React,{Component} from 'react';
// class Greet extends Component{
//     render(){
//         return (
//             <div>
//                 <p>Hi, This is a class based component</p>
//             </div>
//         );
//     }
// }
// export default Greet
// class Counter extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             count : 0,
//         };
//     }
//     incrementCount = () => {
//         this.setState({count: this.state.count + 1});
//     };
//     render(){
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.incrementCount}>Increment Count</button>
//             </div>
//         )
//     }
// }
// export default Counter;
// import React from 'react';
// const Hello = () => {
//     return (
//         <div>
//             <p>Hello, I am a functional component!</p>
//         </div>
//     )
// }
// export default Hello;
// import React,{useState} from 'react';
// const Counter =() => {
//     const [count, setCount] = useState(0); // Declare the state and update function
//     const incrementCount = () =>{
//         setCount(count + 1); // Update the state
//     };
//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={incrementCount}>Increment Count</button>
//         </div>
//     );
// };
// export default Counter;

// import React, { Component } from 'react';
// // Parent Component
// function App() {
//     return (
//         <div>
//             <h1>Welcome to React Props Example</h1>
//             < Greeting name = "John" age={25} />
//             <Greeting name = "Alice" age={30} />
//         </div>
//     );
// }
// // Child Component
// function Greeting(props) {
//     return (
//         <div>
//             <p>Hello, my name is {props.name}</p>
//             <p>I am {props.age} years old</p>
//         </div>
//     );
// }
// export default App;

// import React , {Component} from 'react';
// function App() {
//     const handleClick = () => {
//         alert('Button clicked');
//     };
//     return <ChildComponent onClick={handleClick} />;
// }
//
// function ChildComponent(props) {
//     return <button onClick={props.onClick}>Click Me</button>
// }
// // Export App Component {to render in your App}
// export default App;
import React, { Component } from 'react';
function Greeting({name}){
    return <h1>Hello,{name}!</h1>;
}
Greeting.defaultProps = {
    name: "Guest"
};

function App(){
    return (
        <div>
            <Greeting/>
            <Greeting name="John"/>
        </div>
    );
}
export default App;