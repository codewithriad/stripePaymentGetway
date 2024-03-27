import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button
          className="btn btn-primary font-medium text-2xl"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button>
      </div>
    </>
  );
}

export default App;
