import { useState } from "react";
import ResultCreate from "./components/ResultCreate";

const App = () => {
  const [result, setResult] = useState([]);

  const createResult = (title: string) => {
    console.log(`Need to add result with: ${title}`);
  };

  return(
    <div>
      <ResultCreate onCreate={createResult} />
    </div>
  );
};

export default App;
