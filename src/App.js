import { useReducer } from "react";
import reducer, { initialState } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
        <h1>Prueba</h1>
    </div>
  );
}

export default App;
