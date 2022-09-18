import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action/counter";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux</h1>
      <h1>Counter :{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>&nbsp;
      <button onClick={() => dispatch(decrement())}>Decrement</button>&nbsp;
    </div>
  );
}

export default App;
