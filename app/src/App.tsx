import { useState } from "react";
import ResultCreate from "./components/ResultCreate";
import ResultList from "./components/ResultList";

export type Results = {
  id: number;
  title: string
}

const App = () => {
  const [results, setResults] = useState<Results[]>([]);

  const createResult = (title: string) => {
    const updateResults = [
      ...results,
      {
        id: Math.round(Math.random() * 9999),
        title
      }
    ];
    setResults(updateResults);
  };

  return(
    <div>
      <ResultList results={results} />
      <ResultCreate onCreate={createResult} />
    </div>
  );
};

export default App;
