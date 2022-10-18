import { useSelector, useDispatch} from "react-redux";
import { act } from "./Slices/CounterSlice";
import "./App.css";
import { useState } from "react";
// import { mapToSate } from "./Map";

function App(props) {
  // console.log(props)
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);
  const selectHandler = (e) => {
    if (e.target.value === "incr") dispatch(act.increment({ incr: input }));
    if (e.target.value === "decr") dispatch(act.decrement({ decr: input }));
  };
  return (
    <div className="App">
      <h1>{data.count}</h1>
      <button onClick={() => dispatch(act.increment({ incr: 1 }))}>Increase</button>
      <button onClick={() => dispatch(act.decrement({ decr: 1 }))}>Decrease</button>
      <div>
        <br />
        <input type={'number'} onChange={(event) => setInput(event.target.value)} />
        <select onChange={selectHandler}>
          <option value={'action'}>--select--</option>
          <option value={"incr"}>increment by entered value</option>
          <option value={"decr"}>decrement by entered value</option>
        </select>
      </div>
    </div>
  );
}

export default App;
